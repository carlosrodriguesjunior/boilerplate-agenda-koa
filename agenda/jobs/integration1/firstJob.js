'use strict';

const integration1Service = require('../../../src/services/integration1Service');
const jobExecutionRepository = require('../../../src/repositories/jobExecutionRepository');
const co = require('co');

function FirstJob(job, done) {
    co(function *() {
        try {
            let result = yield integration1Service.checkOrder();

            yield jobExecutionRepository.create({
                jobName: 'FirstJob',
                integration: 'Integration 1',
                result: result,
                dateExecution: new Date(),
                isSuccess: true
            });
            done();
        } catch (err) {
            yield jobExecutionRepository.create({
                jobName: 'FirstJob',
                integration: 'Integration 1',
                result: err.stack || err,
                dateExecution: new Date(),
                isSuccess: false
            });
            done(err.stack);
        }
    });
}

module.exports = function (agenda) {
    agenda.define('Processar: FirstJob', {
        priority: 'default'
    }, FirstJob);

    agenda.every('ten minute', 'Processar: FirstJob');
};
