import 'package:flutter/material.dart';
import 'package:mobile/layouts/default.dart';
import 'package:mobile/screens/login_screen.dart';
import 'package:mobile/screens/onboarding_screen.dart';
import 'package:mobile/widgets/app_icon.dart';
import 'package:provider/provider.dart';
import 'package:mobile/providers/auth_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    _initialize();
  }

  Future<void> _initialize() async {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final isAuthenticated = await authProvider.initAuth();
    Future<bool> isOnboardingComplete() async {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getBool('onboarding_complete') ?? false;
    }

    await Future.delayed(const Duration(seconds: 3)); // Splash effect

    if (!mounted) return; // Cek dulu kalo widgetnya masih ada

    final onboardingDone = await isOnboardingComplete();

    if (!onboardingDone) {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => OnboardingScreen()),
      );
      return; // Jangan lanjut ke bawah, biar tidak lanjut ke login
    }

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

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Color(0xFF006EFF),
      body: Center(child: AppIcon(logoColor: Color(0xFFFBFBFC))),
    );
  }
}
