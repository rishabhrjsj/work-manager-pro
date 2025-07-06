import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(request) {
  try {
    const loginToken = request.cookies.get("loginToken")?.value;

    if (!loginToken) {
      return NextResponse.json({ error: "Token missing" }, { status: 401 });
    }

    const data = jwt.verify(loginToken, process.env.JWT_TOKEN);
    console.log("Token payload:", data);

    const user = await User.findById(data.userId).lean();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error verifying token or fetching user:", error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
