'use strict'

// Get the required modules
const express = require('express');
const http = require('http');

const config = require('./server.config.js');

var app = express();


// For serving static asseets

app.use(express.static(__dirname + '/public'));

// For downloading the file

app.get('/download', function(req, res) {
    var file = __dirname + '/file/sample-file.txt';
    res.download(file, 'sample.txt', function(err){
  if (err) {
    // Handle error, but keep in mind the response may be partially-sent
    // so check res.headersSent
    console.log(err);
  } else {
    // decrement a download credit, etc.
    console.log('success')
  }
});
})

// Start Server
const server = http.createServer(app)
    .listen(config.port, config.host, function () {
        let host = server.address().address;
        let port = server.address().port;
        console.log('Server running at http://%s:%s', host, port);
    })