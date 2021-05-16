const { mongo } = require('mongoose')
const mongoose = require('./../config/mongoose')

const donorSchema = new mongo.Schema({
    full_name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    amount : {
        type : Number,
        require : true
    },
    reference : {
        type : String,
        require : true
    }
})

const Donor = mongoose.model('Donor', donorSchema);
module.exports = {Donor}