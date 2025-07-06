// app/api/task/user/[id]/route.js

import { Task } from "@/models/task";
const { DbConnection } = require("@/app/helper/db");

import { NextResponse } from "next/server";
await DbConnection();

export async function GET(request, { params }) {
  const userId = params.id;

  try {
    const tasks = await Task.find({ userId });
    console.log("user all task ", tasks);

    return NextResponse.json({
      success: true,
      tasks,
      message: "Tasks fetched successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch tasks",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
