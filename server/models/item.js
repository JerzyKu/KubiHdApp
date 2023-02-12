const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    serialNumber:
    {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now()
    }, 
    owner: {
        type: String, 
        default: "none"
    }
})

module.exports = mongoose.model("Item", itemSchema)