const { PORT } = process.env;
module.exports = {
    port: PORT || 4040,
    mongoURI: 'mongodb://127.0.0.1:27017/microservice_db'
};