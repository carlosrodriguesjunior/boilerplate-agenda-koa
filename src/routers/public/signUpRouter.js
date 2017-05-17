'use strict';

const Router = require('koa-router');
const User = require('../../models/userModel').User;
const OAuthClient = require('../../models/oAuthClientModel').OAuthClient;
const UserService = require('../../services/userService');

let signUpRouter = new Router();

signUpRouter.post('/', function *(next) {
    try {
        this.body = yield UserService.signUp(this.request.body);
        this.status = 200;
    } catch (error) {
        this.body = error;
    }
});

signUpRouter.post('/verifyemail', function *(next) {
    try {
        this.body = yield UserService.verifyEmail(this.request.body);
        this.status = 200;
    } catch (error) {
        this.body = error;
    }
});

module.exports = signUpRouter;
