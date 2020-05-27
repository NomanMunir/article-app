const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
})
const Article = module.exports = mongoose.model('Article', articleSchema);