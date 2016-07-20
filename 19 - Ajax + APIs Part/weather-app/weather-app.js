//create weatherWidget object to namespace the code
var weatherWidget = {
};

weatherWidget.weatherData = {};

weatherWidget.parseData = function(responseData){
	console.log(data.current_observation);
	var currently = data.current_observation;
	var iconUrl = currently.icon_url;
	var iconTitle = currently.icon;

	// //messages
	// var icon = $('.icon').attr('src' , iconUrl);
	// var iconName = $('.icon-name').html(iconTitle);

	weatherWidget.weatherData.push(currently);
	console.log(weatherWidget.weatherData);

	weatherWidget.updateDOM();
};

weatherWidget.updateDOM = function(){};

weatherWidget.key = '61f0a55cb00602dc';
weatherWidget.endpoint = `http://api.wunderground.com/api/${weatherWidget.key}/conditions/q/Ontario/Toronto.json`;


weatherWidget.init = function(){
	$.ajax({
		url: weatherWidget.endpoint,
		type: 'GET',
		dataType: 'jsonp',
		// success callback function that passes data
		success: weatherWidget.parseData
	});
};

$(document).ready(function(){
  weatherWidget.init();
});