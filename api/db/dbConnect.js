import mongoose from "mongoose";
import { config } from "dotenv";
config();

const url = process.env.MONGO_URL || "mongodb+srv://gupt679t667:BsN4gPpk0RoOIXIF@cluster0.j5v2vfn.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0";

const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("database connected successfully");
  } catch (err) {
    console.log(err.message);
  }
};

export default dbConnect;
