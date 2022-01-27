//importing mongoose packages for creating schema
const mongoose = require('mongoose');

//defining schema for our database
const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("User",schema);