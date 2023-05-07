const express = require('express')
const router = express.Router()
const Post = require('../models/post')

//get all 
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find() //.sort({surname})
        res.json(posts)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// create one
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body
    })
    try {
        const newPost = await post.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(400).json({ message: error })
    }
})

module.exports = router