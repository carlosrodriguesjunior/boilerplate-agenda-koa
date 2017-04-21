'use strict';

const OAuthToken = require('../models/oAuthTokenModel').OAuthToken;

module.exports = function*(next) {

    let bearerToken = this.headers.authorization.substring(7);
    let accessToken = yield OAuthToken.findOne({
        accessToken: bearerToken
    }).populate('user').lean();
    this.user = accessToken.user;
    yield next;
};