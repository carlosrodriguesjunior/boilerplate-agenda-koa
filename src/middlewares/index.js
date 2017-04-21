const mount = require('koa-mount');

module.exports = function(server) {

    // const paginationMiddleware = require('./paginationMiddleware');
    // server.use(mount('/api', paginationMiddleware));

    const userMiddleware = require('./userMiddleware');
    server.use(mount('/api', userMiddleware));
};