// lib/services/dio_client.dart
import 'package:dio/dio.dart';

class DioClient {
  static final Dio _dio = Dio(BaseOptions(
    baseUrl: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    },
  ));

  // Untuk mengakses instance Dio
  static Dio get instance => _dio;
}
