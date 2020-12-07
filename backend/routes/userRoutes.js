import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getProfileById,
} from '../controllers/userControllers.js';
const router = express.Router();

import { auth } from '../middlewares/auth.js';

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(auth, getUserProfile).put(auth, updateUserProfile);
router.route('/:id').get(auth, getProfileById);

export default router;
