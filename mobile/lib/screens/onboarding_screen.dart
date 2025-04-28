import 'dart:async';
import 'package:flutter/material.dart';
import 'package:mobile/constants/variables.dart';
import 'package:mobile/layouts/default.dart';
import 'package:mobile/providers/auth_provider.dart';
import 'package:mobile/screens/login_screen.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:iconly/iconly.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  Future<void> completeOnboarding() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('onboarding_complete', true);
  }

  final List<Map<String, String>> _pages = [
    {'type': 'welcome'},
    {
      'title': 'Cari Kos dengan Mudah',
      'description':
          'Temukan kos-kosan yang sesuai dengan kebutuhan dan budgetmu. Pilih lokasi strategis, fasilitas lengkap, dan harga terbaik dalam satu aplikasi.',
      'image': 'assets/images/onboarding1.png',
    },
    {
      'title': 'Layanan Lengkap untuk Penghuni Kos',
      'description':
          'Tidak hanya tempat tinggal, kami juga menyediakan layanan tambahan seperti cleaning service, laundry, top-up listrik, dan catering untuk kenyamananmu.',
      'image': 'assets/images/onboarding2.png',
    },
    {
      'title': 'Proses Cepat & Praktis',
      'description':
          'Booking kos langsung dari aplikasi dan kelola semua kebutuhan harianmu dengan mudah. Nikmati pengalaman tinggal di kos yang lebih nyaman dan bebas ribet!',
      'image': 'assets/images/onboarding3.png',
    },
  ];

  void _nextPage() async {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final isAuthenticated = await authProvider.initAuth();
    if (_currentPage < _pages.length - 1) {
      _pageController.nextPage(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeIn,
      );
    } else {
      await completeOnboarding();
      if (isAuthenticated) {
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(builder: (context) => DefaultLayout()),
        );
      } else {
        Navigator.of(context).pushReplacement(
          MaterialPageRoute(builder: (context) => const LoginScreen()),
        );
      }
    }
  }

  void _prevPage() {
    if (_currentPage > 0) {
      _pageController.previousPage(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeOut,
      );
    }
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          PageView.builder(
            controller: _pageController,
            itemCount: _pages.length,
            onPageChanged: (index) {
              setState(() {
                _currentPage = index;
              });
            },
            itemBuilder: (context, index) {
              if (_pages[index]['type'] == 'welcome') {
                return _buildWelcomePage();
              } else {
                return OnboardingPage(
                  title: _pages[index]['title']!,
                  description: _pages[index]['description']!,
                  imagePath: _pages[index]['image']!,
                );
              }
            },
          ),
          if (_currentPage != 0) ...[
            // Tombol Navigasi Next/Back + Dot Indicators
            Positioned(
              bottom: 120,
              left: 20,
              right: 20,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  _currentPage > 0
                      ? _navButton(
                        icon: IconlyLight.arrow_left,
                        onPressed: _prevPage,
                        isPrimary: false,
                      )
                      : const SizedBox(width: 48),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: List.generate(
                      _pages.length - 1, // tanpa welcome
                      (index) => Container(
                        width: 8,
                        height: 8,
                        margin: const EdgeInsets.symmetric(horizontal: 4),
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color:
                              _currentPage - 1 == index
                                  ? AppColors.primary
                                  : Colors.grey,
                        ),
                      ),
                    ),
                  ),
                  _navButton(
                    icon: IconlyLight.arrow_right,
                    onPressed: _nextPage,
                    isPrimary: true,
                  ),
                ],
              ),
            ),
            // Skip Button
            Positioned(
              bottom: 50,
              right: 16,
              child: TextButton(
                onPressed: () async {
                  await completeOnboarding();
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const DefaultLayout(),
                    ),
                  );
                },
                child: const Text('Skip'),
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _navButton({
    required IconData icon,
    required VoidCallback onPressed,
    required bool isPrimary,
  }) {
    return Container(
      height: 48,
      width: 48,
      decoration: BoxDecoration(
        border: Border.all(color: AppColors.primary),
        borderRadius: const BorderRadius.all(Radius.circular(100)),
      ),
      padding: EdgeInsets.zero,
      child: ElevatedButton(
        onPressed: onPressed,
        style: ButtonStyle(
          backgroundColor: WidgetStatePropertyAll(
            isPrimary ? AppColors.primary : Colors.transparent,
          ),
          shadowColor: const WidgetStatePropertyAll(Colors.transparent),
          foregroundColor: WidgetStatePropertyAll(
            isPrimary ? AppColors.white : AppColors.primary,
          ),
          minimumSize: const WidgetStatePropertyAll(Size(48, 48)),
          maximumSize: const WidgetStatePropertyAll(Size(48, 48)),
          padding: const WidgetStatePropertyAll(EdgeInsets.all(6)),
        ),
        child: Icon(icon, size: 24),
      ),
    );
  }

  Widget _buildWelcomePage() {
    return SafeArea(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "KOZYHIVE",
              style: TextStyle(
                fontFamily: "Poppins",
                fontWeight: FontWeight.w500,
                fontSize: 24,
                letterSpacing: 12,
                color: AppColors.primary,
              ),
            ),
            const SizedBox(height: 40),
            ElevatedButton(
              onPressed: _nextPage,
              style: ButtonStyle(
                backgroundColor: WidgetStatePropertyAll(AppColors.primary),
                foregroundColor: WidgetStatePropertyAll(AppColors.white),
                minimumSize: const WidgetStatePropertyAll(Size(300, 48)),
                shape: WidgetStatePropertyAll(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                    side: BorderSide(color: AppColors.primary, width: 1),
                  ),
                ),
              ),
              child: const Text("Get Started"),
            ),
          ],
        ),
      ),
    );
  }
}

class OnboardingPage extends StatelessWidget {
  final String title;
  final String description;
  final String imagePath;

  const OnboardingPage({
    super.key,
    required this.title,
    required this.description,
    required this.imagePath,
  });

  @override
  Widget build(BuildContext context) {
    double deviceWidth = MediaQuery.of(context).size.width;
    return SafeArea(
      child: Column(
        children: [
          Container(color: AppColors.error, height: deviceWidth),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: Column(
                children: [
                  Text(
                    title,
                    style: const TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: AppColors.normalText,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    description,
                    style: const TextStyle(
                      fontSize: 14,
                      color: AppColors.noteText,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
