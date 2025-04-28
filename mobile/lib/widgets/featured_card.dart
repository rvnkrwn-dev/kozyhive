import 'package:flutter/material.dart';
import 'package:mobile/constants/variables.dart';
import 'package:mobile/screens/onboarding_screen.dart';

class FeaturedKostCard extends StatefulWidget {
  final String imageUrl;
  final String gender;
  final String title;
  final String price;
  final String location;
  final double rating;

  const FeaturedKostCard({
    super.key,
    required this.imageUrl,
    required this.gender,
    required this.title,
    required this.price,
    required this.location,
    required this.rating,
  });

  @override
  State<FeaturedKostCard> createState() => _FeaturedKostCardState();
}

class _FeaturedKostCardState extends State<FeaturedKostCard> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap:
          () => {
            if (mounted)
              {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => OnboardingScreen()),
                ),
              },
          },
      child: Container(
        width: 250,
        decoration: BoxDecoration(
          color: AppColors.white,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(20), // Sudut melengkung
              child: Image.network(
                widget.imageUrl,
                fit: BoxFit.cover,
                width: 250,
                height: 150,
              ),
            ),
            Stack(
              children: [
                Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    spacing: 2.5,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Row(
                            children: [
                              Icon(
                                widget.rating < 2
                                    ? Icons.star_outline
                                    : widget.rating == 5
                                    ? Icons.star
                                    : Icons.star_half,
                                color: AppColors.star,
                                size: 20,
                              ),
                              Text(
                                widget.rating.toString(),
                                style: TextStyle(
                                  fontSize: 14,
                                  color: AppColors.normalText,
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
                              widget.gender,
                              style: TextStyle(
                                color:
                                    widget.gender.toLowerCase() == "campur"
                                        ? AppColors.normalText
                                        : widget.gender.toLowerCase() == "putri"
                                        ? AppColors.label
                                        : AppColors.primary,
                                fontSize: 12,
                              ),
                            ),
                          ),
                        ],
                      ),
                      Text(
                        widget.title.length > 20
                            ? "${widget.title.substring(0, 20)}..."
                            : widget.title,
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w700,
                          color: AppColors.normalText,
                        ),
                      ),
                      Text(
                        widget.price,
                        style: TextStyle(
                          color: AppColors.primary,
                          fontWeight: FontWeight.w600,
                          fontSize: 14,
                        ),
                      ),
                      Row(
                        children: [
                          Icon(
                            Icons.location_on_outlined,
                            size: 12,
                            color: AppColors.normalText,
                          ),
                          Text(
                            widget.location,
                            style: TextStyle(
                              fontSize: 12,
                              color: AppColors.normalText,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),

                Positioned(
                  bottom: 12,
                  right: 12,
                  child: Container(
                    height: 30,
                    width: 30,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(8),
                      color: AppColors.noteText.withOpacity(0.1),
                    ),
                    child: IconButton(
                      onPressed: () {
                        print("Filter button clicked!");
                      },
                      icon: Icon(Icons.bookmark_outline),
                      iconSize: 20,
                      color: AppColors.primary,
                      padding: EdgeInsets.all(0),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
