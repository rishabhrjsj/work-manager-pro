import { mongoose } from "mongoose";
export const DbConnection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "work_manager",
    });
    console.log("db connected...");
  } catch (error) {
    console.log("db connection failed");
    console.log(error);
  }
};
