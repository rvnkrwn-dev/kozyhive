// lib/services/dio_client.dart
import 'package:dio/dio.dart';
import 'package:mobile/constants/variables.dart';

class DioClient {
  static final Dio _dio = Dio(BaseOptions(
    baseUrl: AppConstants.baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  ));

  // Untuk mengakses instance Dio
  static Dio get instance => _dio;
}
