import { Task } from "@/models/task";
import { NextResponse } from "next/server";
const { DbConnection } = require("@/app/helper/db");

DbConnection();
//show all task
export async function GET(request) {
  try {
    const allTask = await Task.find().lean(); // 👈 .lean() returns plain JS objects
    return NextResponse.json(
      {
        message: "Show all task",
        task: allTask,
      },
      { status: 201 }
    ); // ✅ status code optional
  } catch (error) {
    console.error("Failed to show task:", error);

    return NextResponse.json(
      {
        message: "Failed to show task",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Create task
export async function POST(request) {
  try {
    const { work, description, user } = await request.json();

    const newTask = new Task({
      work,
      description,
      user,
    });

    await newTask.save(); // 🔁 await save

    console.log(`New task created: ${newTask}`);

    return NextResponse.json(
      {
        message: "Task added successfully",
        task: newTask,
      },
      { status: 201 }
    ); // ✅ status code optional
  } catch (error) {
    console.error("Failed to create task:", error);

    return NextResponse.json(
      {
        message: "Failed to add task",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
