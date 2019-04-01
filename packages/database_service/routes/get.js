const mongoose = require('mongoose');
const Location = mongoose.model('Location');

const pingHandler = (_, res) => {
    res.send('healthy')
}

const locationHandler = async (_, res) => {
    let locations;
    let error;

    try{
        locations = await Location.find();
    } catch (err) {
        error = err;
    }

    res.send({
        message: "Got response from DB",
        service: "Database service",
        status: 200,
        payload: locations || error
    });
};

const singleLocationHandler = async ({ params: { id } }, res) => {
    let location;
    let error;

    try{
        location = await Location.findOne({ _id: id });
    } catch (err) {
        error = err;
    }

    res.send({
        message: "Got response from DB",
        service: "Database service",
        status: 200,
        payload: location || error
    });
}

module.exports = server => {
    server
    .get('/', pingHandler)
    .get('/locations', locationHandler)
    .get('/locations/:id', singleLocationHandler);
}
