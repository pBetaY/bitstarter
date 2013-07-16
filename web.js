var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var infile = "index.html";

app.get('/', function(request, response) {
 response.send(fs.readFileSync(infile).toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
