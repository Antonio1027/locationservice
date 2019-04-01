const mongoose = require('mongoose');
const locationSchema = require('./Models/Location');

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);

    mongoose.model('Location', locationSchema);
}