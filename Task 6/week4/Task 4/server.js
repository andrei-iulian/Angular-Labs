var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var app = express();
var http = require('http').Server(app);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist/week4')));



var host = '127.0.0.1';
var port = 3000;
var u = "georg@gmail.com";
var p = "gog";

var server = http.listen(port, host, function() {
    console.log("Server is listening on " + host + ':' + port);
});

app.post("/login", function(request, response) {    
    if (request.body.username ===  u && request.body.password === p) {
        response.send(true);
    } else {
        response.send(false);
    }   
});