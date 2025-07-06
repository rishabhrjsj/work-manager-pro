import { NextResponse } from "next/server";

const { DbConnection } = require("@/app/helper/db");
const { User } = require("../../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
DbConnection();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({
        message: "User not found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({
        message: "Incorrect password",
        success: false,
      });
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_TOKEN, {
      expiresIn: "1d",
    });
    console.log(`Token ${token}`);

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      user: user,
    });

    response.cookies.set("loginToken", token, {
      httpOnly: true,
      path: "/",
      // secure: true, // Uncomment in production
      // sameSite: 'strict',
    });
    console.log("Set-Cookie header:", response.headers.get("Set-Cookie")); // ✅ shows cookie string
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({
      message: "Something went wrong",
      success: false,
    });
  }
}
