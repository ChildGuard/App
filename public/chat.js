// Make connection
var socket = io.connect("http://localhost:4000");

var coords;

//query dom
var latitude = document.getElementById("latitude");
var longitude = document.getElementById("longitude"),
btn = document.getElementById("locate"),
output = document.getElementById("output");

//Emit events

// btn.addEventListener('click', function() {
//     socket.emit('chat', {
//         latitude
//     });
// });

//Listen for events
socket.on('chat', function(data) {
    // var myLatlng = new google.maps.LatLng(parseFloat(data.latitude),parseFloat(data.longitude));

    console.log("Wtf is this shit" + data);
    console.log("wtf is this other bullshit" + data.lat);
    console.log("wtf is this other bullshit number two" + data.lng);

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: data.lat,
            lng: data.lng
        },
        zoom: 20
    });


    var marker = new google.maps.Marker({
        position: {
          lat: data.lat,
          lng: data.lng
        },
        map: map
    });
    // output.innerHTML += '<p><strong>' + data.latitude + ', </strong>' + data.longitude + "</p";
});
