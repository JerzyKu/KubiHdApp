const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    inventory: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('User', userSchema)