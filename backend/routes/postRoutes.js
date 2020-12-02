import express from 'express';
import {
  createComment,
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
router.route('/:id/comment').put(auth, createComment);

export default router;
