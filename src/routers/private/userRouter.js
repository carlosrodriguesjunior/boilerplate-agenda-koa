'use strict';

const UserService = require('../../services/userService');
const Router = require('koa-router');

let userRouter = new Router();

userRouter.get('', function*(next) {
    try {
        delete this.user.password;
        this.body = this.user;

    } catch (e) {
        console.log(e);
        this.status = 500;
        this.body = e.message;
    }
});

userRouter.get('/:email', function*(next) {

    try {
        this.body = yield UserService.findOne(this.request, this.params.email);

    } catch (e) {
        console.log(e);
        this.status = 500;
        this.body = e.message;
    }

});

// userRouter.post('/', function*(next) {

//     try {
//         this.body = yield UserService.create(this.request.body);
//     } catch (e) {
//         console.log(e);
//         this.status = 500;
//         this.body = e.message;
//     }
// });

userRouter.put('/', function*(next) {

    try {
        this.body = yield UserService.update(this.request.body);

    } catch (e) {
        console.log(e);
        this.status = 500;
        this.body = e.message;
    }
});

module.exports = userRouter;