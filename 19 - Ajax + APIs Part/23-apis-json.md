# Working with APIs

## What's an API?

API stands for **"Application Programming Interface"**. This is a general term in comptuer programming, but when it comes to the web, this is just a fancy way of saying "a service that lets two websites talk to each other."

Lots of popular websites provide APIs so that you can retrive or send data inside your own website or app.

> A twitter widget on your website connects to the twitter API to retrive your three most recent tweets.

>A facebook share button communicates with the facebook API to post a new article share on your wall.

APIs are also a common method for providing data feeds, like weather forecasts, a movie catalogue, or the NewYorkTimes Best Sellers list.

Take a look at this crazy huge list of public APIs. <http://www.programmableweb.com/apis/directory/1?protocol=REST> 

## RESTful APIs

To help make our lives as developers easier, many APIs conform to a set of standards called **REST** (which stands for "Representational State Transfer", if you were curious). We'll be working with RESTful APIs in this course.

What does this mean for us?

**REST APIs use the same standards as ordinary web URLs.**

1. data lives at a URL eg. `http://api.cupcakes.com/flavours/` 
2. we can interact with data using the standard HTTP methods, **GET, POST, PUT,** and **DELETE** 

You might remember GET and POST from our work with forms.
 
**GET** requests data 
`http://api.cupcakes.com/favours` gets a list of all available flavours

**POST** creates new data
`http://api.cupcakes.com/flavours/new` creates a new flavour, you would have to send new flavour information along with this request

**PUT** is used to update data, and **DELETE** is used to remove data, but you probably won't come across these that often.

Try viewing some of these GET examples in your browser.      

* <http://myttc.ca/vehicles/near/queen_and_spadina.json>  
* <https://api.github.com/users/hackeryou>  
* <http://api.icndb.com/jokes/random/10>
* <http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json>
* <http://isithackday.com/arrpi.php?format=json&text=hackeryou%20is%20the%20coolest>
* <https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&text=hackeryou&api_key=9ffc680dbb093e647be2784acdb4eb56>

### Anatomy of a GET Request

The URLs we use to access data are referred to as **API endpoints**.

Additional options can be passed along with our request after the URL in the **query string**. 

These options are called **parameters**, and each parameter consists of a **key value** pair.

![](http://cl.ly/image/093S2d001811/api-query.png)

## API keys and Authentication

Notice how some of our sample requests had strings of random letters and numbers in them?  

That's actually a unique passphrase, called an **API key**. It identifies us to the app, authorizing us for use. APIs use this or other forms of authentication (like OAuth or a username and password) to prevent spammy requests. 

You can often sign up for an API key for free. Let's try it with the Wunderground Weather API.

1. Visit [http://www.wunderground.com/weather/api](http://www.wunderground.com/weather/api)
2. Create a free account and sign in
3. From the API link above click on "Pricing".
4. The default options will work just fine. With a free developer account you can make up to 10 requests per minute and up to 500 requests per day. This will be plenty for our needs. Click on "Purchase Key".
5. Fill out the API form and upon completion you will see your Key ID.

Remember, API keys are like your secret ID, so treat them like passwords. Make a note of your newly created API key somewhere safe. We'll need it during our exercises.

## JSON formatting

Let's take a closer look at some of the data we got back from our sample API calls.

```
{
  "login": "HackerYou",
  "id": 2479724,
  "avatar_url": "https://avatars.githubusercontent.com/u/2479724?",
  "gravatar_id": "adcc01adbba244c5eb41968040c6741e",
  "url": "https://api.github.com/users/HackerYou",
  "blog": "http://www.hackeryou.com",
  "location": "Toronto",
  "email": "info@hackeryou.com",
}
```

Curly braces, comma separated key value pairs. Looks a lot like a JavaScript object, right?  That's because it is!

This is a data format called **JavaScript Object Notation** or **JSON** for short.  

APIs can return data in many formats (you might also see XML), but we prefer to work with JSON becuase it's easy to work with in our JavaScript code. We'll see soon how to take data from and API and do things like ouput in into the DOM. 

Just like in JavaScript, you can include all kinds of data inside a JSON object, including strings, numbers, booleans, and nested arrays and objects.

```
{
   "vehicles":[
      {
         "source":"schedule",
         "type":"CLRV",
         "trip_id":96411,
         "lng":-79.392334,
         "distance":448.427203,
         "long_name":"504 King To Dundas West Station",
         "angle":192.025269,
         "velocity":16.096636,
         "short_name":"504",
         "lat":43.646019
      },
      {
         "source":"schedule",
         "type":"CLRV",
         "trip_id":97177,
         "lng":-79.390724,
         "distance":531.363251,
         "long_name":"504 King To Broadview Station",
         "angle":12.222412,
         "velocity":16.150303,
         "short_name":"504",
         "lat":43.64637
      }
   ],
   "lat":43.648716,
   "lng":-79.3964754
}
```

# AJAX

So far we've figured out how to get data from an API by visiting URLs in our browser, but what if we want to work with the data inside our own website or app?

This is where AJAX comes in.  AJAX, which stands for **Asynchronous JavaScript and XML**, allows us to send and receive data "asynchronously", i.e. without having to refresh the page. 

AJAX is used all over the web to help provide continuous user experiences. Infinite scroll, like how twitter loads more tweets when you get to the bottom of the page, is using AJAX. Same with auto-completing search suggestions in Google, or new comments appearing instantaneously on a facebook post.

## AJAX and APIs

We can also use AJAX to asynchronously request data from an API in our own apps. Our JavaScript can "talk" to another server, gets some data, and update the current page without a browser refresh.

Take a look at the **weather-app.html** we'll be building to see this in action.  Our weather app requests data from the Wundergrond API and displays it on the page in our desired format.

**Unfortunate sidenote:** AJAX got named a long time ago when XML was popular. Don't worry, it still works with JSON! That's what we'll be using.

## $.ajax with jQuery

AJAX has a few cross-browser quirks, so we'll work with jQuerys' **`$.ajax()`** method to handle our requests.

[Looking at the documentation](https://api.jquery.com/jQuery.ajax/), the `$.ajax()` method requires us to specify the url we're requesting from, and an optional settings object. Or you can pass *everything* in the settings object. I prefer this second syntax because it's easier to read and less error prone.

Let's try this with a wunderground API. 

`http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json` becomes:

```
$.ajax({
	url: 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json',
	type: 'GET',
	dataType: 'json',
	success: function(){
		console.log("It worked!");
	}
});
```

Open up [`first-ajax-request.html`](exercises/first-ajax-request.html) to give it a try.

The result should be an error:

`Origin http://jquery.com is not allowed by Access-Control-Allow-Origin.`

If you search "Access-Control-Allow-Origin" in Google you'll see that the first result points to an MDN page talking about **Cross-site HTTP requests**. When making an HTTP request to a domain name that is different from the domain name that we are currently using, we are creating cross-site http requests.

Unfortunately AJAX is restricted by the "same origin policy", meaning that these types of requests can only happen from the same domain/subdomain. This is a security feature of all browsers.

### JSONP

One way of getting around the "same origin policy" is to use JSONP. **JSON with padding** is a popular technique which requires the server you're requesting data from to cooperate with you and send you JavaScript instead of JSON data. Requesting JavaScript from another domain is permitted and we do it all of the time (think loading jQuery from google's CDN). 

What jQuery can do is inject a script tag into your website temporarily when a request is made. The script "src" will point to a bit of JavaScript on the server you requested data from. What the server needs to do is wrap the JSON data in a JavaScript function (thus "padding"). This function becomes available to us, it gets executed, we get our data, and the script tag is removed.

#### CORS

Another technique to get around the "same origin policy" is called CORS, it stands for **Cross-Origin Resource Sharing**. This is a new protocol which is simply an "opt out" of the "same origin policy". The server that has the data would need to tell the browser that it's opting out. Unfortunately the wunderground API doesn't use CORS.

Let's modify our previous request and just change `json` to `jsonp`.

```
$.ajax({
	url: 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json',
	type: 'GET',
	dataType: 'jsonp',
	success: function(){
		console.log("It worked!");
	}
});
```

Preview the result in `first-ajax-request-fixed.html`

It should work, you'll see "It worked!" in the console. But where's the data? It's available, we just need to learn to use it. Reading the jQuery API will tell us what we need.

[http://api.jquery.com/jQuery.ajax/](http://api.jquery.com/jQuery.ajax/)

For the "success" callback function it says:

> A function to be called if the request succeeds. The function gets **passed three arguments**: The data returned from the server, formatted according to the dataType parameter; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object.

The important part here is the fact that the success function gets passed three arguments. The JSON data is the first argument and that's all we need right now. Modifying our code we see the data:

```
$.ajax({
	url: 'http://api.wunderground.com/api/61f0a55cb00602dc/conditions/q/Ontario/Toronto.json',
	type: 'GET',
	dataType: 'jsonp',
	success: function(response){
		console.log(response)
	}
});
```

Check out `ajax-response.html` and open your console. You should see the response data there as an object.

### Working with JSON

Clicking on the little arrow on the side will open up the object for inspection. jQuery has "parsed" (read and converted) the JSON into a JavaScript object so we can access it using JavaScript.

You can work with the data just like you would with a regular object.

![](http://cl.ly/image/0j1z013G1m3W/Screen%20Shot%202014-04-09%20at%205.49.58%20PM.png)

`response.current_observation` would give you the nested current observation object.

You can keep going, accessing the feels like temperature with `response.current_observation.feelslike_c`.

And now we can do all the usual JavaScript and jQuery things with the data, like store the values in a variable:

`var forRealsiesTemp = response.current_observation.feelslike_c;`

and update the DOM:

`$('p.real-temp').html(forRealsiesTemp + "C");`


# Building a Weather App: Code Along

The data that we get back has a lot of information. The data object consists of two JavaScript objects; the object of interest to us is the one named "current_observation". This object has a lot of interesting data.

The Wunderground documentation lists all of the available data. For "conditions": http://www.wunderground.com/weather/api/d/docs?d=data/conditions

For this widget we need the following data:

* `temp_c`: Temperature in celsius
* `display_location.city`
* `forecast_url`
* `observation_time_rfc822`: date and time
* `weather`: e.g. "Sunny" or "Partly Cloudy"
* `icon_url`: image representing the weather


We will combine this information to create a weather widget together. Open **weather-app.zip** to get started.

The HTML & CSS for the widget has been provided for you in `weather-app.html`. jQuery has been included for you as well. We will write JavaScript inside of the `weather-app.js` file.
 
For this app/widget we'll create an object called `weatherWidget` to namespace our code and organize it. The object will have several properties:

1. `weatherData`: an empty object, we'll parse the data that comes through AJAX and put only the data that we want inside of this object.
2. `init`: a function to initialize/start the widget. We'll invoke/call this function when the document loads. Our AJAX call will happen here.
3. `parseData`: a callback function that gets called on successful AJAX request. We'll go through the response data and put the relevant data in `weatherData`. From here we'll call `updateDOM`.
4. `updateDOM`: a function that will use jQuery to update the DOM with data from `weatherData`.

### Reminder
We will prefix all property calls with `weatherWidget`. So `weatherWidget.parseData` instead of just `weatherWidget`.

You can view a complete working version of the app [here](exercises/weather-app-answer.zip).

## Extension exercises:

* Create a button to update data on click
* Change the background colour based on the weather condition
* Provide an input field for state and city. Refresh the widget with the right data when the form is submitted.

# Seeing AJAX Requests

It's often useful to see what the browser is doing behind the scenes when we're making AJAX requests. Luckily, dev tools can help us here.

1. Open up chrome dev tools
2. Click on Network tab
3. Click the filter icon (third from the left) to filter what type of requests show up in this panel. You'll notice sytleheets, scripts and images also show up here. Choose XHR to limit the view to AJAX requests only.
3. Refresh the page to start capturing requests in the Network panel.
4. Clicking on a request will take you to a panel where you can see the response header, response/body, etc.

Using the information here will help tremendously in debugging AJAX requests. If you don't see your request at all, check for things like syntax errors. If the request was made but the result wasn't as expected then have a look at the headers and body of the response.


## Exercise 2
Debugging Ajax requests is an invaluable skill - especially when jumping into existing code that you do not 100% understand. Get some practice debugging and working with `$.ajax()` in **ajax-practice.html**.

