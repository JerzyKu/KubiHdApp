const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now()
    }
})

module.exports = mongoose.model("Article", articleSchema)