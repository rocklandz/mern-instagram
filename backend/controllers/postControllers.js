import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc   Get posts
// @route  GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
    .sort({ createdAt: -1 })
    .limit(15)
    .populate('user', 'username avatar')
    .populate({
      path: 'comments',
      populate: { path: 'user', model: 'User', select: 'username' },
    })
    .populate({
      path: 'likes',
      populate: { path: 'user', model: 'User', select: 'username' },
    });

  if (posts) {
    res.json(posts);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

// @desc   Get posts by user ID
// @route  GET /api/posts/user/:id
// @access Private
const getPostsByUser = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.params.id });

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
  const post = await Post.findById(req.params.id)
    .populate('user', 'username avatar')
    .populate({
      path: 'comments',
      populate: { path: 'user', model: 'User', select: 'username' },
    })
    .populate({
      path: 'likes',
      populate: { path: 'user', model: 'User', select: 'username' },
    });

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
  const { id } = req.user;

  const post = await Post.create({
    user: id,
    image: req.body.image,
    caption: req.body.caption,
  });

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

// @desc   Like a post in home page
// @route  PUT /api/posts/:id/like
// @access Private
const likePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    if (post.likes.map((like) => like.user._id).includes(req.user.id)) {
      post.likes = post.likes.filter(
        ({ user }) => user._id.toString() !== req.user.id
      );

      await post.save();
    } else {
      post.likes.unshift({
        user: req.user._id,
      });

      await post.save();
    }

    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(15)
      .populate('user', 'username avatar')
      .populate({
        path: 'comments',
        populate: { path: 'user', model: 'User', select: 'username' },
      })
      .populate({
        path: 'likes',
        populate: { path: 'user', model: 'User', select: 'username' },
      });

    res.json(posts);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

// @desc   Like a post on post page
// @route  PUT /api/posts/:id/like-inside
// @access Private
const likePostInside = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    if (post.likes.map((like) => like.user._id).includes(req.user.id)) {
      post.likes = post.likes.filter(
        ({ user }) => user._id.toString() !== req.user.id
      );
      await post.save();
    } else {
      post.likes.unshift({
        user: req.user._id,
      });
      await post.save();
    }

    const updatedPost = await Post.findById(req.params.id)
      .populate('user', 'username avatar')
      .populate({
        path: 'comments',
        populate: { path: 'user', model: 'User', select: 'username' },
      })
      .populate({
        path: 'likes',
        populate: { path: 'user', model: 'User', select: 'username' },
      });

    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

// @desc   Create a comment
// @route  PUT /api/posts/:id/comment
// @access Private
const createComment = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    post.comments.unshift({
      user: req.user._id,
      comment: req.body.comment,
    });

    await post.save();

    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .limit(15)
      .populate('user', 'username avatar')
      .populate({
        path: 'comments',
        populate: { path: 'user', model: 'User', select: 'username' },
      })
      .populate({
        path: 'likes',
        populate: { path: 'user', model: 'User', select: 'username' },
      });

    res.json(posts);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

// @desc   Create a comment on post page
// @route  PUT /api/posts/:id/comment-inside
// @access Private
const createCommentInside = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    post.comments.unshift({
      user: req.user._id,
      comment: req.body.comment,
    });

    await post.save();

    const updatedPost = await Post.findById(req.params.id)
      .populate('user', 'username avatar')
      .populate({
        path: 'comments',
        populate: { path: 'user', model: 'User', select: 'username' },
      })
      .populate({
        path: 'likes',
        populate: { path: 'user', model: 'User', select: 'username' },
      });

    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error('No post found');
  }
});

export {
  getPost,
  getPosts,
  getPostsByUser,
  createPost,
  likePost,
  likePostInside,
  createComment,
  createCommentInside,
};
