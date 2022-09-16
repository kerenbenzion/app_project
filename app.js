const express = require('express');
const http = require('http');
const app = express();

module.exports = app;


app.set("view engine", "ejs");
app.use('/public', express.static('public'));

//app.use(express.static(__dirname + '/public/'));

app.use(express.urlencoded({ extended: false }));  

app.use('/', require('./routes/all_products'));

app.listen('3001')