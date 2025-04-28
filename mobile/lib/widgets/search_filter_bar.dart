import 'package:flutter/material.dart';
import 'package:iconly/iconly.dart';
import 'package:mobile/constants/variables.dart';

class SearchFilterBar extends StatelessWidget {
  final String hintText;
  final TextEditingController? controller;
  final VoidCallback? onFilterTap;
  final ValueChanged<String>? onChanged;
  final ValueChanged<String>? onSubmitted;
  final bool isFilter;

  const SearchFilterBar({
    super.key,
    this.hintText = 'Cari berdasarkan daerah',
    this.controller,
    this.onFilterTap,
    this.onSubmitted,
    this.onChanged,
    this.isFilter = true
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            decoration: BoxDecoration(
              color: AppColors.white,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: AppColors.normalText.withOpacity(0.1),
                  blurRadius: 20,
                  offset: const Offset(0, 8),
                ),
              ],
            ),
            child: TextField(
              controller: controller,
              onChanged: onChanged,
              onSubmitted: onSubmitted,
              decoration: InputDecoration(
                icon: Icon(
                  Icons.search,
                  color: AppColors.noteText.withOpacity(0.6),
                ),
                hintText: hintText,
                hintStyle: TextStyle(
                  color: AppColors.noteText.withOpacity(0.6),
                ),
                border: InputBorder.none,
              ),
            ),
          ),
        ),
        const SizedBox(width: 8),
        isFilter ? AspectRatio(
          aspectRatio: 1,
          child: InkWell(
            onTap: onFilterTap,
            borderRadius: BorderRadius.circular(12),
            child: Container(
              decoration: BoxDecoration(
                color: AppColors.primary,
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    color: AppColors.primary.withOpacity(0.1),
                    blurRadius: 20,
                    offset: const Offset(0, 8),
                  ),
                ],
              ),
              child: Icon(
                IconlyLight.filter,
                color: AppColors.white,
              ),
            ),
          ),
        ) : SizedBox.shrink() ,
      ],
    );
  }
}
