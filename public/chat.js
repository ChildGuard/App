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

  // var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //  var count = 0;
  //  for(var i = 0; i < data.length; i++){
  //    var latlongset = new google.maps.LatLng(latitude.value, longitude.value);
  //    var marker = new google.maps.Marker({
  //      position: latlngset,
  //      map:map,
  //      title: "i'm the map!"
  //    });
  //  };
});

//Listen for events
socket.on('chat', function(data){
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
   var count = 0;
   for(var i = 0; i < data.length; i++){
     var latlongset = new google.maps.LatLng(data.latitude, data.longitude);
     var marker = new google.maps.Marker({
       position: latlngset,
       map:map,
       title: "i'm the map!"
     });
   };
  // console.log(data);
  // output.innerHTML +='<p><strong>' + data.latitude + ', </strong>' + data.longitude + "</p";
  // output.innerHTML +='<p><strong>' + data.latitude + ', </strong>' + data.longitude + "</p";
});
