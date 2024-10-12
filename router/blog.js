const express = require('express');

const BlogController = require('../controllers/blog');

const api = express.Router();

const multiparty = require('connect-multiparty');
const md_upload = multiparty({ uploadDir: './uploads/blog' });

api.post('/blog', [md_upload], BlogController.createBlog);
api.get('/blogs', BlogController.getBlog);
api.get('/blog/:id', BlogController.getSpecificBlog);
api.delete('/blog/:id', BlogController.deleteBlog);

module.exports = api