const express = require('express');
const http = require('http');
const app = express();
const mongoose = require("mongoose");
const env=require('dotenv').config();
mongoose.connect(process.env.DB_CONNECTION_STRING, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});
module.exports = app;


app.set("view engine", "ejs");
app.use('/public', express.static('public'));


app.use(express.urlencoded({ extended: false }));  

app.use('/', require('./routes/all_products'));

app.listen(process.env.PORT)