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
    return UserModel(
      fullName: map['full_name'],
      username: map['username'],
      email: map['email'],
      roles: List<String>.from(map['roles'] ?? []), // memastikan roles adalah list
      status: map['status'],
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
