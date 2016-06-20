# jQuery events
 
### Events

With jQuery we can do anything we want in response to an **event**.  In the browser events usually consist of mouse clicks, mouse hovers, scrolling, window resizes, keyboard presses, etc. The process looks like this:

1. **Event Binding**: attach an event **listener** to a jQuery object with the `on()` method.
2. **Specify the event**: the first argument to the `on()` method is a string (e.g. `"click"`).
3. **Provide Callback Function**: the second argument is an anonymous function with some code that will run once the event happens.

The generic code looks like this:

```
$(selector).on(event, function(){
	// run this code when event happens
});
```

You can break these three steps down into:

1. Get something (Like an element)
2. Listen for something (Like a click)
3. Do something (like hide or show it)


Open **jquery-events.html** in Sublime Text. jQuery has already been loaded for you. We will be writing JavaScript inside of this HTML file so we will run into an issue that we didn't see when working in the console. While in the console all of the code that we wrote was executed after the page was fully loaded. The JavaScript that we will be writing will be loading within the HTML document so there is a chance that it will execute before the page is fully loaded.

If we try to find an element using jQuery before it's loaded, we will get an error. To prevent this from happening we use a jQuery method that will let us know when the document is ready to be manipulated.

As a general rule of thumb right now, you should be putting all of your JavaScript code inside of a **document ready**. This essentialyl waits a split second for the page to finish loading 100% before the trigger-happy JavaSript fires.

Inside the `<script></script>` tags add the following:

```
$(document).ready(function(){
	// your code here
});
```

As with everything in coding, there are two ways to do it. This way is a little shorter:

	$(function() {
		// document ready	
	});

So what we are doing is wrapping all of our code inside of an anonymous function. This function will be called once the document is ready.

There are four boxes on the page. We want to hide the boxes when they are clicked. Let's start with the skeleton code for an event.

```
$(document).ready(function(){
	$(selector).on(event, function(){
		// run this code when event happens
	});
});
```

First step is to **get something**. All of the boxes have the class "box" so we can use that to select them; `$(".box")` should do the trick. 

```
$(document).ready(function(){
	$(".box").on(event, function(){
		// run this code when event happens
	});
});
```

Then we need to **listen for something**. The even we're looking for is a click:

```
$(document).ready(function(){
	$(".box").on("click", function(){
		// run this code when event happens
	});
});
```

Finally, we need to **do something** when that click happens. jQuery has the method `hide()` that will come in handy. Let's select the box again and hide it.

```
$(document).ready(function(){
	$(".box").on("click", function(){
		$(".box").hide();
	});
});
```

All of the boxes disappeared! This is because `$(".box")` selects all of the boxes. Ok, how do we select on the box that was clicked? jQuery provides us with the variable `this` inside of the anonymous function which refers to the element that triggered the event. How convenient!

```
$(document).ready(function(){
	$(".box").on("click", function(){
		this.hide();
	});
});
```

Unfortunately `this` isn't a jQuery object, it's a DOM element. This means that we can't call jQuery methods (like hide) on it. We need to convert it into a jQuery object by wrapping it with `$()` `$(this)`.

Note: Notice howe we didn't put `this` in quotes? This is an already defined variable, so we put it in the jQuery selector bare. We only need quotes for when we are doing selectors such as `$('p.warning')` and `$('.box')`.

```
$(document).ready(function(){
	$(".box").on("click", function(){
		$(this).hide();
	});
});
```


# Reading jQuery API documentation

jQuery objects have tons of methods, but lucky for us, they're extremely well documented and always available at [api.jquery.com](http://api.jquery.com).

Get used to having to look things up, even seasoned developers do it!


## If you're not sure what method to use

Take a look at the side panel on <http://api.jquery.com>. This is a really great categorization of all the various methods.  See if what you want fits into one of these categories.


**Example**

How do we find DOM elements with jQuery?

Things like `Ajax`, `CSS`, and `Deprecated` don't look like they fit the bill, but if you keep going you'll see `Selectors`.  That sounds promising, so let's look at a sub-category like "Basic". You'll see some familiar methods like the Class Selector. From here you can explore an individual method to see if it does what you want. For example, the docs for Class Selector says it "Selects all elements with the given class." 

If it doesn't seem appropriate, head back up the categories list and try again!

You can also try searching if you have a vague idea of what you want. For example, a search for `class` returns results for Class Selector, the .addClass() method etc.

If you're really really stuck on which method to use, you can also google "how to do x with jQuery" and will probably find an answer that points you to the right method.

## To find out how to use a method

When you think you know what method you want, take a look at it's docs page to find out how to use it.

Let's look at the docs for the `.html()` method <https://api.jquery.com/html/> to see how we can change the text inside an h1 tag.

1. Check to make sure the **Description** matches what you're trying to accomplish. Note that some methods are **getters and setters** This means they can do two different things. You may have to scroll down to see the right one. In our example, we want to change the text, so move down to the section that says "**Set** the HTML contents..." 

	![](https://i.cloudup.com/VWmTxZ1eOT-1200x1200.png)

2. Look at the **syntax** description to see what arugments (if any) your method takes.
In this case, it takes 1 argument, `htmlString`.

	![](https://i.cloudup.com/HfrGuwa5ME-3000x3000.png)

A lot of methods can take different types or amounts of arguments, so pick the one that's best stuited to what you need.

3. When in doubt, scroll down to find an **example** of this method in practice!

### Exercises

There are three exercises in today's folder that touch upon events and various jQuery methods.
