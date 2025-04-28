import 'package:flutter/material.dart';

class AppIcon extends StatefulWidget {
  final Color logoColor;
  
  // Gunakan initializer list supaya lebih bersih
  const AppIcon({Key? key, this.logoColor = Colors.black}) : super(key: key);

  @override
  State<AppIcon> createState() => _AppIconState();
}

class _AppIconState extends State<AppIcon> {
  late Color _color;

  @override
  void initState() {
    super.initState();
    _color = widget.logoColor; // Ambil dari widget.logoColor
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(Icons.hotel, size: 48, color: _color),
        const SizedBox(height: 8), // Spacer antar Icon dan Text
        Text(
          "KOZYHIVE",
          style: TextStyle(
            letterSpacing: 8,
            fontSize: 24,
            color: _color
          ),
        ),
      ],
    );
  }
}
