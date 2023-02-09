const express = require('express')
const router = express.Router()
const Article = require('../models/article')

// Getting all
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find()
        res.json(articles)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one 
router.get('/:id', getArticle, async (req, res) => {
    res.json(res.article)
})

//create one
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        body: req.body.body
    })
    try {
        const newArticle = await article.save()
        res.status(201).json(newArticle)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//update one
router.patch('/:id', getArticle, async (req, res) => {
    if (req.body.title != null) {
        res.article.title = req.body.title
    }
    if (req.body.body != null) {
        res.article.body = req.body.body
    }
    try {
        const updatedArticle = await res.article.save()
        res.json(updatedArticle)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

//delete one 
router.delete('/:id', getArticle, async (req, res) => {
    try {
        await res.article.remove()
        res.json({ message: "Deleted succesfull" })
    } catch (error) {
        res.status(500).message({ message: error.message })
    }
})


async function getArticle(req, res, next) {
    let article
    try {
        article = await Article.findById(req.params.id)
        if (article == null) {
            return res.status(404).json({ message: "cannot find Article" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.article = article
    next()
}

module.exports = router