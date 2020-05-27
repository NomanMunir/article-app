const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodekb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.once('open', () => console.log('Connected to Mongodb'))
db.on('error', (err) => console.log(err));

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(5000, () => console.log('running on port' + 5000));