'use strict';

// Import the HTTP Module
const http = require('http');

// Import the server config
const config = require ('./server.config.js');

// A function which handles requests and send response
function handleRequest(req, res) {
    res.end('Hello World');
}

// Start a server that listen to the port in configuration file
const server = http.createServer(handleRequest)
    .listen(config.port, config.host, function () {
        let host = server.address().address;
        let port = server.address().port;
        console.log('Server listening on http://%s:%s', host, port)
    });