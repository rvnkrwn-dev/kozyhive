class UserModel {
  final String fullName;
  final String username;
  final String email;
  final List<String> roles; // Menyimpan roles dalam bentuk list
  final String status; // Status user (misalnya "active", "inactive")

  UserModel({
    required this.fullName,
    required this.username,
    required this.email,
    required this.roles,
    required this.status,
  });

  // Method untuk membuat UserModel dari Map (misalnya dari API)
  factory UserModel.fromMap(Map<String, dynamic> map) {
    // Memastikan roles adalah List<String>
    var roles = map['roles'];
    if (roles is String) {
      roles = [roles]; // Jika roles adalah string, ubah menjadi list
    } else if (roles is List) {
      roles = List<String>.from(roles); // Jika roles sudah list, pastikan tipenya List<String>
    } else {
      roles = []; // Jika roles tidak ada atau bukan string/list, set kosong
    }

    return UserModel(
      fullName: map['full_name'],
      username: map['username'],
      email: map['email'],
      roles: roles, // Menyimpan roles yang sudah dipastikan
      status: map['user_status'],
    );
  }

  // Method untuk mengubah UserModel menjadi Map (misalnya untuk API)
  Map<String, dynamic> toMap() {
    return {
      'full_name': fullName,
      'username': username,
      'email': email,
      'roles': roles,
      'status': status,
    };
  }
}
