//Express package for build express server
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";

//connection function for connect mongoDB
import connectDB from "./src/configs/db.js";

//Routers files imported for specific routes
import userRouter from "./src/routes/userRoutes.js";
import sellerRouter from "./src/routes/sellerRoutes.js";
import productRouter from "./src/routes/productRoutes.js";
import cartRouter from "./src/routes/cartRoute.js";
import addressRouter from "./src/routes/addressRoutes.js";
import orderRouter from "./src/routes/orderRoute.js";

import connectClodinary from "./src/configs/cloudinary.js";

//created a server using express() function
const app = express();

//function call
await connectDB();
await connectClodinary();

//Allow multiple origins
const allowedOrigin = ["http://localhost:5173"];

//Middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigin, credentials: true}));
const PORT = process.env.PORT;

app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  console.log("Server is running");
});
