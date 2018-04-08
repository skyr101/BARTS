var routeIds = [
  11864375,
  11864902,
  11864414,
  11864511,
  12088156,
  11864554,
  11864614,
  11864723,
  12027719,
  11864777,
  11865088,
  11865133,
  11865155,
  11865200,
  11865239,
  11865304,
  11865340,
  11865388,
  11865441,
  11865499,
  11866681,
  11867809,
  11867838,
  11867858,
  11867880,
  11867897,
  11868185,
  11868126,
];

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

// for (i = 0; i < routeIds.length; i++) {
//   id = routeIds[i];
//   var url = "https://www.strava.com/api/v3/routes/"+id+"?access_token=fc18de2e40842d7088e7e670ee011a6c438c8272";
//   request.addEventListener("load", reqListener);
//   request.open("GET", url);
//   request.send();
//
// }

var url = "https://www.strava.com/api/v3/routes/11867880?access_token=fc18de2e40842d7088e7e670ee011a6c438c8272";
request.addEventListener("load", reqListener);
request.open("GET", url);
request.send();

function reqListener() {
  var obj = JSON.parse(this.responseText);
  console.log(obj.name);
  console.log(obj.distance);
  console.log(obj.map.polyline);
  console.log(obj.elevation_gain);
  //console.log(this.responseText);
  console.log();
}
