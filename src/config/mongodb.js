var port = process.env.MONGO_PORT || 27017;
var uri = process.env.MONGO_HOST || "mongodb://localhost:" + port + "/processor";

const options = {
    server: {
        poolSize: 10,
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    }
};

module.exports = (mode) => {
    return {
        connection: uri,
        options: options
    };
};