const { Schema } = require('mongoose');

const locationSchema = new Schema({
    latitude: String,
    longitude: String,
    emai: String
});

module.exports = locationSchema;