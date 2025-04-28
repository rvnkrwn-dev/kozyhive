import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:mobile/service/dio_client.dart';
import 'package:shared_preferences/shared_preferences.dart';  // For storing JWT locally
import '../models/user_model.dart';

class AuthProvider with ChangeNotifier {
  UserModel? _user;
  String? _accessToken;
  String? _refreshToken;

  UserModel? get user => _user;
  bool get isAuthenticated => _user != null;
  String? get accessToken => _accessToken;
  String? get refreshToken => _refreshToken;

  // Fungsi login menggunakan DioClient instance
  Future<Map<String, dynamic>> login(String email, String password) async {
    try {
      final response = await DioClient.instance.post(
        '/api/auth/login',
        data: {'email': email, 'password': password},
      );

      // Pastikan response berhasil
      if (response.statusCode == 200) {
        // Parsing data user dari response dan simpan
        _user = UserModel.fromMap(response.data['data']['user']);
        _accessToken = response.data['access_token']; // Save the access token
        _refreshToken = response.data['refresh_token']; // Save the refresh token

        // Store tokens securely
        await _storeTokens(_accessToken!, _refreshToken!);

        notifyListeners();
        return {'message': response.data['message']};
      } else {
        return {'message': response.data['message']};
      }
    } on DioException catch (e) {
      return {'error': e.response?.data ?? 'Terjadi kesalahan saat login'};
    }
  }

  // Fungsi register
  static Future<Map<String, dynamic>> register(
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
    }
  }

  // Fungsi logout
  void logout() async {
    _user = null;
    _accessToken = null;
    _refreshToken = null;
    await _clearTokens();  // Clear stored tokens
    notifyListeners();
  }

  // Store the JWT tokens securely
  Future<void> _storeTokens(String accessToken, String refreshToken) async {
    final prefs = await SharedPreferences.getInstance();
    prefs.setString('access_token', accessToken);
    prefs.setString('refresh_token', refreshToken);
  }

  // Clear the stored tokens
  Future<void> _clearTokens() async {
    final prefs = await SharedPreferences.getInstance();
    prefs.remove('access_token');
    prefs.remove('refresh_token');
  }

  // Load tokens from local storage (for session persistence)
  Future<void> loadTokens() async {
    final prefs = await SharedPreferences.getInstance();
    _accessToken = prefs.getString('access_token');
    _refreshToken = prefs.getString('refresh_token');
    if (_accessToken != null) {
      notifyListeners();
    }
  }
}
