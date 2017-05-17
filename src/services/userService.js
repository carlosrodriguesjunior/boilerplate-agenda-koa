'use strict';

const OAuthClient = require('../models/oAuthClientModel').OAuthClient;
const OAuthToken = require('../models/oAuthTokenModel').OAuthToken;
const UserRepository = require('../repositories/userRepository');
const EmailService = require('../services/emailService');
const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');

class UserService {

    *signUp(user) {
        if(user.password)
            user.password = this.generateHash(user.password);

        if (!user.username)
            user.username = user.email = user.email.toLowerCase();

        let clientOauth = yield OAuthClient.findOne({
            'clientId': 'app'
        });

        let registredUserFacebook = null;
        let registredUserGoogle= null;

        user.oauthClients = [clientOauth._id];

        return yield UserRepository.create(user);
    }

    *passwordReset(email) {
        
        let user = yield UserRepository.findOneByEmail(email.toLowerCase());

        if (!user) {
            throw 'Usuário não encontrado';
        }

        let newTemporayPassword = randomstring.generate({
            length: 6,
            charset: 'alphabetic',
            capitalization: 'lowercase'
        });

        let hashNewPassword = this.generateHash(newTemporayPassword);

        user.password = hashNewPassword;
        user.forceToChangePassword = true;


        yield user.save();

        let msg = 'Nova Senha<br><strong style="font-size:22px">' + newTemporayPassword + '</strong>';

        yield EmailService.sendNotificationEmail(user.email, user.name, 'Sua senha foi alterada!', msg);

    }

    *verifyEmail(email){
        let user = yield UserRepository.findOne(email);
        return user ? true : false;
    }

    *logout(token) {
        return yield OAuthToken.remove({ accessToken: token });
    }

    generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }

    validPassword(hash, password) {
        return bcrypt.compareSync(password, hash);
    }

    *update(user) {
        yield UserRepository.update(user);
    }

}

module.exports = new UserService();
