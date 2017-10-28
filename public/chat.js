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
//
// function addMarker(coords){
//   var marker = new google.maps.Marker({
//     position: coords,
//     map:map
//   });
// }

//Listen for events
socket.on('chat', function(data) {
    // map.innerHTML += <script>
    // addMarker({lat: latitude.value, lng: longitude.value});
    //
    // // var mapOptions = {
    // //   center: new google.maps.LatLng(data['latitude'], data['longitude']),
    // //   zoom: 7,
    // //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // // };
    // // var marker = new google.maps.Marker({
    // //                   position: new google.maps.LatLng(data['latitude'],data['longitude']),
    // //                   map: map,
    // //                   title: String("poop"),
    // //                 });
    //   });
    //   </script>
    //

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
    console.log(typeof(floatLat));

    //  var count = 0;
    //  var latlongset = new google.maps.LatLng(data.latitude, data.longitude);
    //
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
    // };

    // output.innerHTML += '<p><strong>' + data.latitude + ', </strong>' + data.longitude + "</p";
});
