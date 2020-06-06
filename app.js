const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Connected to Mongodb
mongoose.connect('mongodb://localhost:27017/nodekb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to Mongodb'))
db.on('error', (err) => console.log(err));



const routes = require('./routes/router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body Parser middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//using express routes
app.use(routes)



app.listen(5000, () => console.log('running on port' + 5000));