const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');

// @desc    Create a new post
// @route   POST /api/posts
const createPost = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const user = req.user._id;

  const post = await Post.create({
    user,
    content,
  });

  // Populate user data to send back to frontend
  const createdPost = await Post.findById(post._id).populate('user', 'name');

  if (createdPost) {
    res.status(201).json(createdPost);
  } else {
    res.status(400);
    throw new Error('Invalid post data');
  }
});

// @desc    Get all posts
// @route   GET /api/posts
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate('user', 'name').sort({ createdAt: -1 });
  res.json(posts);
});

module.exports = { createPost, getPosts };