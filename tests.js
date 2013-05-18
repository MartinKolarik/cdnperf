#!/usr/bin/env node
var config = require('./config');
var data = require('./data');


main();

function main() {
    dayAverageLatency();
    checks();
}

function dayAverageLatency() {
    data.dayAverageLatency(config.pingdom, {
        date: new Date()
    }, function(err, results) {
        if(err) return console.error(err);

        console.log('day averages', results);
    });
}

function checks() {
    data.checks(config.pingdom, {
        limit: 5
    }, function(err, results) {
        if(err) return console.error(err);

        console.log(results, results[0].data);
    });
}
