import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    work: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", taskSchema);
