'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AccessProfileSchema = require('./accessProfileModel').AccessProfileSchema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String
    },
    accessProfile: AccessProfileSchema,
    oauthClients: [{
        type: Schema.Types.ObjectId,
        ref: 'OAuthClient'
    }],
});

module.exports.UserSchema = UserSchema;
module.exports.User = mongoose.model('User', UserSchema);
