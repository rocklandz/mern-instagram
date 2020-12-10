import path from 'path';
import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { notFound, errorHandler } from './middlewares/error.js';

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

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Server is running');
  });
}

//  Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
