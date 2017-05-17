'use strict';

const AccessProfile = require('../../src/models/accessProfileModel').AccessProfile;

module.exports = (telas) => ([

    new AccessProfile({
        nome: 'Usuário',
        admin: true,
        menu: []
    })

]);
