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

// get all 
router.get('/', async (req, res) => {
    try {
        const items = await Item.find().populate('owner')
        res.json(items)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one 
router.get('/:id', getItem, async (req, res) => {
    res.json(res.item)
})

//delete one
router.delete('/:id', getItem, async (req, res) => {
    try {
        await res.item.remove()
        res.json({message: 'Delete succesfull.'})
    } catch (error) {
        res.status(500).message({message: error.message})
    }
})

async function getItem(req, res, next) {
    let item
    try {
        item = await Item.findById(req.params.id)
        if (item == null) {
            return res.status(404).json({ message: "cannot find Item" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.item = item
    next()
}

module.exports = router