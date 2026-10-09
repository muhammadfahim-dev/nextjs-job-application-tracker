import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

async function connectDB() {
  const MONGODB_URL = process.env.MONDODB_URI;

  if (!MONGODB_URL) throw new Error("mongodb url missing");

  if (cached.conn && mongoose.connection.readyState === 1) {
    console.log("DB Already connected");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URL, { bufferCommands: false });
    console.log("DB connected successfully");
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error("DB connection failed");
    throw error
  }

  return cached.conn;
}

export { connectDB };
