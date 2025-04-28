import 'package:flutter/material.dart';
import 'package:mobile/constants/variables.dart';

class AElevatedButton extends StatelessWidget {
  final Widget child;
  final VoidCallback onPressed;
  final Color? backgroundColor;
  final Color? foregroundColor;
  final Color borderColor;
  final double height;
  final BorderRadiusGeometry borderRadius;

  const AElevatedButton({
    super.key,
    required this.child,
    required this.onPressed,
    this.backgroundColor = AppColors.primary,
    this.borderColor = AppColors.primary,
    this.foregroundColor = AppColors.white,
    this.height = 48,
    this.borderRadius = const BorderRadius.all(Radius.circular(8)),
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: ButtonStyle(
        backgroundColor: WidgetStatePropertyAll(
            backgroundColor),
        foregroundColor:
            WidgetStatePropertyAll(foregroundColor),
        shadowColor: const WidgetStatePropertyAll(Colors.transparent),
        minimumSize: WidgetStatePropertyAll(Size(double.infinity, height)),
        shape: WidgetStatePropertyAll(
          RoundedRectangleBorder(
            borderRadius: borderRadius,
            side: BorderSide(
              color: borderColor,
              width: 1,
            ),
          ),
        ),
      ),
      child: child,
    );
  }
}
