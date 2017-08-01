var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dc2baa689ce7cf4685e3bf772f3373a6&units=imperial';

//dc2baa689ce7cf4685e3bf772f3373a6
//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1
module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location); // --> this encodes this in the proper url
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(
			function (res) {
				if(res.data.cod && res.data.message){ //-> to catch all errors
					throw new Error(res.data.message);
				}else{
					return res.data.main.temp;
				}
			},
			function(err){
				// throw new Error('Unable to fetch weather for that location');  -> this works a static message
				throw new Error(err.response.data.message);
			});
		}
}