'use strict';

const _ = require('lodash');
const User = require('../models/userModel').User;

class UserRepository {

    *
    findOne(user) {
        return yield User.findById(user._id);
    }

     *
    findOneByEmail(email) {
        return yield User.findOne({username:email});
    }

    *
    create(user) {
        return yield User.create(user);
    }

    *
    update(newUser) {
        let user = yield User.findById(newUser._id);
        user.name = newUser.name;
        yield user.save();
        return user;
    }

};

module.exports = new UserRepository();