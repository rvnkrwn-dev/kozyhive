// lib/providers/auth_provider.dart
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:mobile/service/dio_client.dart';
import '../models/user_model.dart';

class AuthProvider with ChangeNotifier {
  UserModel? _user;

  UserModel? get user => _user;
  bool get isAuthenticated => _user != null;

  // Fungsi login menggunakan DioClient instance
  Future<void> login(String email, String password) async {
    try {
      final response = await DioClient.instance.post('api/auth/login', data: {
        'email': email,
        'password': password,
      });

      // Pastikan response berhasil
      if (response.statusCode == 200) {
        // Parsing data user dari response dan simpan
        _user = UserModel.fromMap(response.data['user']);
        notifyListeners();
      } else {
        throw Exception('Login failed: ${response.statusCode}');
      }
    } on DioException catch (e) {
      throw Exception('Error during login: ${e.message}');
    }
  }

  static Future<Map<String, dynamic>> register(String fullName, String email, String password) async {
    try {
      final response = await DioClient.instance.post('/api/auth/register', data: {
        'full_name': fullName,
        'email': email,
        'password': password,
      });
      return response.data;
    } on DioException catch (e) {
      return {
        'error': e.response?.data ?? 'Terjadi kesalahan saat registrasi'
      };
    }
  }
  // Fungsi logout
  void logout() {
    _user = null;
    notifyListeners();
  }
}
