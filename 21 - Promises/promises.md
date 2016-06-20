# Promises

Promises in JavaScript are a way to listen for something to be done - this is especially helpful when you are waiting for multiple Ajax requests to finish. 

Let's say we are are building an app that needs two Ajax requests: 1 for the Weather, and 1 for recipes. 

We could run the first one, and put the second one in the callback:

```js
$.getJSON('weather.com/toronto',function(weather) {
	// we got the weather, how get recipes
	$.getJSON('api.yumly.com/pork',function(recipes){
		console.log('we now have both!')
		console.log(weather);
		console.log(recipes);
	});
});
```

This, however, is not ideal because we need to wait for weather.com to come back before we get the recipes. Also, what if we 10 requests that we needed to wait for before it came back? This is what is referred to as <http://callbackhell.com/>

```js
$.getJSON('weather.com/toronto',function(weather) {
	// we got the weather, how get recipes
	$.getJSON('api.yumly.com/pork',function(recipes){
		$.getJSON('anotherapi.com',function(recipes){
			$.getJSON('anotherapi.com',function(recipes){
				$.getJSON('anotherapi.com',function(recipes){
					$.getJSON('anotherapi.com',function(recipes){
						$.getJSON('anotherapi.com',function(recipes){
							$.getJSON('anotherapi.com',function(recipes){
								$.getJSON('anotherapi.com',function(recipes){
									// we made it!
								});
							});
						});
					});
				});
			});			
		});
	});
});
```

So, rather than putting code into a callback, we "queue up" a promise, which sometime in the future will return the result. Promises are coming to JavaScript, but for the time being we can use any number of promise libraries - jQuery has one built it.

For an example of how to use a single promise, open `promise-example1.html`

You'll see that instead of using a success callback, we store the ajax request in a variable, this is called a _promise_. It's important to note that this **is not the data**, but a promise that data will eventually come back!

```js
var yapromise = $.ajax({
  url : 'http://api.openweathermap.org/data/2.1/forecast/city?callback=?',
  dataType : 'JSON',
  data : {
    q : 'Toronto'
  }
});
```

We can then _listen_ to that promise using `.done()`, `.fail()` or `.then()`:

```js
$.when(yapromise).done(function(weather) {
  console.log(weather);
});
```

We can string along `.fail()`

```js
$.when(yapromise).done(function(weather) {
  console.log(weather);
}).fail(function(error){
	console.log(error);
});
```

Sometimes you'll see it indented like this - it's the same code just a little easier to read.

```js
$.when(yapromise)
 
 .done(function(weather) {
 	 console.log(weather);
  })
 
 .fail(function(error){
	console.log(error);
 });
```

Finally, we can alternatively pass in the _done function_ and the _fail function_ in a single convenience `.then()`:

```js
$.when(yapromise).then(function(weather) {
  console.log(weather);
}, function(err) {
  console.log(err);
});
```


### Multiple Promises

Now previously the only different between the above and the callback we have been using so far is syntax. However, it gets really handy when you need to wait for multiple APIs to return data. 

Open `promises-example2.html` for an example. 

It works the same way, except we pass `.when()` an array of promises. Once all have been fulfilled, `.done` or `.then` will fire the callback.

