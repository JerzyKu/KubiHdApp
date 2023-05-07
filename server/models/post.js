const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:
    {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: () => Date.now()
    },
    reactions: {
        type: []
    }
})

module.exports = mongoose.model("Post", postSchema)