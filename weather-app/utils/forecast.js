const request = require('request');



const forecast = (latitude, longitude, callback) => {
	const url = 'https://api.darksky.net/forecast/83937c2d9d84621e5926a97671be4a41/' + latitude + ',' + longitude + '?units=si';

	request({url: url, json: true}, (error, response) => {
		if (error) {
			callback('\'Unable to connect to weather service!', undefined);
		} else if (response.body.error) {
			callback('Unable to find location', undefined);
		} else {
			const currentWeather = response.body.currently;

			callback(undefined, response.body.daily.data[0].summary +' It is currently ' + currentWeather.temperature + ' degrees out. There is a ' +
				currentWeather.precipProbability + '% chance of rain.');
		}

	})
};

module.exports = forecast;