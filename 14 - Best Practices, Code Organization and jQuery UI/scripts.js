//Create a namespace
var app = {};


app.open = function(html){
 // 1. set content div to whatever they pass in as the parameter 
  $('.content').html(html);

 // 2. add the class of open to the overlay dive
  $('.overlay').addClass('open');
}

app.close = function(){
  $('.overlay').removeClass('open');
}

app.toggle = function(){
	var $overlay = $('.overlay');
	if($overlay.is(':visible')){
		app.close();

	}else{
		app.open();
	}
}

//the init function runs when we want to app to start
//most of the time its on page load
app.init = function(){
	var photo = $('.photo');
	var close = $('.close');

	photo.on('click', function(){
		var details = $(this).html();
		app.open(details);
	});

	close.on('click', function(){
		app.close();
	});


	// When escape is hit
	$(window).on('keyup', function(e){
		if(e.keyCode === 27){
			app.close();
		}
	});

	$('.overlay').on('click', function(e){
		// click outside of the green overlay
		if(e.target === this){
			app.close();
		}
	});
}

//Run the function on document ready
$(function(){
	app.init();
});