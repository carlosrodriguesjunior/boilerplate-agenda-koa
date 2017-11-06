'use strict';

const helper = require('sendgrid').mail;
const sendGridKey = require('../config/constants').sendGridKey;
const sendgrid = require('sendgrid')(sendGridKey);
const handlebars = require('handlebars');
const fs = require('fs');
const co = require('co');
//const template = fs.readFileSync('src/handlebarsTemplates/email.html', 'utf-8');

class EmailService {

    *sendNotificationEmail(email, name, title, msg) {

        let fromEmail = new helper.Email('no-reply@blabla.com.br', 'integrador');
        let toEmail = new helper.Email(email);

        let subject = title;
        let template = yield this.buildEmailTemplate(name, title, msg);
        let content = new helper.Content('text/html', template);
        let mail = new helper.Mail(fromEmail, subject, toEmail, content);


        let request = sendgrid.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });

        sendgrid.API(request, function(error, response) {
            // console.log(response.statusCode)
            // console.log(response.body)
            // console.log(response.headers)
        });

    }

    *buildEmailTemplate(name, title, msg) {

        let data = {
            title,
            name,
            msg
        };

        let precompile = handlebars.compile('');
        let html = precompile(data);

        return html;
    }

}
module.exports = new EmailService();
