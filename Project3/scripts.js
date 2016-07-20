  // Create app namespace
  var app = {};

  //loadMap function
  // app.loadMap = function(myLat, myLng){

  // };

  // Get the date and time
  var date = new Date();
  var getHour = date.getHours();

  app.getMealType = function(currentDate){
    var time = currentDate.getHours();
    var meal = '';

    if(time >= 0 && time <= 11){
      meal = 'Breakfast and Brunch';  
    }else if (time > 11 && time <= 14){
      meal = 'Lunch';
    }else if(time > 14 && time <= 16){
      meal = 'Snacks';
    }else if(time > 16 && time <=20){
      meal = 'Main Dishes';
    }else if (time > 20){
      meal = 'Desserts';
    }
        $('.meal-time').append(meal);
  }


  // Determine meal type based on time of day
  app.getSeason = function(currentDate){

    var season = '';
    var month = date.getMonth();

    if (month > 0 && month <= 1){
      season = 'winter';
    }else if (month >1 && month <= 4){
      season = 'spring';
    }else if (month > 4 && month <= 7){
      season = 'summer';
    }else if (month > 7 && month <= 9){
      season = 'fall';
    }else if (month> 9 && month <= 11){
      season = 'winter';
    }
    // $('.season').append(season);
  }


  // initialize function that we run on document ready
  app.init = function(){
    console.log('hello');

    // pass the time to determine meal type
    app.getMealType(date);
    app.getSeason(date);


    var yummlyCourse = app.getMealType(date);

  // get our current location on page load
    navigator.geolocation.getCurrentPosition(function(location){
      console.log('current location'+location.coords);
    }, function(err){
      console.error('not found', err);
    });

      // Create a Promises
  var prom1 = $.ajax({
    url: 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json',
    dataType: 'json'
  });

  console.log('yummly course'+yummlyCourse)

  // Pass the course to the get Recipes function.
  // which will return an ajax call for recipes that match
  var prom2 = getRecipes('Main Dishes');

  function getRecipes(query) {
    return $.ajax({
        url: 'http://api.yummly.com/v1/api/recipes?_app_id=e02d3319&_app_key=379039ee0338958ed3ed2be6a5a82f0a',
        dataType: 'jsonp',
        data: {
            'allowedCourse[]' : 'course^course-'+query
        }
      });    
  } 

  $.when(prom1,prom2).then(function(prom1data,prom2data){
    var weatherData = prom1data[0].current_observation;
    var yummlyData = prom2data[0].matches;

    console.log(weatherData, yummlyData);

    var listItems = [];

    yummlyData.forEach(function(singleMatch){

      var cookTime = singleMatch.totalTimeInSeconds/60;

      var course = singleMatch.attributes.course;

      // var holiday = singleMatch.attributes.holiday;

      var foodItem = `<li><ul><li>${singleMatch.recipeName}</li><li>${singleMatch.rating} Stars</li><li>${singleMatch.sourceDisplayName}</li><li>${cookTime} minutes</li><li>${course}</li></ul></li>`;
      listItems = listItems + foodItem;
    });

    $('.food-list').append(listItems);
    $('.weather').append('Feels Like : '+weatherData.feelslike_string + ' in ' + weatherData.display_location.full );

  }, function(){
    console.log(err);
  }); /// end .when()


  };

  $(function(){
    // call init function on page load
    app.init();    
  });

