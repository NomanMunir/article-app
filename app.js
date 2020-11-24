const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const env = require('dotenv');

env.config();
// Connected to Mongodb
mongoose.connect(process.env.DB_URI, {
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



app.listen(process.env.PORT, () => console.log('running on port' + process.env.PORT));