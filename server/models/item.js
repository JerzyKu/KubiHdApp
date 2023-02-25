const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    serialNumber:
    {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: () => Date.now()
    }, 
    owner: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref:"User"
    }
})

module.exports = mongoose.model("Item", itemSchema)