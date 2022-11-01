const express = require('express');
var ws = require('websocket').server;

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
var usersCounter = 0;
 
var server = http.createServer(app).listen(3001);
 
var wsServer = new ws({httpServer: server});

wsServer.on('request', function (request) {
    usersCounter++;

    console.log(usersCounter);

    var connection = request.accept(null, request.origin);
 
    connection.sendUTF(usersCounter);    
    
    connection.on('close', function (connection) {
        usersCounter--;
        console.log('client disconnected');
    });
});

app.use('/', require('./routes/all_products'));
app.use('/', require('./routes/Order'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/facebook'));
app.use('/', require('./routes/single-product-router'));
app.use('/', require('./routes/homepage'));
app.use('/', require('./routes/product-category-router'));


app.get('*', function (req, res) {
    res.status(404).send('404 Page not found');
});

//app.listen(process.env.PORT)
