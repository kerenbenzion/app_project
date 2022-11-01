const express = require('express');
const http = require('http');
const app = express();
const session = require('express-session')
const mongoose = require("mongoose");
const env = require('dotenv').config();
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
module.exports = app;

app.use(session({
    secret: 'foo',
    saveUninitialized: false,
    resave: false
}))
app.set("view engine", "ejs");
app.use('/public', express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/all_products'));
app.use('/', require('./routes/Order'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/facebook'));
app.use('/', require('./routes/single-product-router'));
app.use('/', require('./routes/homepage'));
app.use('/', require('./routes/product-category-router'));
app.use('/', require('./routes/graph'));


app.get('*', function (req, res) {
    res.status(404).send('404 Page not found');
});
app.listen(process.env.PORT)
