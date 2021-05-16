const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/paystackapi', 
{useNewUrlParser : true});

module.exports = {mongoose}