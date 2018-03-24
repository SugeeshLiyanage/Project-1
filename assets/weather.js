
 var options = {
  enableHighAccuracy: true,
 // timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  // This is our API key
    var APIKey = "e4551c11b7beb6905c032abefa8fca4c";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat="+crd.latitude+"&lon="+crd.longitude+"&units=imperial&APPID=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

         //Transfer content to HTML
        $(".city").html("<h5>" + response.name + " Weather Details</h5>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);

}

navigator.geolocation.getCurrentPosition(success, error, options);

