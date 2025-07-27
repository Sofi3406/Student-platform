const userRepository = require("../repository/user.repository");
const bcrypt = require("bcrypt");
const jwtProvider = require("../provider/jwt.provider");

class UserService {
  // signup
  async signup(data) {
    // Destructure input
    const { email, password, name, role } = data;
    console.log("Signup request:", data);

    // Check if email already exists
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error("Email already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const savedUser = await userRepository.createUser({
      name,
      email,
      password: hashedPassword,
      role: role.toString(), // still okay for safety
    });

    // Generate access token
    const accessToken = jwtProvider.generateAccessToken(savedUser);

    return {
      accessToken,
      user: savedUser,
    };
  }

  // signin
  // logout
  // get all users
  // update user
  // delete user
}

module.exports = new UserService();
