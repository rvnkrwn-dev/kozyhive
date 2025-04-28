import 'package:flutter/material.dart';
import 'package:mobile/constants/variables.dart';

class ListCard extends StatelessWidget {
  final String imageUrl;
  final String name;
  final String location;
  final String price;
  final double rating;
  final String gender;

  const ListCard({
    super.key,
    required this.imageUrl,
    required this.name,
    required this.location,
    required this.price,
    required this.rating,
    required this.gender,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: AppColors.white,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        spacing: 12,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: Image.network(
              imageUrl,
              fit: BoxFit.cover,
              width: 120,
              height: 120,
            ),
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              spacing: 8,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Icon(
                          rating < 2
                              ? Icons.star_outline
                              : rating == 5
                              ? Icons.star
                              : Icons.star_half,
                          color: AppColors.star,
                          size: 20,
                        ),
                        Text(
                          rating.toString(),
                          style: TextStyle(
                            fontSize: 14,
                            color: AppColors.noteText,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ],
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 8,
                        vertical: 2,
                      ),
                      decoration: BoxDecoration(
                        color: AppColors.noteText.withOpacity(0.1),
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: Text(
                        gender,
                        style: TextStyle(
                          color:
                              gender.toLowerCase() == "campur"
                                  ? AppColors.normalText
                                  : gender.toLowerCase() == "putri"
                                  ? AppColors.label
                                  : AppColors.primary,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  ],
                ),
                Text(
                  name.length > 20
                          ? "${name.substring(0, 20)}..."
                          : name,
                  style: TextStyle(
                    color: AppColors.normalText,
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                Row(
                  spacing: 2,
                  children: [
                    Icon(
                      Icons.location_on,
                      size: 12,
                      color: AppColors.noteText,
                    ),
                    Text(location, style: TextStyle(color: AppColors.noteText, fontSize: 14)),
                  ],
                ),
                Text(
                  price,
                  style: TextStyle(
                    color: AppColors.primary,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
