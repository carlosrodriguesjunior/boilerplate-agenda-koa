'use strict';

var counters = {};
var lastModelName;

function createDocument(document) {
    return new Promise(resolve => {
        document.save(err => {
            if (err) {
                console.error(err);
                throw err;
            }
            let modelName = document.constructor.modelName;

            if (!counters[modelName])
                counters[modelName] = 0;
            if (modelName !== lastModelName)
                console.log('\t\x1b[', '', '\x1b');

            counters[modelName]++;
            lastModelName = modelName;

            console.log('\t\x1b[41m', modelName + ' created successfully', '\x1b[0m');
            resolve(document);
        });
    });
}

module.exports = documents => {
    var promises = [];

    documents.forEach(document => {
        promises.push(createDocument(document));
    });
    return promises;
};
