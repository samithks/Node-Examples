'use strict';

// Initate modules
const express = require('express');

const data = require('./app/model/data.json');


const http = require('http');
const config = require('./server.config.js');

const app = express();


// Server static assets
app.use('/assets', express.static(__dirname + '/app/public'));

// set the view engine 
app.set('view engine', 'jade');

// location for jade file
app.set('views', __dirname + '/app/view');

// Set default response to index.jade
app.get('/', function (req, res) {

    res.render('index', {dataList: data});

});

// Start Server
const server = http.createServer(app)
    .listen(config.port, config.host, function () {
        let host = server.address().address;
        let port = server.address().port;
        console.log('Server running at http://%s:%s', host, port);
    });