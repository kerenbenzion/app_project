const express = require('express');
const http = require('http');
const app = express();
const mongoose = require("mongoose");
// mongoose.connect(process.env.DB_CONNECTION_STRING, { 
//     useUnifiedTopology: true, 
//     useNewUrlParser: true 
// });

mongoose.connect("mongodb+srv://bnk:bnkmongo@cluster0.vu2gbj5.mongodb.net/?retryWrites=true&w=majority", { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});
module.exports = app;


app.set("view engine", "ejs");
app.use('/public', express.static('public'));

//app.use(express.static(__dirname + '/public/'));

app.use(express.urlencoded({ extended: false }));  

app.use('/', require('./routes/all_products'));

app.listen('3001')