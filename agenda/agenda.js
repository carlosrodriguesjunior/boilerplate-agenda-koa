'use strict';
/*eslint camelcase: ["error", {properties: "never"}]*/

const express = require('express');
const Agenda = require('agenda');
const Agendash = require('agendash');
const mongodb = require('../src/config/mongodb')();
const db = require('../db');


db.connection.on('connected', () => {
    let app = express();    
    
    let agenda;

    let startAgenda = () => {

        require('./jobs/integration1/firstJob')(agenda);


        agenda.on('start', function(job) {
            console.time(`Job ${job.attrs.name}`);
        });

        agenda.on('complete', function(job) {
            console.timeEnd(`Job ${job.attrs.name}`);
        });

        agenda.on('fail', function(err, job) {
            console.error(`Job ERROR ${job.attrs.name}`);
            console.error(err);
        });

        agenda.emit('ready');
        agenda.start();
    };
    
    agenda = new Agenda({
        db: {
            address: mongodb.connection,
            collection: 'jobs',
            options: {
                server: {
                    auto_reconnect: true
                }
            }
        },
        defaultLockLifetime: 50000
    }, startAgenda);
    

    let stopAgenda = () => {
        agenda.stop(() => process.exit(0));
    };

    process.on('SIGTERM', stopAgenda);
    process.on('SIGINT', stopAgenda);

    app.use('/agendash', Agendash(agenda, {
        title: 'Scheduller'
    }));
    app.listen(9000);
    console.log('Process started, check UI in :9000/agendash');
});
