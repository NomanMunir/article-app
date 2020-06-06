const express = require('express');

// Article Schema
const Article = require('../models/schema/articles');

const router = express.Router()

router.get('/', (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) {
            console.log(err)
        } else {
            res.render('index', {
                title: 'Articles',
                articles: articles
            })
        }
    })
})
router.get('/articles', (req, res) => {
    Article.find({}, (err, articles) => {
        if (err) {
            console.log(err)
        } else {
            res.render('articles', {
                article: articles
            })
        }
    })
})
router.get('/articles/add', (req, res) => {
    res.render('add_article', {
        title: 'Add Articles'
    })
})

router.post('/articles/add', (req, res) => {
    const article = new Article();
    article.title = req.body.title;
    article.author = req.body.authro;
    article.body = req.body.body;

    article.save((err) => {
        if (err) {
            console.log(err)
            return;
        } else {
            res.redirect('/');
        }
    })
})

router.get('/articles/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        if (err) {
            console.log(err)
        } else {
            res.render('article', {
                article: article

            })
        }
    })
})

router.get('/articles/edit/:id', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        res.render('edit_article', {
            article: article
        })
    })
})

router.post('/articles/edit/:id', (req, res) => {
    let article = {}
    article.title = req.body.title
    article.author = req.body.author
    article.body = req.body.body

    const query = {
        _id: req.params.id
    };

    Article.updateOne(query, article, (err, article) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/');
        }
    })
})

router.delete('/article/:id', (req, res) => {
    const query = {
        _id: req.params.id
    }
    Article.deleteOne(query, (err) => {
        if (err) {
            console.log(err)
            return;
        } else {
            res.send('Success');
        }
    })
})

module.exports = router