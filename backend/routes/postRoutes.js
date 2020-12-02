import express from 'express';
import {
  createPost,
  getPost,
  getPosts,
  likePost,
} from '../controllers/postControllers.js';
import { auth } from '../middlewares/auth.js';
const router = express.Router();

router.route('/').get(auth, getPosts).post(auth, createPost);
router.route('/:id').get(auth, getPost);
router.route('/:id/like').put(auth, likePost);

export default router;
