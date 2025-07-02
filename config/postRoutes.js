const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.showPosts);
router.post('/add-post', postController.createPost);

module.exports = router;
