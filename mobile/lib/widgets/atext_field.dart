import 'package:flutter/material.dart';
import 'package:mobile/constants/variables.dart';

class ATextField extends StatelessWidget {
  final String label;
  final String hintText;
  final TextEditingController? controller;

  const ATextField({
    super.key,
    required this.label,
    required this.hintText,
    this.controller,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: const TextStyle(
            fontWeight: FontWeight.w500,
            fontSize: 16,
          ),
        ),
        const SizedBox(height: 4),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 2),
          decoration: BoxDecoration(
            color: AppColors.whiteBG, // Ganti sesuai kebutuhanmu, misalnya AppColors.whiteBG
            borderRadius: BorderRadius.circular(12),
            border: Border.all(
              color: AppColors.noteText, // Ganti sesuai AppColors.noteText jika perlu
              width: 1,
            ),
          ),
          child: TextField(
            controller: controller,
            decoration: InputDecoration(
              hintText: hintText,
              hintStyle: TextStyle(
                color: AppColors.noteText, // Ganti jika pakai AppColors.noteText
              ),
              border: InputBorder.none,
            ),
          ),
        ),
      ],
    );
  }
}
