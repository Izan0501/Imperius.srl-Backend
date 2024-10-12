const Blog = require('../models/blog');
const image = require('../utils/getFileName.js');


async function createBlog(req, res) {
    const newBlog = new Blog(req.body);
    
    if (req.files.image) {
        const imagePath = image.getFileName(req.files.image);
        newBlog.image = imagePath
    }
    
    try {
        await newBlog.save()
        res.status(200).send({ msg: 'Saved Blog' })
    } catch (error) {
        res.status(500).send({ msg: `Error To Save Blog ${error}` });
    }
};

async function getBlog(req, res) {
    try {
        const Blogs = await Blog.find();
        res.status(200).send(Blogs);
    } catch (error) {
        res.status(500).send({ msg: `Error To Get Blog: ${error}` });
    }
};

async function getSpecificBlog(req, res) {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        res.status(200).send(blog);
    } catch (error) {
        res.status(500).send({ msg: `Error To Get Blog: ${error}` });
    }
};

async function deleteBlog(req, res) {
    
    const { id } = req.params;

    try {
        await Blog.findByIdAndDelete(id)
        res.status(200).send({ msg: 'Deleted' })
    } catch (error) {
        res.status(400).send({ msg: `Delete Error: ${error}` });
    }
};

module.exports = {
    createBlog,
    getBlog,
    getSpecificBlog,
    deleteBlog
}