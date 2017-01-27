'use strict'

// Get the required modules
const express = require('express');
const http = require('http');

const config = require('./server.config.js');

var app = express();


// For serving static asseets

app.use(express.static(__dirname + '/public'));

// Start Server
const server = http.createServer(app)
    .listen(config.port, config.host, function () {
        let host = server.address().address;
        let port = server.address().port;
        console.log('Server running at http://%s:%s', host, port);
    })