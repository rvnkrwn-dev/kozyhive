import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/user_model.dart';
import '../service/dio_client.dart';

class AuthProvider with ChangeNotifier {
  UserModel? _user;
  String? _accessToken;
  String? _refreshToken;
  Timer? _refreshTimer;

  UserModel? get user => _user;
  bool get isAuthenticated => _user != null;
  String? get accessToken => _accessToken;
  String? get refreshToken => _refreshToken;

  // Fungsi login
  Future<Map<String, dynamic>> login(String email, String password) async {
    try {
      final response = await DioClient.instance.post(
        '/api/auth/login',
        data: {'email': email, 'password': password},
      );

      if (response.statusCode == 200) {
        _user = UserModel.fromMap(response.data['data']['user']);
        _accessToken = response.data['access_token'];
        _refreshToken = response.data['refresh_token'];

        await _storeTokens(_accessToken!, _refreshToken!);
        _startAutoRefresh();

        notifyListeners();
        return {'message': response.data['message']};
      } else {
        return {'error': response.data['message'] ?? 'Login gagal'};
      }
    } on DioException catch (e) {
      return {'error': e.response?.data ?? 'Terjadi kesalahan saat login'};
    } catch (_) {
      return {'error': 'Terjadi kesalahan tak terduga'};
    }
  }

  // Fungsi register
  Future<Map<String, dynamic>> register(
    String fullName,
    String email,
    String password,
  ) async {
    try {
      final response = await DioClient.instance.post(
        '/api/auth/register',
        data: {'full_name': fullName, 'email': email, 'password': password},
      );
      return {'message': response.data['message']};
    } on DioException catch (e) {
      return {'error': e.response?.data ?? 'Terjadi kesalahan saat registrasi'};
    } catch (_) {
      return {'error': 'Terjadi kesalahan tak terduga'};
    }
  }

  // Fungsi refresh access token
  Future<bool> refreshTokenFromServer() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final storedRefreshToken = prefs.getString('refresh_token');

      if (storedRefreshToken == null) {
        return false;
      }

      final response = await DioClient.instance.get(
        '/api/auth/refresh',
        options: Options(
          headers: {
            'Cookie': 'refresh_token=$storedRefreshToken',
          },
        ),
      );

      if (response.statusCode == 200) {
        _accessToken = response.data['access_token'];

        if (response.data['refresh_token'] != null) {
          _refreshToken = response.data['refresh_token'];
        }

        await _storeTokens(_accessToken!, _refreshToken!);
        _startAutoRefresh();

        // Setelah berhasil refresh, langsung ambil data user terbaru
        await getUser();

        return true;
      }
      return false;
    } on DioException catch (_) {
      return false;
    } catch (_) {
      return false;
    }
  }

  // Fungsi ambil data user
  Future<bool> getUser() async {
    if (_accessToken == null) {
      return false;
    }

    try {
      final response = await DioClient.instance.get(
        '/api/auth/user',
        options: Options(
          headers: {
            'Authorization': 'Bearer $_accessToken',
          },
        ),
      );

      if (response.statusCode == 200) {
        _user = UserModel.fromMap(response.data['data']['user']);
        print(_user);
        notifyListeners();
        return true;
      } else {
        return false;
      }
    } on DioException catch (e) {
      // Kalau token invalid / expired, auto logout
      if (e.response?.statusCode == 401) {
        await logout();
      }
      return false;
    } catch (_) {
      return false;
    }
  }

  // Init auth di awal aplikasi
  Future<bool> initAuth() async {
    await _loadTokens();
    if (_refreshToken != null) {
      final success = await refreshTokenFromServer();
      if (success) {
        _startAutoRefresh();
      }
      return success;
    }
    return false;
  }

  // Logout
  Future<void> logout() async {
    _cancelAutoRefresh();
    _user = null;
    _accessToken = null;
    _refreshToken = null;
    await _clearTokens();
    notifyListeners();
  }

  // Menyimpan token ke storage
  Future<void> _storeTokens(String accessToken, String refreshToken) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('access_token', accessToken);
    await prefs.setString('refresh_token', refreshToken);
  }

  // Load tokens dari storage
  Future<void> _loadTokens() async {
    final prefs = await SharedPreferences.getInstance();
    _accessToken = prefs.getString('access_token');
    _refreshToken = prefs.getString('refresh_token');
    notifyListeners();
  }

  // Hapus tokens dari storage
  Future<void> _clearTokens() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('access_token');
    await prefs.remove('refresh_token');
  }

  // Mulai auto refresh token
  void _startAutoRefresh() {
    _cancelAutoRefresh();

    if (_accessToken == null) return;

    try {
      final parts = _accessToken!.split('.');
      if (parts.length != 3) {
        print('Access token format tidak valid');
        return;
      }

      final payload = json.decode(
        utf8.decode(base64Url.decode(base64Url.normalize(parts[1])))
      );

      final int issuedAt = payload['iat'];
      final int expiry = payload['exp'];

      int durationSeconds = expiry - issuedAt;

      if (durationSeconds <= 0) {
        print('Durasi access token tidak valid');
        return;
      }

      // Tambahkan buffer 1 menit
      durationSeconds -= 60;
      if (durationSeconds <= 0) durationSeconds = 10;

      final refreshDuration = Duration(seconds: durationSeconds);

      print('Auto refresh token setiap ${refreshDuration.inSeconds} detik');

      _refreshTimer = Timer.periodic(refreshDuration, (timer) async {
        print('Auto refreshing token...');
        final refreshed = await refreshTokenFromServer();
        if (!refreshed) {
          print('Gagal refresh token, logout otomatis');
          await logout();
        }
      });

    } catch (e) {
      print('Error saat decode access token: $e');
    }
  }

  // Cancel auto refresh
  void _cancelAutoRefresh() {
    _refreshTimer?.cancel();
    _refreshTimer = null;
  }
}
