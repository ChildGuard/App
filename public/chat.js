// Make connection
var socket = io.connect("http://localhost:4000");
var coords;

//query dom
var latitude = document.getElementById("latitude");
longitude = document.getElementById("longitude"),
    btn = document.getElementById("locate"),
    output = document.getElementById("output");

//Emit events

btn.addEventListener('click', function() {
    socket.emit('chat', {
        latitude: latitude.value,
        longitude: longitude.value
    });
});

//Listen for events
socket.on('chat', function(data) {
    // var myLatlng = new google.maps.LatLng(parseFloat(data.latitude),parseFloat(data.longitude));

    var floatLat = parseFloat(data.latitude);
    var floatLng = parseFloat(data.longitude);


    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: floatLat,
            lng: floatLng
        },
        zoom: 20
    });

    coords = {
        lat: 20,
        lng: 20
    };

    var marker = new google.maps.Marker({
        position: {
          lat: floatLat,
          lng: floatLng
        },
        map: map
    });
    // output.innerHTML += '<p><strong>' + data.latitude + ', </strong>' + data.longitude + "</p";
});
