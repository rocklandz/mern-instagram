import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();
connectDb();

const app = express();

app.use(express.json());
app.use(cors());

//  Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));