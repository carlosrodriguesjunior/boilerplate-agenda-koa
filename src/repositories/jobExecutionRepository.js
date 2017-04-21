'use strict';

const _ = require('lodash');
const JobExecution = require('../models/jobExecutionModel').JobExecution;

class JobExecutionRepository {

    *
    create(jobExecution) {
        return yield JobExecution.create(jobExecution);
    }


};

module.exports = new JobExecutionRepository();