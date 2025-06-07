import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});

const connectDb = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected successfully✅"); 
    } catch (error) {
        console.log("❌Error while connecting database", error);
    }
}

export default connectDb;