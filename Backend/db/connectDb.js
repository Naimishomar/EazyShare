import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URL;

const connectDb = async () => {
  await mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }); 
};

export default connectDb;
