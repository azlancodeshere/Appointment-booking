import dotenv from "dotenv";
import connectDB from "./db/db.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./src/routes/user.route.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use("/api/users", userRoutes);

connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});