'use strict';

const rp = require('request-promise');
const JobExecutionRepository = require('../repositories/jobExecutionRepository');

class  Integration1Service{

    *checkOrder(email, name, title, msg) {
        let result = yield rp('http://www.mocky.io/v2/5185415ba171ea3a00704eed');
        return result;
    }



}
module.exports = new Integration1Service();
