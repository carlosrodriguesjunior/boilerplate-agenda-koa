"use strict";

const _ = require('lodash');
const User = require('../../src/models/userModel).User;
const UserService = require('../../src/services/userService');

module.exports = (accessProfile, oauthClients) => (
    [
        new User({
            login: 'app@integrador',
            password: UserService.generateHash('app@123'),
            name: 'Usuário Integrador',
            phone: '11-999999999',
            email: 'app@integrador',
            username: 'app@integrador',
            accessProfile: accessProfile[0],
            oauthClients: [_.find(oauthClients, oauthClient => oauthClient.clientId === 'app')]
        })
    ]
);
