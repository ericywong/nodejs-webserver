//getting http from the node.js core
var http = require('http');
//require file module
var fs = require('fs');

//browser receives request from the 1337 local host port and sends a MIME application/json
//head and body response
//createServer is the object from http and initiates a callback
http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type': 'application/json' });
    //creating a json object
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    }
    //send the JSON obj as the response to the browser's request 
    //can't use obj because node will read it as an object, event if obj.toString()
    //V8 engin as JSON.stringify(obj) which takes the object and converts it to a string
    //we are serializing the object into a string to be sent to the browser, which can then be deserialized
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1')
//listen is where the createServer looks for the port. 
//1337 is the port we choose (localhost:1337)
//127.0.01 is the standard internal IP address for the system
//127.0.01 is the localhost server


//when run with node app.js, the cursor will just sit because it is waiting for an http request