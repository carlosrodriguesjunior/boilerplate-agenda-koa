'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobExecutionSchema = new Schema({
    jobName: {
        type: String,
        required: true
    },
    integration: {
        type: String,
        required: true
    },
    result: {
        type: Object,
        required: true
    },
    dateExecution: {
        type: Date,
        required: true
    },
    isSuccess:
    {
        type: Boolean,
        required: true
    }

});

module.exports.JobExecutionSchema = JobExecutionSchema;
module.exports.JobExecution = mongoose.model('JobExecution', JobExecutionSchema);
