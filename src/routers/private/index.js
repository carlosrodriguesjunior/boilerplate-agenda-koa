const mount = require('koa-mount');

module.exports = function(server) {

    const userRouter = require('./userRouter');
    server.use(mount('/api/user', userRouter.routes()));

};