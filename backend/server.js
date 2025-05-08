const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const userRoutes = require('./routes/userRouter');

const app = express();
connectDB();

// لتفسير بيانات JSON القادمة في الطلبات
app.use(express.json());

// الراوتر
app.use('/api/users', userRoutes);

// إعداد المنفذ
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
