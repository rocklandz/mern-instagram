import express from 'express';
import {
  createComment,
  createCommentInside,
  createPost,
  getPost,
  getPosts,
  getPostsByUser,
  likePost,
  likePostInside,
} from '../controllers/postControllers.js';
import { auth } from '../middlewares/auth.js';
const router = express.Router();

router.route('/').get(auth, getPosts).post(auth, createPost);
router.route('/:id').get(auth, getPost);
router.route('/user/:id').get(auth, getPostsByUser);
router.route('/:id/like').put(auth, likePost);
router.route('/:id/like-inside').put(auth, likePostInside);
router.route('/:id/comment').put(auth, createComment);
router.route('/:id/comment-inside').put(auth, createCommentInside);

export default router;
