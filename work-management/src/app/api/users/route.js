import { NextResponse } from "next/server";
const { DbConnection } = require("@/app/helper/db");
const { User } = require("../../../models/user");
const bcrypt = require("bcrypt");

DbConnection();

// GET all users
export async function GET() {
  try {
    const users = await User.find();

    return NextResponse.json(
      {
        message: "All users fetched successfully",
        users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch users",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// create user
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password, about } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const saltrounds = parseInt(process.env.SALT_ROUNDS);
    const salt = await bcrypt.genSalt(saltrounds);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ name, email, password: hashPassword, about });
    await newUser.save();
    console.log(`New user creted successfully: ${newUser}`);

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
