import 'package:flutter/material.dart';
import 'package:iconly/iconly.dart';
import 'package:mobile/constants/variables.dart';
import 'package:mobile/screens/home_screen.dart';

class DefaultLayout extends StatefulWidget {
  const DefaultLayout({super.key});

  @override
  State<DefaultLayout> createState() => _DefaultLayoutState();
}

class _DefaultLayoutState extends State<DefaultLayout> {
  int _selectedIndex = 0;

  final List<Widget> _screens = [
    const Scaffold(body: HomeScreen()),
    const Scaffold(body: Center(child: Text("Kosts Screen"))),
    const Scaffold(body: Center(child: Text("wishlist Screen"))),
    const Scaffold(body: Center(child: Text("Profile Screen"))),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_selectedIndex],
      bottomNavigationBar: SizedBox(
        height: 100,
        child: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
          selectedItemColor: AppColors.normalText,
          unselectedItemColor: AppColors.noteText,
          showUnselectedLabels: true,
          backgroundColor: AppColors.white,
          unselectedFontSize: 12,
          selectedFontSize: 12,
          items: const [
            BottomNavigationBarItem(
              icon: Icon(IconlyLight.home),
              label: "Home",
            ),
            BottomNavigationBarItem(
              icon: Icon(IconlyLight.discovery),
              label: "Kos",
            ),
            BottomNavigationBarItem(
              icon: Icon(IconlyLight.bookmark),
              label: "Favorit",
            ),
            BottomNavigationBarItem(
              icon: Icon(IconlyLight.profile),
              label: "Profile",
            ),
          ],
        ),
      ),
    );
  }
}
