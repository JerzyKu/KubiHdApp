const express = require('express')
const router = express.Router()

const User = require('../models/user')
const Article = require('../models/article')
const Item = require('../models/item')


router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        const items = await Item.find()
        const articles = await Article.find()
        console.log("???");
        res.json({
            users: users.length,
            items: items.length,
            articles: articles.length
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router