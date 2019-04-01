const mongoose = require('mongoose');
const Location = mongoose.model('Location');

const locationHandler = async ({ body: {
    latitude,
    longitude,
    emai
} }, res) => {
    let location;
    let error;

    if(!latitude || !longitude || !emai) {
        res.sendStatus(400).send({
            message: "You forgot some important key",
            service: "Database service",
            status: 400,
            payload: null
        });
    }

    const newLocation = new Location({
        latitude,
        longitude,
        emai
    });

    try {
        location = await newLocation.save();
    } catch (err) {
        error = err;
    }

    res.send({
        message: "Location saved",
        service: "Database service",
        status: 200,
        payload: location
    });
}

module.exports = server => {
    server.post('/locations', locationHandler);
};