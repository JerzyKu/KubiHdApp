const express = require('express')
const router = express.Router()
const User = require('../models/user')

//get all 
router.get('/', async (req, res) => {
    try {
        const users = await User.find() //.sort({surname})
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// create one
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        surname: req.body.surname
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: error })
    }
})

module.exports = router