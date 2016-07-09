var fs = require('fs');
var http = require('http');
var https = require('https');
var crypto = require('crypto');
var privateKey = fs.readFileSync('sslcert/key.pem').toString();
var certificate = fs.readFileSync('sslcert/cert.pem').toString();

var credentials = {
    key: privateKey,
    cert: certificate
};
var express = require('express');
var app = express();

// your express configuration here
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', function(req, res) {
  console.log("got login with params:")
    console.log(req)
    res.json({auth : true})
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
