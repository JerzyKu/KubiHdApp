const express = require('express')
const router = express.Router()

const Item = require('../models/item')

//create one 
router.post('/', async (req, res) => {
    const item = new Item ({
        serialNumber: req.body.serialNumber,
        name: req.body.name
    })
    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        res.json(items)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router