const mongoose = require ('mongoose');

mongoose.connect('mongodb://mongo/filaColeta', {useMongoClient:true});

mongoose.Promise = global.Promise;

module.exports = mongoose;
