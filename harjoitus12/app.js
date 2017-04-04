var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'application/json'});
    var name = {
        firstname:'John',
        lastname:'Snow'
    }
    res.end(JSON.stringify(name))
}).listen(8888, '127.0.0.1');