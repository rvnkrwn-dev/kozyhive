import 'package:flutter/material.dart';
import 'package:iconly/iconly.dart';
import 'package:mobile/constants/variables.dart';
import 'package:mobile/core/data.dart';
import 'package:mobile/models/user_model.dart';
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
  bool _isLoggedIn = false;
  late UserModel? _user;
  final TextEditingController _searchKeyword = TextEditingController();
  final List<String> _categories = [
    "Rekomendasi",
    "Teratas",
    "Best Offers",
    "Most Rated",
  ];
  int _selectedIndexCategory = 0;

  @override
  void initState() {
    super.initState();
    _initialize();
  }

  Future<void> _initialize() async {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    _user = authProvider.user;
    setState(() {
      _isLoggedIn = _user != null && _user!.username.isNotEmpty;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.whiteBG,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              const SizedBox(height: 20),
              _buildHeader(),
              const SizedBox(height: 40),
              _buildSearchBar(),
              const SizedBox(height: 20),
              _buildCategorySelector(),
              const SizedBox(height: 20),
              _buildFeaturedKost(),
              _buildRecommendedKostList(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: _isLoggedIn
          ? Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      "Hai 😚,",
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      _user?.fullName ?? '',
                      style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
                CircleAvatar(
                  radius: 24,
                  backgroundImage: NetworkImage(
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
                    children: const [
                      Text(
                        "Hai, Selamat datang",
                        style: TextStyle(fontSize: 24, fontWeight: FontWeight.w600),
                      ),
                      Text(
                        "Silahkan login terlebih dahulu!",
                        style: TextStyle(fontSize: 14),
                      ),
                    ],
                  ),
                ),
                ElevatedButton(
                  onPressed: () async {
                    await context.read<AuthProvider>().logout();
                    if (mounted) {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(builder: (context) => const LoginScreen()),
                      );
                    }
                  },
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all(Colors.transparent),
                    foregroundColor: MaterialStateProperty.all(AppColors.primary),
                    shadowColor: MaterialStateProperty.all(Colors.transparent),
                  ),
                  child: const Icon(IconlyLight.login, size: 24),
                ),
              ],
            ),
    );
  }

  Widget _buildSearchBar() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: SizedBox(
        height: 52,
        child: SearchFilterBar(
          controller: _searchKeyword,
          isFilter: false,
          hintText: "Cari berdasarkan daerah",
          onSubmitted: (value) {
            print('Search submitted: $value');
          },
        ),
      ),
    );
  }

  Widget _buildCategorySelector() {
    return Container(
      padding: const EdgeInsets.only(left: 20),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(
          children: List.generate(_categories.length, (index) {
            final category = _categories[index];
            final isSelected = _selectedIndexCategory == index;

            return GestureDetector(
              onTap: () {
                setState(() {
                  _selectedIndexCategory = index;
                });
              },
              child: Container(
                margin: const EdgeInsets.only(right: 12),
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                decoration: BoxDecoration(
                  color: isSelected
                      ? AppColors.primary.withOpacity(0.1)
                      : AppColors.noteText.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text(
                  category,
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: isSelected ? AppColors.primary : AppColors.normalText,
                  ),
                ),
              ),
            );
          }),
        ),
      ),
    );
  }

  Widget _buildFeaturedKost() {
    return Container(
      padding: const EdgeInsets.only(left: 20, bottom: 12, top: 12),
      child: kostList.isNotEmpty
          ? SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                children: [
                  ...kostList.map(
                    (data) => Padding(
                      padding: const EdgeInsets.only(right: 12),
                      child: FeaturedKostCard(
                        imageUrl: data["imageUrl"]!,
                        gender: data["gender"]!,
                        title: data["title"]!,
                        price: data["price"]!,
                        location: data["location"]!,
                        rating: data["rating"],
                      ),
                    ),
                  ),
                ],
              ),
            )
          : const Center(child: Text('No featured kost available')),
    );
  }

  Widget _buildRecommendedKostList() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                "Untuk Kamu",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),
              ),
              TextButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const OnboardingScreen()),
                  );
                },
                child: const Text("Lebih banyak"),
              ),
            ],
          ),
          const SizedBox(height: 8),
          ...kostList.map(
            (data) => GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const OnboardingScreen()),
                );
              },
              child: Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: ListCard(
                  imageUrl: data["imageUrl"]!,
                  gender: data["gender"]!,
                  name: data["title"]!,
                  price: data["price"]!,
                  location: data["location"]!,
                  rating: data["rating"],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
