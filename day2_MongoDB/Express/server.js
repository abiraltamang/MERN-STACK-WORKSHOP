/**
 * Importing packages
 */
const express= require('express');
const mongoose = require('mongoose');

//Importing routes from routes/index.js
const router = require('./routes')

//initilize express
const app=express();

// Parses the json data from request body
app.use(express.json());

// Parses the query params from request url
app.use(express.urlencoded({ extended: true }));

app.use('/',router);

mongoose.connect("mongodb://localhost:27017/mylib")
    .then(()=>{
        console.log("Datebase connected")
    })
    .catch((err)=>{
        console.log(err)
    })

app.listen(3000, ()=>{
    console.log("App listening on port 3000: ");
})