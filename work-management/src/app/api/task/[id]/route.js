import { Task } from "@/models/task";
import { NextResponse } from "next/server";
const { DbConnection } = require("@/app/helper/db");
DbConnection();

//get task by id
export async function GET(request, { params }) {
  const taskId = params.id;

  try {
    const task = await Task.findById(taskId);
    console.log(`task send ${task}`);
    return NextResponse.json({
      task: task,
      message: "task send",
    });
  } catch (error) {
    console.log(`cant send task`);
    return NextResponse.json(
      {
        message: "Failed to sent  task",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

//delete task

export async function DELETE(request, context) {
  const { id } = context.params;
  const taskId = id;
  try {
    const task = await Task.findByIdAndDelete(taskId);
    console.log(`task deleted ${task}`);
    return NextResponse.json({
      success: true,
      task: task,
      message: "task deleted",
    });
  } catch (error) {
    console.log(`cant delete task`);
    return NextResponse.json(
      {
        message: "Failed to delete  task",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

//update task status
export async function PUT(request, { params }) {
  DbConnection();

  try {
    const { id } = params;
    const { status } = await request.json();
    console.log("update status", status);

    // if (!status || !["pending", "completed"].includes(status)) {
    //   return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    // }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedTask) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTask, { status: 200 });
  } catch (error) {
    console.error("Error updating task status:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
