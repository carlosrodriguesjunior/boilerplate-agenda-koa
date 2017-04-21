'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccessProfileSchema = new Schema({
    nome: String,
    menu: {
        type: Schema.Types.Mixed
    },
    admin: Boolean
});

module.exports.AccessProfileSchema = AccessProfileSchema;
module.exports.AccessProfile = mongoose.model('AccessProfile', AccessProfileSchema);
