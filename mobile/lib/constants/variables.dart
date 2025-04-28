import 'package:flutter/material.dart';

/// App-wide constants such as API base URL, colors, text styles, etc.
class AppConstants {
  static const String appName = "KOZYHIVE";
  static const String baseUrl = 'http://localhost:3000';
}

class AppColors {
  static const Color primary = Color(0xFF006EFF);      // Tombol utama, splash screen
  static const Color success = Color(0xFF0DAC57);      // Icon sukses
  static const Color label = Color(0xFFF147B3);        // Label mencolok / badge
  static const Color star = Color(0xFFEEA651);         // Icon bintang, rating
  static const Color noteText = Color(0xFF8C8C8C);     // Teks penjelas ringan / note
  static const Color normalText = Color(0xFF122D4D);   // Teks utama
  static const Color white = Color(0xFFFFFFFF);        // Warna putih umum
  static const Color whiteBG = Color(0xFFF9FBFF);        // Warna putih umum
  static const Color error = Color(0xFFFF4C4C);        // Error (input salah, notifikasi gagal, dll)
}

class AppTextStyles {
  static const heading1 = TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
  );

  static const bodyText = TextStyle(
    fontSize: 16,
    color: AppColors.normalText,
  );

  static const buttonText = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.w600,
    color: Colors.white,
  );
}
