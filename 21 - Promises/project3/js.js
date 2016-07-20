var app = {};

app.key = '9a9ac266c168b8aece1a03bd314c2d6f';

app.secret = '02541b12b87787c7';

app.createURL = function(photo) {
	return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
}

app.search = function(q){
  return $.ajax({
		url: 'https://api.flickr.com/services/rest/',
		jsonp: 'jsoncallback',
		dataType: 'jsonp',
		data: {
			method : 'flickr.photos.search',
			api_key : '9a9ac266c168b8aece1a03bd314c2d6f',
			text : q,
			format : 'json',
		}
	});
};


app.search('dogs').then(function(data) {
	var urls = data.photos.photo.map(app.createURL);
	console.log(urls);
	var img = `<img src="${urls}" />`;
});

// $.when(app.promise1).done(function(flickr){
// 	console.log(flickr);
// }).fail(function(err) {
// 	console.error(err);
// })