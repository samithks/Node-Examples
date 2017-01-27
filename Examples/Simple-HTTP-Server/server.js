'use strict';

const http = require('http');
const config = require ('./server.config.js');

function handleRequest(req, res) {
    res.end('Hello World');
}

const server = http.createServer(handleRequest)
    .listen(config.port, config.host, function () {
        let host = server.address().address;
        let port = server.address().port;
        console.log('Server listening on http://%s:%s', host, port)
    });