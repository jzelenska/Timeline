const { getSortedPosts, addPost } = require('../models/postModel');

exports.showPosts = (req, res) => {
  const posts = getSortedPosts();
  res.render('index', { posts });
};

exports.createPost = (req, res) => {
  const { name, createdAt, message } = req.body;
  if (name && createdAt && message) {
    addPost({ name, createdAt, message });
  }
  res.redirect('/');
};
