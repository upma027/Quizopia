const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const studentModel = require('../Model/studentModel');
const teacherModel = require('../Model/teacherModel');
const adminModel = require('../Model/adminModel');

dotenv.config({ path: '../.env' });

const jwtKey = process.env.JWT_KEY;

const loginUser = async (req, res) => {
  const { role, email, password } = req.body;

  try {
    let userModel;
    let cookieName;

    if (role === "student") {
      userModel = studentModel;
      cookieName = "isStudent";
    } else if (role === "teacher") {
      userModel = teacherModel;
      cookieName = "isTeacher";
    } else if (role === "admin") {
      userModel = adminModel;
      cookieName = "isAdmin";
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    const user = await userModel.findOne({ email }).exec();

    if (!user) {
      return res.status(404).json({ message: "Invalid Email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ payload: user._id }, jwtKey);
    const expirationTime = new Date(Date.now() + 600000); // 10 minutes

    res.cookie(cookieName, token, { httpOnly: true, expires: expirationTime });

    res.status(200).json({
      status: 200,
      message: "Login successfully",
      data: {
        ...user.toObject(),
        role: role,
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message
    });
  }
};

module.exports = { loginUser };
