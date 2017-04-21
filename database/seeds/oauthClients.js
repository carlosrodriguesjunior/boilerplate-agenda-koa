'use strict';

const OAuthClient = require('../../src/models/oAuthClientModel').OAuthClient;

module.exports = () => (
    [
        new OAuthClient({
            clientId: 'app',
            clientSecret: 'app@integrador'
        })
    ]
);