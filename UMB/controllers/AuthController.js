const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
module.exports.register = async (req, res) => {
//   try {
    const { firstname, lastname, username, email, password, dob } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    
    const profilePicPath = req.file ? `/uploads/${req.file.filename}` : "/uploads/default.jpg";

console.log(firstname, lastname, username, email, password, dob,profilePicPath);


    const user = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      dob,
      profilepic: profilePicPath,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        dob: user.dob,
        profilepic: user.profilepic,
      },
    });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
};

// Login
module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      $or: [{ username }, { email: username }],
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        profilepic: user.profilepic,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
