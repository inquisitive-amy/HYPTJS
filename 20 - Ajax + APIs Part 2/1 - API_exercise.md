# API Exercise

Today we're going to build a small JavaScript app that uses the Rijksmuseum API to search for artwork. Download the starter files in **art-app-start** and open up `app.js` in Sublime Text and `index.html` in Chrome.

# Phase 1: Art with Monkeys

To get started, let's build some functionality to retrieve artwork with monkeys in it. 

## Setup your app structure

The first step is to create an object for our app:

```
var artApp = {};
```

Every app needs an `init` function that will get things started, so let's create one. We'll fill in the code to run on init later.

````
artApp.init = function(){
  //code to kick off app goes here
};
````

Since the `init` function is everything that needs to run on page load, let's call it inside a jQuery doc ready.

```
$(function(){
  artApp.init();
});
```

Test that you have no syntax errors in your code.

## Test the requests

The first thing we'll want to get working is making the API request and ensuring we're getting the expected data back.

1. Make a jQuery ajax request to get museum pieces
2. Print the response data to the console

The API calls will require an API key. Instead of repeating this every request, let's create a property to hold the key. 

````
artApp.key = "#####";
````

Let's also create a new app method that will make the AJAX request to get art pieces. It'll be called inside our `init` function.

```
artApp.init = function(){
  artApp.getPieces();
};
```

```
artApp.getPieces = function(){
  //AJAX request for art pieces goes here
};
```

Inside of the `getPieces` function we'll make our AJAX request and log the results.

```
artApp.getPieces = function(){
  $.ajax({
    url: 'https://www.rijksmuseum.nl/api/en/collection',
    type: 'GET',
    data: {
      key: artApp.apikey,
      format: 'jsonp'
    },
    dataType: 'jsonp',
    success: function(result){
      console.log(result);
    }
  });
}
```

Note that we're using `artApp.apikey` for the `key` parameter, and `jsonp` for both `format` and `dataType`.  We then log the result to see what the data looks like.

Check to see you get back a result object in the console. Note that the actual art data is contained inside the `artObjects` property.

Refine your log message to only show the `artObjects` data and verify the output.

```
console.log(result.artObjects);
```

## Make our request find only images with monkeys

Now that we've got the basic API call working, let's refine our request a bit.

The Rijksmusuem API allows us to submit a search query along with our request. To search for art pieces with monkeys, add the `q` parameter with a value of `monkey` to the data object in the request.

```
data: {
  key: artApp.apikey,
  format: 'jsonp',
  q: 'monkey'
},
```

Check your console to verify that you're getting a different set of results.

## Output the results on the page

We're getting data, great! Now let's try and get it to show up on the page.

Create a new `displayPieces` method that will handle parsing the result object and displaying it on the page. It takes a single parameter, a data object.

```
artApp.displayPieces = function(data){
    //put art stuff on the page
};
```

We'll want the `displayPieces` method to run *after* the API call has succeeded. Update the success callback in `getPieces` to call `displayPieces`, instead of logging the results. Make sure you pass the results data as an argument.

```
success: function(result){
    //console.log(result.artObjects);
    artApp.displayPieces(result.artObjects);
}
```

Let's now fill in the details of `displayPieces`. We want to work through all the results data, one piece at a time.  We can do that with jQuery's `$.each()` method. It's like a for loop but specially meant for looping over a collection of things - in our case, the art data.  

```
artApp.displayPieces = function(data){
  $.each(data, function(i, piece){
    console.log(piece);
  });
};
```

Check to see that your `$.each()` method is working correctly by logging out a single art piece's data.

### Building the HTML

We want our HTML output to look like this:

```
<div class="piece">
  <h2>Title of Art Piece</h2>
  <p class="artist">Artist Name</p>
  <img src="url-to-image" alt="">
</div>
```

Let's take a look at a single piece's data in the console to see how we can get the info we need: 

![](https://i.cloudup.com/92tuZgBhos.png)

* title can be found in `piece.title`
* artist name is found in `piece.principaolOrFirstMaker`
* img url is found in `piece.webImage.url`


Inside the `$.each`, function we'll generate that HTML with the following code.

```
var title = $('<h2>').text(piece.title);
var artist = $('<p>').addClass('artist').text(piece.principalOrFirstMaker);
var image = $('<img>').attr('src', piece.webImage.url;
var artPiece = $('<div>').addClass('piece').append(image, title, artist);
```

Note that by passing an element tag like `<h2>` into `$()`, we can create a new DOM node. We do that for the heading, paragraph, image and container div, then use `append` to insert the heading, paragraph and image into the container.  We can also use the usual jQuery methods like `addClass` and `text` to customize the nodes.

Finally, we append the completed `artPiece` divs into the DOM.

```
$('#artwork').append(artPiece);
```

Your completed `displayPieces` function should look like this:

```
artApp.displayPieces = function(data){
  $.each(data, function(i, piece){
    console.log(piece);
    var title = $('<h2>').text(piece.title);
    var artist = $('<p>').addClass('artist').text(piece.principalOrFirstMaker);
    var image = $('<img>').attr('src', piece.webImage.url);
    var artPiece = $('<div>').addClass('piece').append(image, title, artist);
    $('#artwork').append(artPiece);
  });
};
```

Test your code to see if your artwork shows up on the page! 

The completed phase 1 code is [here](exercises/art-app-phase1-answer.zip) if you need a clean slate before moving on to phase 2.

# Phase 2: Art with [choose your animal!]

Let's make this app more useful and allow user input to change the API results! It will look like [this](exercises/art-app-answer/index.html) when we're done.

## Add a UI control for the user
To get started, let's give the user a way to pick an animal. Add this select element markup to your HTML file on line 12:

```
<label for="animal">Choose your animal:</label>
<select name="animal" id="animal">
    <option value="monkey">Monkeys</option>
    <option value="eagle">Eagles</option>
    <option value="dragon">Dragons</option>
    <option value="elephant">Elephants</option>
    <option value="centaur">Centaur</option>
</select>
```

## Make our request more versatile

We also need a way to change the search query in our request. Let's update our `getPieces` method to accept a single parameter, a search query. Add the parameter `query` to the function definition, and change the request to use `query` instead of `monkey`.

```
artApp.getPieces = function(query){
    $.ajax({
        /* ... ajax options... */
        data: {
          key: artApp.apikey,
          format: 'jsonp',
          q: query
        },
        /* ...more ajax options... */
    )};
};
```

We'll also have to update anywhere this function is being called, so in our `init` function, `artApp.getPieces()` becomes:

```
artApp.getPieces('monkey');
```

Verify that your app still shows artwork with monkeys in it.

## Hook up the user input to the query

We need to take whatever animal the user picks and use the selection to make a new query. 

Select elements will fire a `change` event when a new selection is made. The `init` function is a good place to put event handlers, so let's add one there:

```
$("#animal-select").on("change", function(){
    console.log("new animal selected");
});
```

Test that your change handler is working. If it is, remove or comment out that log message.

Next, let's find which animal the user selected with jQuery's `.val()` method.

```
var animal = $(this).val();
console.log(animal);
```

Test that your code logs the selected animal. If it does, remove or comment out that log message.

Finally, let's make a new request to the API based on the new animal choice. Remember, our `getPieces` method is what makes the request, so we need to call that with the new animal choice as an argument.

```
var animal = $(this).val();
artApp.getPieces(animal);
```

We expect our app to:
1. load the page with art with monkeys
2. make a new request to the API when the user selects an animal
3. display the new results

Let's see if that worked.

### Where are my new animals??

It looks like our code isn't doing what we expected but there are no errors.  Let's check the network tab to see if our new request is being made.

It is! So what's happening? If you scroll down the page, you'll find that the new animals are in fact there, but they're after the old ones.  We can fix this bug by clearing out the `#artwork` div before adding new art pieces.

Right before we run `displayPieces`, let's clear `#artwork` with jQuery's `.empty()`

```
$('#artwork').empty():
artApp.displayPieces(result);
```

Check to see if your new animals show up where you expect them to.

## Enhance the UI by updating the title

Now that we've got new animals loading in, "Art with Monkeys" is no longer an appropriate title. Let's use jQuery to update that too.

Let's create a new method that updates the title. We should be able to pass in a new subject that will replace "Monkeys".

```
artApp.updateTitle = function(subject){
    //change title to include 'subject' here
};
```

We need an HTML hook to target the word "Monkeys" specifically, so let's wrap in in a span.

```
<h1 id="page-title">Art with <span>Monkeys</span></h1> 
```

Fill in the details of our `updateTitle` method so that it finds the span and replaces "Monkeys" with the new animal name.

```
artApp.updateTitle = function(subject){
  $("#page-title").find("span").text(subject);
};
```

Finally, let's call `updateTitle` after the new animal has been selected, passing it the selected animal.

```
$('#animal-select').on("change", function(){
  var animal = $(this).val();
  artApp.updateTitle(animal);
  artApp.getPieces(animal);
});
```

Check to see that your title has changed. It has! But there's a little problem. We're getting the uncapitalized input value `eagle`, not the friendly label, `Eagles`.

We can get the friendly label by using the `:selected` pseudo selector to search for the selected option in the drop-down.

```
var animalName = $(this).find(':selected').text();
artApp.updateTitle(animalName);
```

Test your code one last time to make sure the title gets updated properly.

And that's it! We made an app that searches for artwork with animals in it! The completed code for the app is available.

## More possibilities

Some other ideas to think about to enhance our app:

* modify the img url to generate thumbnail sized images (see <http://rijksmuseum.github.io/demos/>)
* use the pagination parameters and a 'Load More' button to allow the user to display additional results
* make another request to the Collection Details endpoint to display more information like colour palattes
* use the Tiles endpoint to create a [sliding puzzle game](http://upload.wikimedia.org/wikipedia/commons/a/a5/Batgirl.gif)
