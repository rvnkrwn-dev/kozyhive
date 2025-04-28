import 'package:flutter/material.dart';
import 'package:iconly/iconly.dart';
import 'package:mobile/constants/variables.dart';
import 'package:mobile/core/data.dart';
import 'package:mobile/providers/auth_provider.dart';
import 'package:mobile/screens/login_screen.dart';
import 'package:mobile/screens/onboarding_screen.dart';
import 'package:mobile/widgets/featured_card.dart';
import 'package:mobile/widgets/list_card.dart';
import 'package:mobile/widgets/search_filter_bar.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final bool _isLoggedIn = false;
  final TextEditingController _searchKeyword = TextEditingController();
  final List<String> _categories = [
    "Rekomendasi",
    "Teratas",
    "Best Offers",
    "Most Reated",
  ];

  int _seletedIndexCateogry = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.whiteBG,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              SizedBox(height: 20),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child:
                    _isLoggedIn
                        ? Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  "Hai 😚,",
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Text(
                                  "Revan Kurniawan!",
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                            Container(
                              height: 48,
                              width: 48,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(100),
                              ),
                              child: Image.network(
                                'https://www.shareicon.net/data/2016/05/24/770124_man_512x512.png',
                              ),
                            ),
                          ],
                        )
                        : Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(
                                    "Hai, Selamat datang",
                                    style: TextStyle(
                                      fontSize: 24,
                                      fontWeight: FontWeight.w600,
                                    ),
                                  ),
                                  Text(
                                    "Silahkan login terlebih dahulu!",
                                    style: TextStyle(fontSize: 14),
                                  ),
                                ],
                              ),
                            ),
                            ElevatedButton(
                              onPressed:
                                  () async {
                                    await context.read<AuthProvider>().logout();
                                    if (mounted)
                                      Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                          builder:
                                              (context) => const LoginScreen(),
                                        ),
                                      );
                                  },
                              style: ButtonStyle(
                                backgroundColor: WidgetStatePropertyAll(
                                  Colors.transparent,
                                ),
                                foregroundColor: WidgetStatePropertyAll(
                                  AppColors.primary,
                                ),
                                shadowColor: WidgetStatePropertyAll(
                                  Colors.transparent,
                                ),
                              ),
                              child: Icon(IconlyLight.login, size: 24),
                            ),
                          ],
                        ),
              ),
              SizedBox(height: 40),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 20.0),
                child: SizedBox(
                  height: 52,
                  child: SearchFilterBar(
                    controller: _searchKeyword,
                    isFilter: false,
                    hintText: "Cari berdasarkan daerah",
                    onSubmitted: (value) => {print(value)},
                  ),
                ),
              ),
              SizedBox(height: 20),
              Container(
                padding: const EdgeInsets.only(left: 20),
                child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    spacing: 12,
                    children:
                        _categories.asMap().entries.map((entry) {
                          int index = entry.key;
                          String c = entry.value;

                          return Container(
                            decoration: BoxDecoration(
                              color:
                                  _seletedIndexCateogry == index
                                      ? AppColors.primary.withOpacity(0.1)
                                      : AppColors.noteText.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            padding: EdgeInsets.symmetric(
                              horizontal: 16,
                              vertical: 10,
                            ),
                            child: GestureDetector(
                              onTap:
                                  () => {
                                    setState(() {
                                      _seletedIndexCateogry = index;
                                    }),
                                  },
                              child: Text(
                                c,
                                style: TextStyle(
                                  color:
                                      _seletedIndexCateogry == index
                                          ? AppColors.primary
                                          : AppColors.normalText,
                                  fontWeight: FontWeight.w600,
                                  fontSize: 12,
                                ),
                              ),
                            ),
                          );
                        }).toList(),
                  ),
                ),
              ),
              SizedBox(height: 20),
              Container(
                padding: const EdgeInsets.only(
                  left: 20,
                  right: 0,
                  bottom: 12,
                  top: 12,
                ),
                child:
                    kostList.length > 1
                        ? SingleChildScrollView(
                          scrollDirection: Axis.horizontal,
                          child: Row(
                            spacing: 12,
                            children: [
                              ...kostList.map(
                                (data) => FeaturedKostCard(
                                  imageUrl: data["imageUrl"]!,
                                  gender: data["gender"]!,
                                  title: data["title"]!,
                                  price: data["price"]!,
                                  location: data["location"]!,
                                  rating: data["rating"],
                                ),
                              ),
                              SizedBox(width: 2),
                            ],
                          ),
                        )
                        : Row(
                          children: [
                            ...kostList.map(
                              (data) => FeaturedKostCard(
                                imageUrl: data["imageUrl"]!,
                                gender: data["gender"]!,
                                title: data["title"]!,
                                price: data["price"]!,
                                location: data["location"]!,
                                rating: data["rating"],
                              ),
                            ),
                          ],
                        ),
              ),
              Padding(
                padding: const EdgeInsets.only(
                  left: 20,
                  right: 20,
                  bottom: 12,
                  top: 12,
                ),
                child: Column(
                  spacing: 12,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "Untuk Kamu",
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        TextButton(
                          onPressed: () {
                            if (mounted) {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => OnboardingScreen(),
                                ),
                              );
                            }
                          },
                          child: Text("Lebih banyak"),
                        ),
                      ],
                    ),

                    ...kostList.map(
                      (data) => GestureDetector(
                        onTap:
                            () => {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder:
                                      (context) =>
                                          OnboardingScreen(), // DetailScreen(id: 123), // Kirim ID di sini
                                ),
                              ),
                            },
                        child: ListCard(
                          imageUrl: data["imageUrl"]!,
                          gender: data["gender"]!,
                          name: data["title"]!,
                          price: data["price"]!,
                          location: data["location"]!,
                          rating: 5,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
