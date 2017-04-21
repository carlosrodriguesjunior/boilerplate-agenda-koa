'use strict';

const mongoose    = require('mongoose');
const Router      = require('koa-router');
const oauthServer = require('../../oauth/oauthServer');

var oauthRouter = new Router();

oauthRouter.post('/oauth/token', oauthServer.grant());

module.exports = oauthRouter;
