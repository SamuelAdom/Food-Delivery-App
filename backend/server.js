import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000; // Use Vercel's assigned port

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Serve static files (if needed)
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("API working");
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app; // Important for Vercel
