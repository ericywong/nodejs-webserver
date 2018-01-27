//getting http from the node.js core
var http = require('http');
//require file module
var fs = require('fs');

//browser receives request from the 1337 local host port and sends a MIME text/html
//head and body response
//createServer is the object from http and initiates a callback
http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type': 'text/html' });
    //path to read the html file synchronously 
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    //utf8 lets buffer know to read a string rather than binary data 
    var message = 'Hello world...';
    html = html.replace('{Message}', message);
    //send the html files as the response to the browser's request 
    res.end(html);

}).listen(1337, '127.0.0.1')
//listen is where the createServer looks for the port. 
//1337 is the port we choose (localhost:1337)
//127.0.01 is the standard internal IP address for the system
//127.0.01 is the localhost server


//when run with node app.js, the cursor will just sit because it is waiting for an http request