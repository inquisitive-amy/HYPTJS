<style>
	.note {
		display: none; /* Hide teachers notes */
	}
	.solution, .solution pre, .solution code {
		color:white;
	}
	.solution:hover, .solution:hover pre, .solution:hover code {
		color:black;
	}
	.solution code {
		border:none;
	}
	.solution:hover code {
		border: 1px solid #ddd;
	}
</style>

# Intro to jQuery


## What is jQuery

jQuery calls itself the "The write less, do more, JavaScript library."  What does that mean?  

Think of jQuery as a collection of helpful pre-written JavaScript code that you can use to quickly solve some common front-end problems.  While you'll probably use jQuery on most of your projects, remember that it's all JavaScript behind the scenes. 

## Why Use jQuery?

There are two main reasons you might want to use jQuery

### 1. jQuery shortcuts a lot of common front-end tasks 

There are some things you want to do all the time in your front-end JavaScript code, like animating an element open and closed.  jQuery has it's own built in functions like `.show()`, `.hide()`, `.slideUp()`, `.fadeOut()` etc. that can do the heavy lifting for you.

### 2. jQuery irons out a lot of cross browser inconsistencies. 

As you've seen with HTML & CSS, each browser interprets your code a little differently.  This is also a problem with JavaScript, so jQuery does a lot of work behind the scenes to make sure the code you write is cross-browser compliant.


## Terminology Review

jQuery is really one big object with a lot of helpful methods that you get to use. Let's review what those terms mean before we dive in.

**Object**
In JavaScript, an object is a collection of various properties - each property defined by a key value pair. 

````
var pet = {
	species: "cat",
	color: "black",
	name: "Mittens"
}
````

We can recall a property's value with dot notation and the key:

````
console.log(pet.name); //logs "Mittens"
````

We can also change a property's value with dot notation and assigning a new value.

````
pet.name = "Spot";
console.log(pet.name); //logs "Spot";
````

**Method**
Functions in JavaScript are cray and can be stored inside properties! When a function lives in side an object, we call it a method.

````
var pet = {
	species: "cat",
	color: "black",
	name: "Mittens",
	sayHi : function(){
		alert("meow!");
	}
}
````

We call methods with dot notation too. Just make sure to include parentheses.

````
pet.sayHi(); //alerts "meow!" 
````

Sometimes a method will return a value:

```
var rando = Math.rand(); // rando = 0.8 or another random number 
```

Sometimes a method takes arguments when called.

```
var result = Math.sqrt(16); //result = 4
var result = Math.sqrt(15); //result = 3.8729
```

## The DOM

DOM stands for **document object model**, and it represents all the HTML elements on your page. It's represented with a tree structure, where each element is a **node**. You've already seen the DOM when you look at the elements panel in dev tools! 

JavaScript can find and modify any DOM node. Some things you might change with JavaScript:

- Update the text inside an element
- Add or remove a class to trigger CSS3 transitions
- hide / show elements

### Exploring the DOM

We can access the DOM in JavScript with the word `document`.

Try typing `document` into the developer tools console.  You get the whole HTML for the page back!

We can access specific parts of the DOM with some built in JavaScript methods.

`document.getElementByID('myID')` finds an element with and ID of 'myID'

`document.getElementsByTagName('p')` finds and paragraphs

`document.getElementByClassName('hey')` finds all elements with a class of 'hey'

The Mozilla developer network has [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document) with information about all of the properties and methods of the `document` object.

#### Query Selector

We also have a recent addition to the JavaScript language called querySelector and it works a lot like jQuery. It works by taking in a CSS selector and returning you elements that match that selector. 

There are two parts of query selector: 

`document.querySelector('p')` — returns the first matched element

`document.querySelectorAll('p')` — returns **a nodeList** (like an array) of _all_ matched elements. 

**Exercises**:

Open up <http://hackeryou.com> and use the console to find elements on the page. Use all of the above APIs to get the answers. 

1. How many paragraphs are on the home page?
2. How many paragraphs with the class of `large` are on the home page?
3. Combined, how many h1 and h2 tags are on the page?
4. Select all the video tags on the page
5. Select All the images on the page
6. select the _last_ image on the page

### Manipulating the DOM

MDN has [great documentation](https://developer.mozilla.org/en-US/docs/Web/API/element) with information about all of the properties and methods of the element objects. We can take our DOM examples from the last exercise further and start changing things. 

Try the **get** and **set** following properties on the above selectors.

```
document.querySelector('h2').textContent;
// or set it
document.querySelector('h2').textContent = 'cool!';
```

Try the above with a strong tag inside your text. It doesn't work - swap out `.textContent` for `.innerHTML`

## jQuery and the DOM

Pretty cool, right? But we can do event better with jQuery. The syntax is cleaner and we don't have to worry about cross-browser bugs. Let's give it a try.

## Tutorial: manipulating the DOM with jQuery

### Load jQuery
- Open **try-jquery.html**
- We need to load the jQuery library before we can work with it. A simple way to do this is to use a remote copy via a CDN. Scroll to the bottom of the main page of jquery.com to find the "Quick Access" URL to jQuery which is served by google. Include this URL in script tags in your HTML file. 

- Aside: CDN stands for "content delivery network". A CDN is a network of computers which provides static resources (images, javascript, css, etc.) to users based on proximity. The resources are hosted in multiple locations and the closest computer to the user will serve the resource. CDNs are fast.

Solution: `<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>`.

### Test that jQuery is loaded
- Open **try-jquery.html** in Chrome. We can test that jQuery has been successfully loaded by going to the JavaScript console. The console should show no errors. Type `jQuery` into the console and press enter. The return value should be `function (e,t){return new x.fn.init(e,t,r)}`. This is telling you that **jQuery is a function**. Type `$` and press enter, you should get the same return value. `$` **is an alias for jQuery**, meaning both will do the same thing, $ is just easier. 

### Selecting elements
jQuery is a function that is defined with multiple parameters, but they are optional. The `selector` parameter is all we need for the time being. To find an element on the page we call the jQuery function and pass it a selector that corresponds to the element.

`$(selector);` or `jQuery(selector);`

The `$` means `jQuery` and is just a shorthand for writing out `jQuery` every time. 

#### jQuery Selectors 
jQuery selectors are exactly the same as CSS selectors! So just like CSS we select elements by using classes, and tag names. All of your existing 20+ types of selectors will totally work in jQuery.

So to find the `h1` element we type `$("h1");` in the console. The returned is an array with the h1 tag in it.

![](http://wes.io/U24E/content)

If we select something where there is more than 1, like span tags:

	$('span')

We will get an array back of multiple items:

![](http://wes.io/U1uo/content)
 
### jQuery objects

When we got the above `h1` tag back. It isn't just the plain ol' h1 tag, its actually something called a **jQuery Object** which has a number of **methods** on it. (Remember that methods are just functions that are on an object).

jQuery objects are representations of the HTML elements and they have tons of methods. We'll explore some of these methods together and then we'll show you how to effectively use the jQuery documentation to learn more. 

* Let's use jQuery to change the text of the h1 tag. First get the h1 jQuery object with `$("h1")` and then use the `text()` method to set the text. `$("h1").text("New h1 text!");` should do the trick.


* Lets move an element to a different location. The two paragraphs have the class names `firstp` and `secondp` respectively. jQuery objects have a method called `insertAfter()` which takes an element and moves it after another element. `$(".firstp").insertAfter(".secondp");` will do the trick.

* The CSS class `highlight` is already defined. We can add this class to an element with the `addClass()` method. Add the highlight class to the h1 tag. Solution: `$("h1").addClass("highlight");`

* We can remove this class from an element with the `removeClass()` method. Remove the highlight class to the h1 tag. Solution: `$("h1").removeClass("highlight");`. The `toggleClass()` method will toggle the class on and off! 



## Selector Exercise

It may have been a while since you have written some CSS selectors so let's spend some time brushing up on our selectors. 

Open the website in the `selectors-exercise` index.html and in the console, answer the comments that are located in selectors.js

When asked only to select elements - store them in a variable and then console.log them. This exercise is meant to get you comfortable with writing the syntax of JavaScript - so for this exercise  write everything by hand without any copy/pasting. 

## setTimeout && setInterval

Before we do the next set of exercises, it's helpful to pause and learn about two parts of JavaScript that we haven't learned about just yet: settings timeouts and settings intervals.

### setTimeout

A setTimeout essentially says "Do this after X seconds". Let's say you wanted to alert 'Hey!', but only after 5 seconds, not right away. How do we do that?

A timeout has two arguments:

1. a function of _things to do_
2. a number of milliseconds to trigger after

The code looks like this:

	setTimeout(function(){
		// do something
	},2500);

See how the first argument is a function that will run, and the second is 2500ms? Or 2.5 seconds.

Inside the function where it says `// do something` is where we write our code that will run after 2.5 seconds.

	setTimeout(function(){
		alert('Hey!');
	},2500);

You may also see some developer call `window.setTimeout`, which is exactly the same thing.

Open `setTimeout.html` to view an example.

### setInterval

While setTimeout is code that runs after every X seconds, setInterval is code that runs _every X seconds_.

When using setInterval, we store it in a variable so we can stop it later. Otherwise the two arguments very similar. 

1. a function of _things to do_
2. a number of milliseconds to trigger every X

Here is an example of a clock that ticks every one second:

	var clock = setInterval(function() {
		console.log("tick");
	}, 1000);

If you want to stop the interval at anytime, you have it stored in the `clock` variable, so you can call `clearInterval(clock)`.

## Selectors Exercise
open the `selectors-exercise` folder and complete all of the requested. When only asked to select elments, store them in a variable first and then console.log that variable.


## Methods Exercise

Open up `methods-exercise.html` in your editor and follow the four challenges in the comments. You will be required to match the CSS of the answer as well as code the required CSS transitions to make the animations.

## Tick Tock

Replicate the tick-tock functionality as soon in `tic-toc.html`.
