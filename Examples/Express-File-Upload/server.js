'use strict'

// Get the required modules
const express = require('express');
const http = require('http');
const fileUpload = require('express-fileupload');

const config = require('./server.config.js');

var app = express();


// For serving static asseets

app.use(express.static(__dirname + '/public'));

// default options 
app.use(fileUpload());

app.post('/upload', function (req, res) {
  var fileName;

  if (!req.files) {
    res.send('No files were uploaded.');
    return;
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  fileName = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server 
  fileName.mv('/upload/'+ fileName.name, function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('File uploaded!');
    }
  });
});

// Start Server
const server = http.createServer(app)
  .listen(config.port, config.host, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server running at http://%s:%s', host, port);
  })