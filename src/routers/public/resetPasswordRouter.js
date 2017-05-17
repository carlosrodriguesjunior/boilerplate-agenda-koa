'use strict';

const Router = require('koa-router');
const UserService = require('../../services/userService');

let resetPasswordRouter = new Router();

resetPasswordRouter.post('/', function *(next) {
    let email = this.request.body.email;

    if (!email) {
        this.status = 500;
        this.body = "É necessário informar um email";
        return;
    }

    try {
        yield UserService.passwordReset(email);
        this.status = 200;
    } catch (error) {
        this.status = 404;
        this.body = error.message;
    }

});

module.exports = resetPasswordRouter;
