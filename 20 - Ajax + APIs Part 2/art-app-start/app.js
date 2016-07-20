// 1. Create a namespace for the art app
var artApp = {};


// 2. Get things started on pageload
artApp.init = function(){
	$('select[name="animal"]').on('change', function(){
		var selectedOption = this.value;
		//get all of the art pieces with the query of the animal you selected
		artApp.getPieces(selectedOption);
	});

	$('form').on('submit', function(e){
			e.preventDefault();
			var formInput = ($('input[name="q"]').val());
			artApp.getPieces(formInput);
	});

	$('#range').on();
};


// 3. takes in a parameter to set the search query to make this function dynamic
// ES6 set a default parameter to 'dogs' if nothing is passed
artApp.getPieces = function(query = 'dogs'){
	var data = {
		// key and format are necessary parameters for this API
		// only return 50 results per page and 'Dogs'
		key: artApp.key,
		format: 'jsonp',
		q: query,
		ps: 10,
		imgonly: true
	};

	// if(data.f.normalized32Colors.hex) {
	// 	console.log('got a hex');
	// 	data.f.normalized32Colors.hex = '#bada55';
	// }

	$.ajax ({
		url: artApp.endpoint,
		type: 'GET',
		// Passing parameters to the url should be done in a data object instead of on the enpoint.
		//passing a data attribute in the ajax request will add these parameters to the endpoint as query parameters
		//this is what we are telling the API
		data: data,

		// This is what we tell jQUery what to do with the data that we are getting back... Expect jsonp
		dataType: 'jsonp',

		// success callback function that runs 
		// payload can be anything - it's just a placeholder
		success: function(payload){	
			// console.log(payload);
			artApp.displayPieces(payload.artObjects);
		}
	});
};

// Create a method that takes in an array of art
// this gets called when teh pieces come back from the API
// we need access the the information in the success function so it gets called in the succces function.
artApp.displayPieces = function(pieces){
	// map loops over all the pieces and creats HTML from them.
	// ** returning a modified version of the array
	// you have to return what you want to get back to the function.
	var artHTML = pieces
	// take the pieces array and filter it for only a piece that comes back
	// with a web image url.
	.filter(function(art){
		if(art.webImage && art.webImage.url){
			return true;
		}
	})
	.map(function(piece){
		// console.log(piece);

		var pieceHTML = `
		<div class="piece">
			<h2>${piece.title}</h2>	
			<p class="author">${piece.principalOrFirstMaker}</p>
			<img src="${piece.webImage.url}" alt="${piece.title}"/>
		</div>
		`;
		return pieceHTML;
	});//end .map();

	$('#artwork').empty();
	$('#artwork').append(artHTML)

}; // end artApp.displayPieces)()

artApp.key = 'I6Nt2ggM';
artApp.endpoint = 'https://www.rijksmuseum.nl/api/en/collection';
artApp.artObject = '';


$(function(){
	artApp.init();
	artApp.getPieces();
});