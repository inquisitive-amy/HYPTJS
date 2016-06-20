# A to-do app with JS and jQuery.

Today we will work together to code a to-do app in JavaScript and jQuery, following the steps below.

Open up >**to-do-app.html** in Sublime Text and Google Chrome. We've loaded in jQuerty and bootstrap for some basic styles. We've also gone ahead and added the skeleton markup required for the app.

Here's what we want our app to do:

* Users type in the input field and press enter.
* As soon as they press enter we'll take their input and add it as a list item to the unordered list under the input field.
* When a user clicks on a list item, the "checkbox" should get filled and the text should turn grey to indicate that the item has been completed.

### Document ready

Let's start by including the "document ready" script so that we are sure our app will work as expected.

```
$(document).ready(function(){
	// code goes here
});
```

**Or** use the shorthand version:

$(function(){
	//code goes here
});

### Event binding

The first thing we need to do is add an event listener to the form. We want to listen to the `submit` event and then run our code when the form is submitted (i.e. someone pressed enter).

```
$(function(){
	$('form').on('submit', function() {
		// do something
	});
});
```

For testing purposes let's print something to the console.

```
$(function(){
	$('form').on('submit', function() {
		console.log("form is submitted!")
	});
});
```

At first this doesn't seem to work and it's hard to debug the issue because we don't see any errors. The problem is that the page is being refreshed when the form submits. So if you look very closely you'll notice that the console shows our printed string for a split second before it is refreshed.

### Prevent defaults

The default behaviour of a form is a browser refresh so we need to somehow prevent this default behaviour. The callback function to the event listener can optionally give us access to the event that triggered the function. We just need to pass a parameter into the function like so:

```
$(function(){
	$('form').on('submit', function(event) {
		// we can now do stuff to the event!
		console.log("form is submitted!")
	});
});
```

Notice that the only difference is the `event` variable. We can call this anything we want. It's just a variable/parameter that holds the event. By convention `e` is used. The event has a method called `preventDefault()` which can stop the default behaviour of the `submit` event.

```
$(function(){
	$('form').on('submit', function(e) {
		e.preventDefault();
		console.log("form is submitted!")
	});
});
```

We should now see `form is submitted!` in the console. This means that we've prevented the form from refreshing the page. 

### Input value

Instead of printing `form is submitted!` lets print the value that the user put in the input field. The jQuery documentation has an `attributes` category which will help here. In there you should find `val()`. This method will allow us to get the values of form elements.

```
$(function(){
	$('form').on('submit', function(e) {
		e.preventDefault();
		
		var toDoItem = $('input').val();
		console.log(toDoItem);
	});
});
```

This works but there is a usability issue. After submitting the form users need to empty the input field manually before adding a second item. Let's empty the input field by setting its value to an empty string.

```
$(function(){
	$('form').on('submit', function(e) {
		e.preventDefault();
		
		var toDoItem = $('input').val();
		console.log(toDoItem);
		$('input').val('');
	});
});
```

We should only do something if the input value is not empty otherwise we would be adding empty items to our list.

```
$(function(){
	$('form').on('submit', function(e) {
		e.preventDefault();
		var toDoItem = $('input').val();
		
		if (toDoItem !== '') {
			console.log(toDoItem);
			$('input').val('');
		}
	});
});
```

### Adding HTML elements

Lets construct an HTML string using concatenation that will in the end look like this: `<li> toDoItem </li>`.

```
$(function(){
	$('form').on('submit', function(e) {
		e.preventDefault();
		var toDoItem = $('input').val();
		
		if (toDoItem !== '') {			
			console.log("<li>" + toDoItem + "</li>");
			$('input').val('');
		}
	});
});
```

Instead of printing it to the console lets put these list items inside of our unordered list. In the jQuery API look for "Manipulation". The sub-categories are self-explanatory. It should be clear that we're looking for "DOM Insertion, Inside" (because we want to put an element inside of `ul`).

We want to add list items to the end of `ul` so `append()` will do. If we wanted the latest item to be added to the top then we would use `prepend()`. Let's find the `ul` element and append the list item inside of it.

```
$(function(){
	$('form').on('submit', function(e) {
		e.preventDefault();
		
		if ($('input').val() !== '') {
			var toDoItem = $('input').val();
			$('ul').append("<li>" + toDoItem + "</li>");
			$('input').val('');
		}
	});
});
```

Since we have bootstrap we can add glyphicons indicating that the item is incomplete. `<span class='glyphicon glyphicon-unchecked'></span>` will do the trick.

```
$(function(){
	$('form').on('submit', function(e) {
		e.preventDefault();
		
		if ($('input').val() !== '') {
			var toDoItem = $('input').val();
			$('ul').append("<li> <span class='glyphicon glyphicon-unchecked'></span>" + toDoItem + "</li>");
			$('input').val('');
		}
	});
});
```

### Item completion part 1

A to-do app is no good if we can't check off items. We need a way change the glyphicon style from `glyphicon-unchecked` to `glyphicon-check` when an item is clicked. This means we need another event listener except this time we're listening for a `click` event. Add the following under your existing code (**inside of the document ready but after the "form" listener**):

```
$('li').on('click', function(){
	// do something here
});
```

Let's print a string to the console again when an item is clicked. *Building code incrementally in small chunks and using the console a lot will ensure that we catch errors and bugs before our code gets too big.*

```
$('li').on('click', function(){
	console.log("an item was clicked!");
});
```

Nothing is happening. We're clicking on `li` items so why isn't the callback function being triggered? The problem is that the `li` items were added after the DOM was fully loaded. These are dynamic elements, we have no idea when they were added. Event listeners are attached when the DOM fully loads so we can't attach events directly to dynamic elements.

### Event delegation

Events **propagate** or **bubble** up the DOM when they are triggered. So clicking on an element will trigger the event listeners that are directly attached to it and then the event will tell the parent element about the event, and so on until the event reaches the top object (the document). 

So what we can do is attach our listener on a "higher" level element that gets loaded with the DOM. `ul` is a good candidate because it wraps up the `li` elements and it is loaded at the start. When someone clicks an `li` element, the event goes up to the `ul` and "notifies it of what happened". The event will then go up to the container div and so on until it reaches the top most level.

We can delegate an event by using the following syntax:

```
$(**parentElement**).on(event, **childElement**, function(){
	// do something
});
```

Notice that the only difference is that an additional argument is passed to the `on()` method. So binding an event listener on `ul` which triggers when `li` elements are clicked looks like this:

```
$('ul').on('click', 'li', function(){
	console.log("an item was clicked!");
});
```

To print the item that was clicked we use the `this` variable.

```
$('ul').on('click', 'li', function(){
	console.log(this);
});
```

### Item completion part 2

Instead of printing to the console we want to:

1. Find the glyphicon inside of the item. To do that we will need to "traverse" the DOM. The jQuery documentation is helpful by telling us that `find()` is used to find "descendants of each element in the current set of matched elements".

```
$('ul').on('click', 'li', function(){
	var checkBox = $(this).find('.glyphicon');
});
```

2. Change the class from `glyphicon-unchecked` to `glyphicon-check`. In the jQuery documentation under `manipulation` we see `Class Attribute`. This sub-category shows us several useful methods including `addClass()`, `removeClass()` and `toggleClass()`.

```
$('ul').on('click', 'li', function(){
	var checkBox = $(this).find('.glyphicon');
	checkBox.removeClass("glyphicon-unchecked");
	checkBox.addClass("glyphicon-check");
});
```

### Item completion toggle

What if people change their mind about a completed item? We want users to be able to toggle the check and uncheck glyph icons. `toggleClass()` seems to be a good place to start; what does the documentation say? 

> Add or remove **one or more** classes from each element in the set of matched elements

Hey that sounds promising, we can toggle multiple classes? That's awesome.

```
$('ul').on('click', 'li', function(){
	var checkBox = $(this).find('.glyphicon');
	checkBox.toggleClass("glyphicon-unchecked glyphicon-check");
});
```

And it works!

### Lots more

Bootstrap has the class `text-muted` which will help with usability. Our completed tasks should be "muted" when compared to uncompleted tasks.

```
$('ul').on('click', 'li', function(){
	var checkBox = $(this).find('.glyphicon');
   checkBox.toggleClass("glyphicon-unchecked glyphicon-check");
   $(this).toggleClass("text-muted");
});
```

Have a look at <a href="exercises/to-do-app/to-do-app-answer.html" class="exercise">**to-do-app-answer.html**</a> for the complete app. 

## Kicking it up a notch. (BAM!)

There is so much more that you can do, here are some suggestions:

- allow the removal of items completely from the list
- drag/drop sort items (have a look at jQuery UI)
- when the page loads focus on the input field (i.e. cursor should load inside input, ready to type)
- reduce lookups with variables
- error if input is empty
- automatically move completed items to the bottom

Have a look at <a href="exercises/to-do-app/to-do-app-extras.html" class="exercise">**to-do-app-extras.html**</a> to see the solution to the above extras. Can you think of something not on the list? Try to personalize your app.



# Debugging code with developer tools

You will hear people say "JavaScript fails silently". This is not entirely true. JavaScript debugging tools have come a long way. Usually if there is an error it will be printed to the console, you just have to look.

`console.log()` isn't the only way to print information to the console. We can also use `console.info()` and `console.error()`.  These methods work very much like `console.log()` except they have additional icons and colours to make the information more meaningful. At the bottom of the console there are tabs for filtering based on what method was used.


### With chrome developer tools we can:

- navigate to where errors are and fix them in real-time to test solutions
- pause execution of the code whenever an error occurs and dig into the code to see what is causing the issue.
- create breakpoints where execution of the code stops so that we can see the state of variables at any point in the code.

Complete level 4 of CodeSchool's free course "Discover Devtools" to learn the above.

## Exercises

Open up **debugging.html** and make sure your console in chrome is open! Errors will be printed there.

1. The function in **bug 3** should log our current location. Why isn't it working?
2. In **bug 2** we  want to print a DOM object to the console. Instead of the object we get an error message; what's wrong?
3. **Bug 3** has a simple JavaScript function. We pass it a name and it returns an object. Unfortunately we get `undefined` when we try to write the function's return value to the page. What is wrong?
4. The boolean logic in **bug4*** doesn't seem to work. We want to print "D'oh!" only if the name is "Homer". We set the name to be "Marge" so why is it still printing "D'oh!"?
5. The output of `calculateSomething()` from **bug 5** is undefined and then 12. You would think that the output would be 56 and then 12. This doesn't make any sense!! What's going on?
6. In **bug 6** we've defined two functions at the bottom and we call them both at the top of the script. The `sayHello` function seems to work just fine but we get an error for `sayGoodbye`. The code seems the same. What's going on here?
7. We have a select element in **bug 7**, where the "small" option has been given value of 1. When the selection changes, we check to see if the selected value matches 1 for small, and alert "Thanks for ordering a small". This should work but it isn't. What's going on?

The squashed bug version is in debugging-answer.html


# Exercises

## Array Loop

**array-loop.html**

Work with our cheese array again to print out onto the page in alphabetical order. When you click a cheese, it should be removed from the list.

## Countdown Clock

**countdown.html**

Create a countdown clock that changes colours depending on the time left.

## jQuery Challenges

If you're up for an extra challenge, try these extra exercises:

1. Merge the functionality of the previous classes `add-remove-toggle-class.html` and  `random-colours.html` into something that applies an random colour everytime you hover a box.
1. Take your countdown.html file and expand it to have an input and a button that will set the number of seconds from a user input.
1. Try and make the animation on the cowbell work by itself instead of using my function. You will have to research the .one() method. I have a video for help - http://wesbos.com/animate-css-and-jquery/
2. Make the drawing one only work when you click and drag. If you move the mouse while you aren't clicking, it shouldn't do anything
3. Make a wack-a-mole game where a mole comes up both in random spaces, and at random times. When you manage to click the mole, give yourself a point. - this could be taken well into the deep end if you are up to it!


