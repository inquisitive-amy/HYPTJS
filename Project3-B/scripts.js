var app = {};

//1. Get the time of day
app.date = new Date();
app.hour = app.date.getHours();

// 2. Use time to choose a Course
app.getCourse = function(time){  
   var meal;
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
    return meal;
}


// 3. Make an ajax request to the yummly api
app.getRecipes = function(query) {
  return $.ajax({
    url: 'http://api.yummly.com/v1/api/recipes?_app_id=e02d3319&_app_key=379039ee0338958ed3ed2be6a5a82f0a',
    dataType: 'jsonp',
    data: {
    'allowedCourse[]' : 'course^course-'+query
    }
  });    
} 

///4. Store the retun from yummly in a promise and pass it 
// a course
    var course = app.getCourse(app.hour);

app.getYumlyData = function(passCourse){

  $('.food-list').empty();
  var prom2 = app.getRecipes(passCourse);

  $.when(prom2).done(function(yummlyData){
    recipes = yummlyData.matches;

    var recipeList = [];

    recipes.forEach(function(eachRecipe){
      var cookTime = eachRecipe.totalTimeInSeconds/60
      var recipeName = eachRecipe.sourceDisplayName;
      var whichCourse = eachRecipe.attributes.course;

      var item = `<li class="grid-item"><div><p>${recipeName}</p><p>${cookTime} min.</p><p>${whichCourse}</p></div></li>`

      recipeList = recipeList + item;
    }); // foreach loop

    $('.food-list').append(recipeList);  

    //Call masonry on newly created items
    $('.food-list').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      masonry: {
        columnWidth: 100
      }
    }); // isotope

  });/// END of .WHEN()

};

app.updateTimeMsg = function(newCourse){
  $('.meal-time span').html(newCourse);
}

app.filterByTime = function(filter){
  $('.food-list').isotope({ 
    filter: '.metal'
   });
}


// Init Function to call in document ready
app.init = function(){

  app.getYumlyData(course);

  app.updateTimeMsg(course);

  $('.buttons button').on('click', function(e){
      e.preventDefault();
      buttonVal = $(this).data('course');
      app.getYumlyData(buttonVal);
      app.updateTimeMsg(buttonVal);     
  });

};

//Document Ready function
$(function(){
  app.init();
});