var app = {};


// Get the time of day
app.date = new Date();
app.hour = app.date.getHours();


//  Use time to determine a Course - specifically yummly parameters
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

/// Store the retun from yummly in a promise and pass it 
// a course
var course = app.getCourse(app.hour);

// Save the yummly api call in a function
// Make an ajax request to the yummly api and pass the course to it
app.getRecipes = function(query) {
  return $.ajax({
    url: 'http://api.yummly.com/v1/api/recipes?_app_id=e02d3319&_app_key=379039ee0338958ed3ed2be6a5a82f0a',
    dataType: 'jsonp',
    data: {
    'allowedCourse[]' : 'course^course-'+query,
    'maxResult': 50,
    'start' : 10
    }
  });    
} 


// Get YummlyData
app.getYumlyData = function(passCourse){
 
  var prom2 = app.getRecipes(passCourse);

  $.when(prom2).done(function(yummlyData){
    recipes = yummlyData.matches;

    console.log(recipes);

    var recipeList = [];

    recipes.forEach(function(eachRecipe){
      var cookTime = eachRecipe.totalTimeInSeconds/60;
      var recipeName = eachRecipe.recipeName;
      var whichCourse = eachRecipe.attributes.course;
      var ingredients = eachRecipe.ingredients;
      var imageURL = eachRecipe.smallImageUrls;

      var item = `<li class="grid-item"><div><p class="title">${recipeName}</p><p class="number fa fa-clock-o">${cookTime}</p><p>${whichCourse}</p><div class="modal"><h3 class="ingredient-link">Ingredients <i class="fa fa-plus"></i></h3><img src="${imageURL} "/><p class="ingredients">${ingredients}</p><i class="fa fa-times"></i><a class="shop" href="#">Add to Shopping List</a></div></div></li>`

      recipeList = recipeList + item;
    }); // end foreach loop

    var isoOptions = {
        // layoutMode: 'fitColumns',  
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 50
        },
        getSortData: {
          number: '.number parseInt'
        },
        sortBy : 'number'
    } 
    
    $(".food-list").prepend(recipeList).isotope(isoOptions);

  });/// end of .when()

}; // end app.getYumlyData()


app.updateCart = function(){
  // get number of items in shopping list
  var cartQty = $('.shopping-list li').length;

  $('.cart .qty').html(cartQty);

  if(cartQty == 0){
    $('.shopping-container').append('<p>Your cart is empty</p>');
    console.log('empty cart');
  }

}



// Toggle Ingredients Modal
app.toggleModal = function(link){
  $('body').toggleClass('popup');
  if(!link){
    $('.modal').removeClass('active');
  }
  else{
      link.closest('.modal').toggleClass('active');
  }
}


//  Update Title of the Page
app.updateTimeMsg = function(newCourse){
  $('.meal-time span').html(newCourse);
}


//Add ingredients from modal into the shopping list
app.addToShopList = function(shopLink){
  
  var ingredientsClone = shopLink.siblings('.ingredients').html();

  listArray = ingredientsClone.split(",");

  listHTML = $.map( listArray, function(foodItem) {
    return ('<li>'+foodItem+'<span class="fa fa-close"></span></li>');
  });

  $('.shopping-list').append(listHTML);
  $('.shopping-list').sortable();

  // Update Cart Number
  app.updateCart();
  
  // Toggle modal closed after items are added
  app.toggleModal();
}

app.removeShoppingItem = function(item){
  item.closest('li').remove();
  app.updateCart();
}


// Use isotope to sort and filter
// app.sortByTime = function(){  
//   $('.food-list').addClass('found');
//   $('.food-list').isotope({
//     getSortData: {
//       number: '.number parseInt'
//     },
//     sortBy : 'number'
//   });
// }


// Init Function to call in document ready
app.init = function(){

  app.updateCart();

  app.getYumlyData(course);

  app.updateTimeMsg(course);

  $('.buttons button').on('click', function(e){
      e.preventDefault();
      buttonVal = $(this).data('course');
      app.getYumlyData(buttonVal);
      app.updateTimeMsg(buttonVal);     
  });

  $(document).on('click', '.ingredient-link , .fa-times',function(){
    var link = $(this);
    app.toggleModal(link);
  });

  $(document).on('click', '.shop' , function(e){
    e.preventDefault();
    app.addToShopList($(this));
  });

  $(document).on('click', '.shopping-list .fa-close' ,function(){
    app.removeShoppingItem($(this));
  });

  // $('.time-button button').on('click', function(){
  //   app.sortByTime();
  // })
};

//Document Ready function
$(function(){
  app.init();
});