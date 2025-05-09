import mongoose from "mongoose";
import { config } from "dotenv";
config();

const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/expenseTracker";

const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("database connected successfully");
  } catch (err) {
    console.log(err.message);
  }
};

export default dbConnect;
