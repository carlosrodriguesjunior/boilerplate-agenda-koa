const mongoose = require('./src/config/mongoose');
const mongodb = require('./src/config/mongodb')();

console.log(mongodb.connection);

module.exports = mongoose.connect(mongodb.connection, mongodb.options, err => {
    if (err) throw err;
});
