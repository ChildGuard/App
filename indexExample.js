var express = require('express');
var socket = require('socket.io');

var HOST = '127.0.0.1';
var PORT = 61337;
//App setup
var app = express();
var server = app.listen(80, function(){
  console.log('listening to requests on port 80')
});

//static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection',function(socket){
  console.log("Made socket connection", socket.id);

  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });
});


/////////////////////////////////////////////////////////////////////////////////////////////////
const net = require("net");

// Create a simple server
net.createServer(function (conn) {
    console.log("Server: Client connected");

    // If connection is closed
    conn.on("end", function() {
        console.log('Server: Client disconnected');
        // Close the server
        // server.close();
        // End the process
        // process.exit(0);
    });

    // Handle data from client
    conn.on("data", function(data) {
        //do parsing over here
        var location = JSON.parse(data);
        console.log("Response from client: %s", location);
        io.sockets.emit('chat', location);
    });

    // Let's response with a hello message
    conn.write(
        JSON.stringify(
            { response: "Hey there client!" }
        )
    );
}).listen(PORT, HOST);

// Listen for connections
// server.listen(61337, "localhost", function () {
//     console.log("Server: Listening");
// });
