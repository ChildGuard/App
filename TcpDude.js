var net = require('net');


// $GPSLOC={'lat':25.3, 'long':63.7}!$
/////
var nett = require("net");

// Create a socket (client) that connects to the server
var socket = new nett.Socket();
////////

var HOST = '127.0.0.1';
var PORT = 5905;

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {
  /////////
  socket.connect(61337, "localhost", function () {
      console.log("Client: Connected to server");
  });

  // Let's handle the data we get from the server
  socket.on("data", function (data) {
    sock.on('data', function(data2) {

        console.log('DATA ' + sock.remoteAddress + ': ' + data2);
        // Write the data back to the socket, the client will receive it as data from the server
        sock.write('You said "' + data2 + '"');

      var location;
      location = JSON.parse(data2);
      console.log(location);
      console.log("Response from server: %s", data2);

      var floatLat = parseFloat(data2);
      // Respond back
      socket.write(JSON.stringify(location));
      // Close the connection
      // socket.end();
    });
  });
  ////////
  //     {"lat":25.3, "long":63.7}

    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {

        // console.log('DATA ' + sock.remoteAddress + ': ' + data.data);
        // Write the data back to the socket, the client will receive it as data from the server
        sock.write('You said "' + data + '"');

    });

    // Add a 'close' event handler to this instance of socket
    // sock.on('close', function(data) {
    //     console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    // });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);


//////////////////////////////////////////////////////////////////////////////
