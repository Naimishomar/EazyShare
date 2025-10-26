import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URL;
if (!MONGO_URI) throw new Error("MONGO_URL env var not set");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
  bufferCommands: false, // fail fast instead of buffering
};

// Cache connection globally for serverless
let cached = global._mongo || (global._mongo = { conn: null, promise: null });

const connectDb = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, options)
      .then((mongooseInstance) => {
        console.log("MongoDB connected successfully ✅");
        return mongooseInstance;
      })
      .catch((err) => {
        cached.promise = null; // allow retry
        console.error("❌ MongoDB connection error:", err);
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDb;
