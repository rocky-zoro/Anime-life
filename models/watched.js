const mongoose = require('mongoose');


const watchlist = new mongoose.Schema({
    userID: {type:String, unique : true, require: true},
    serverID: {type:String, spare: true, unique : false},
    watched: {type:String, spare : true, unique : false},
    anote:[String],
    watched:[String],

});


const model = mongoose.model("ProfileModels", watchlist);



module.exports = model;
