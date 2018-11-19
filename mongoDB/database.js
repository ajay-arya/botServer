const data = require('./data');

var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect(data.mongoUrl);

module.exports = {mongoose};

