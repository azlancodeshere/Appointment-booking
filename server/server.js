import dotenv from "dotenv";
import connectDB from "./db/db.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./src/routes/user.route.js";
import appointmentRoutes from "./src/routes/appointment.route.js"
import availabilityRoutes from "./src/routes/availability.route.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/appointment", appointmentRoutes)
app.use("/api/availability", availabilityRoutes);

connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});