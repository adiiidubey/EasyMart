import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
