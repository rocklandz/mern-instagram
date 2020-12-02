import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc   Get posts
// @route  GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  if (posts) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

// @desc   Get single post
// @route  GET /api/posts/:id
// @access Private
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

// @desc   Create a post
// @route  POST /api/posts/
// @access Private
const createPost = asyncHandler(async (req, res) => {
  const { id, name, avatar } = req.user;

  const post = await Post.create({
    user: id,
    name: name,
    avatar: avatar,
    image: req.body.image,
  });

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

// @desc   Like a post
// @route  PUT /api/posts/:id/like
// @access Private
const likePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    if (post.likes.map((like) => like.user).includes(req.user.id)) {
      res.status(400);
      throw new Error('Post already liked');
    }

    post.likes.unshift({
      user: req.user._id,
      name: req.user.username,
    });

    await post.save();
    res.json(post.likes);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

export { getPost, getPosts, likePost, createPost };