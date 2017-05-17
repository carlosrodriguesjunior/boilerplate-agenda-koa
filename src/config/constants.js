//TODO: Configurar email
const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'email',
        pass: 'senha'
    }
};

const web = 'http://localhost:8080/#/';

const sendGridKey = '';

module.exports = {
    smtpConfig,
    web,
    sendGridKey
};
