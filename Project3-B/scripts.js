var app = {};

// Get the time of day
app.date = new Date();
app.hour = app.date.getHours();
app.grid = $('.food-list');


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

/// Store the retun from yummly in a promise and pass it a course
app.course = app.getCourse(app.hour);

// Sort recipies with isotope by cooking time
app.sortIsotope = function(sorting){
  console.log('sortIsotope');
  app.grid.isotope({
      getSortData: {
        number: '.number parseInt'
      },
      sortBy : 'number',
      sortAscending : sorting
  });
}

//  Append new items on page load and after new seraches
app.appendListItems = function(listItems){

  //add thew new itesms
  app.grid.append(listItems);

  // initialize isotope after new items were added
  app.grid.isotope({
    itemSelector: '.grid-item',
    masonry: {
      columnWidth: 80
    },
    getSortData: {
      number: '.number parseInt'
    },
    sortBy : 'number',
    sortAscending : true    
  });

}

// Search through input field
app.newSearch = function(listItems){
  app.clearResults();
  app.grid.isotope('insert', $(listItems));
  app.grid.isotope();
}


//Remove all items from the results list
app.clearResults = function(){
  var elements = app.grid.find('li');
  app.grid.isotope('remove', elements);
}


// Save the yummly api call in a function
// Make an ajax request to the yummly api and pass the course to it
app.yummlyUrl = 'http://api.yummly.com/v1/api/recipes?_app_id=e02d3319&_app_key=379039ee0338958ed3ed2be6a5a82f0a'


// Ajax request for recipes by course
app.getRecipes = function(query) {
  return $.ajax({
    url: app.yummlyUrl,
    dataType: 'jsonp',
    data: {
    'allowedCourse[]' : 'course^course-'+query,
    'maxResult': 50,
    'start' : 10
    }
  });    
} 

//Ajax request for recipes by ingredients
app.searchRecipes = function(query){
  return $.ajax({
    url: app.yummlyUrl,
    dataType: 'jsonp',
    data: {
      'allowedIngredient[]': query
    }
  });    
}

// Get YummlyData
app.getYumlyData = function(options , searchType){

  // Determine which request to use
  if(searchType === 'standard' ){
    var promiseRecipe = app.getRecipes(options);
  }else if (searchType === 'searchQuery'){
    var promiseRecipe = app.searchRecipes(options);
  } 

  $.when(promiseRecipe).done(function(yummlyData){
    recipes = yummlyData.matches;

    // Check if there are any matched reults or not
    if(recipes.length === 0 ){
     $('.food-container').append('<p class="no-results">No reciepies matched your resuts, please try again</p>');
    }else{
      $('.food-container .no-results').remove();
    }

    // Create a list of the matching results
    var recipeList = [];

    recipes.forEach(function(eachRecipe){
      var cookTime = eachRecipe.totalTimeInSeconds/60;
      var recipeName = eachRecipe.recipeName;
      var whichCourse = eachRecipe.attributes.course;
      var ingredients = eachRecipe.ingredients;
      var imageURL = eachRecipe.smallImageUrls;

      var ingredientList = ingredients.toString().split(',').join(', ');

      var ingredientCount = ingredients.length;

      var item = `<li class="grid-item"><div><span class="wishlist fa fa-heart-o"></span><span class="tooltip">Add to Favourites</span><span class="item-img"style="background-image:url(${imageURL})"></span><p class="name">${recipeName}</p><p class="number"><i class="fa fa-clock-o"></i>${cookTime}</p><p>${whichCourse}</p><div class="modal"><h3 class="ingredient-link">Ingredients <i class="fa fa-plus"></i></h3><p class="title"><span class="counter">${ingredientCount}</span> ingredients</p><p class="ingredients">${ingredientList}</p><i class="fa fa-times"></i><a class="shop" href="#">Add to Shopping List</a></div></div></li>`;

      recipeList = recipeList + item;
    }); // end foreach loop
  
    //append the new results to the page
    if($('.food-list li').length > 0){      
      app.newSearch(recipeList)
    }else{
      app.appendListItems(recipeList);
    }
    
  });/// end of .when()

}// end app.getYumlyData()


// Add recipe name to wishlsit
app.addToWishlist = function(item){
  if((item).hasClass('fa-heart-o')){
      item.removeClass('fa-heart-o').addClass('fa-heart');
  }
  else{
      item.removeClass('fa-heart').addClass('fa-heart-o');
  }
  var selectedRecipe = item.closest('.grid-item').find('p.name');

  $('.wishlist-container').append(selectedRecipe.clone()).addClass('active');
}

//Toggle Wishlist
app.wishlistToggle = function(){
  $('.wishlist-container').toggleClass('active');
}


// Update quantity of items in the list
app.updateCart = function(){
  // get number of items in shopping list
  var cartQty = $('.shopping-list li').length;

  $('.cart .qty').html(cartQty);

  if(cartQty == 0){
    $('.shopping-container .empty').html('<p>Your cart is empty</p>');
  }else if(cartQty > 0){
    $('.shopping-container .empty').html('');
  }
}

// Toggle List
app.toggleCart = function(){
  if($('.shopping-container').hasClass('active')){
    $('.shopping-container').removeClass('active');
    $('.fa-shopping-basket').removeClass('active');
  }else{
    $('.shopping-container').addClass('active');
    $('.fa-shopping-basket').addClass('active');
    setTimeout(function(){
      $('.shopping-container').removeClass('active');
      $('.fa-shopping-basket').removeClass('active');
    }, 5000);
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
  app.toggleCart();
  
  // Toggle modal closed after items are added
  app.toggleModal();
}

app.removeShoppingItem = function(item){
  item.closest('li').remove();
  app.updateCart();
}


// Init Function to call in document ready
app.init = function(){

  app.updateCart();

  app.getYumlyData(app.course , 'standard');

  app.updateTimeMsg(app.course);

  // Start Click events

  $('.meal-buttons button').on('click', function(e){
      e.preventDefault();
      buttonVal = $(this).data('course');
      app.getYumlyData(buttonVal ,'standard');
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

  // Toggle Shopping Cart
  $('#mini-cart').on('click', function(){
    app.toggleCart();
  });

  // Sort recipies by time
  $('.time-button button').on('click', function(e){
    e.preventDefault();
    var sortBool = $(this).data('time');

    //Use isotope sort
    app.sortIsotope(sortBool);

    if(!$(this).hasClass('active')){
      $(this).toggleClass('active');
      $(this).siblings('.button').toggleClass('active');
    }

  });

  // Submit Search Query to Yummly
  $('#submit_search').on('click', function(e){
      e.preventDefault();
      searchValue = $('#search').val();
      if(searchValue){
        app.getYumlyData(searchValue , 'searchQuery');        
      }else{
        alert('Please add an ingredient to search');
      }
  });
   
   $(document).on('click', '.wishlist' , function(){
    app.addToWishlist($(this));
  });

   $('#wishlist_toggle').on('click', function(){
      app.wishlistToggle();
   });

   $('#clear_list').on('click', function(e){
      e.preventDefault();
      app.clearResults();
   });

};

//Document Ready function
$(function(){
  app.init();
});