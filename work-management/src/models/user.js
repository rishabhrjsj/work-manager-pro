import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true, // Optional: to prevent duplicate emails
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
    about: {
      type: String,
      profileURL: String,
    },
  },
  { timestamps: true }
); // Optional: adds createdAt & updatedAt

// Prevent model overwrite error during hot reload
export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
