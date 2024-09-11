import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import itemRoutes from '../src/models/routes/items'; 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://sumit:1212@test.vxqgx.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/items', itemRoutes);

export default (req: VercelRequest, res: VercelResponse) => {
  return new Promise((resolve, reject) => {
    app(req, res).listen(PORT, () => {
      resolve(true);
    });
  });
};
