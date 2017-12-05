// Make connection
var socket = io.connect("http://childguard.anthony-nunez.me");
var arr = []; //new Array(5);

// for(var i = 0; i < arr.length; i++){
//   arr[i] = null;
// }

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
    console.log("the panic bullshit is: " + data.panic)

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: data.lat,
            lng: data.lng
        },
        zoom: 20
    });


if(arr.length == 5)
{
  arr.pop;
  arr.unshift(data);
}
else {
  arr.push(data);
}

//if array is 5, remove last item and push in new one
    // array.push

    arr.forEach(function(element) {
        console.log(element);
    if(element.panic == 1)
    {
      var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          position: {
            lat: element.lat,
            lng: element.lng
          },
          map: map
      });
    }
    else
    {
      var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          position: {
            lat: element.lat,
            lng: element.lng
          },
          map: map
      });
    }
    });
    // output.innerHTML += '<p><strong>' + data.latitude + ', </strong>' + data.longitude + "</p";
});
