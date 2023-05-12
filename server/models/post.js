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
    date: {
        type: Date,
        required: true,
        default: () => Date.now()
    },
    reactions: {
        thumbsUp: {
            type: Number,
            default: 0
        },
        wow: {
            type: Number,
            default: 0
        },
        heart: {
            type: Number,
            default: 0
        },
        rocket: {
            type: Number,
            default: 0
        },
        coffee: {
            type: Number,
            default: 0
        },
    },
    userId: {
        type: String, 
        require: true,
        default: -1
    }
})

module.exports = mongoose.model("Post", postSchema)