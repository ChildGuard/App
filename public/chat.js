// Make connection
var socket = io.connect("http://localhost:4000");

//query dom
var latitude = document.getElementById("latitude");
    longitude = document.getElementById("longitude"),
    btn = document.getElementById("locate"),
    output = document.getElementById("output");

//Emit events

btn.addEventListener('click', function(){
  socket.emit('chat', {
    latitude: latitude.value,
    longitude: longitude.value
  });
});

//Listen for events
socket.on('chat', function(data){
  output.innerHTML +='<p><strong>' + data.latitude + ', </strong>' + data.longitude + "</p";
});
