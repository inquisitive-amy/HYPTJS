
# Reading Documentation

Learning how an API works will take some time. Well documented APIs have enough information and examples to get you started. The examples should show how to make the request and what the response data looks like. Reading this stuff helps a lot. So it can't be stressed enough, read the documentation carefully.

Tips for reading API documentation: 

1. Make sure you understand REST & HTTP requests. The vocabulary will make the documentation much easier to understand.
2. Look for information that you really need (covered below)
3. Explore and play around (nothing beats hands-on experience)

## Find the API documentation
To locate API docs, check to see if they're linked off the service's main page or try searching for the name of the service + "API".

Let's try this with the Rijksmuseum API.  You should be able to find 
<http://rijksmuseum.github.io/>

## Response format
Next we need to know how the responses of this API are delivered to us. Common formats you'll come across are XML and JSON. If we check the **Parameters** section of the docs, we see we can get a response in the following formats: *xml, json, jsonp* Try to stick to APIs that return JSON. It's the easiest to work with in JavaScript.

## CORS or JSONP?
Remember the "same origin policy" that prevents one domain from requesting data from another?  We need to find out if the API uses JSONP or CORS to get around that restriction. Since JSONP is a valid response format, we can use that.

## Limitations & Authentication
To prevent spammy requests, most APIs have restrictions on who can make requests and how many requests can be made in a given time frame. You'll often need to sign up for an API key that authorizes you to make requests.  

How do we get an API key? Under **Access to the API** it says:

> You will first need to request an API key, to access the data and images. You can do this via the advanced settings of your Rijksstudio account. You will then immediately be given a code. You will need this code to use the APIs.

Head over to <https://www.rijksmuseum.nl/nl/mijn/gegevens> and create an account. Change the language to English, then create a new account. Once logged in, visit your account settings and scroll down to the Advanced section. Fill out the required information. The request for an API key should be granted immediately. Save the API key somewhere safe.

## Base URI
This is a RESTful API so all requests should look like this:

`<base_url>/<resource>` + method(`GET`, `POST`, `PUT`, `DELETE`)

The first section of the documentation and the sample request, 

`https://www.rijksmuseum.nl/api/nl/collection/sk-c-5?key=fakekey&format=json` 

provides us with clues as to how to use this API.

`https://www.rijksmuseum.nl/api/` is the **base uri** All requests will start with this.<br>
`/nl/collections/` is the **API endpoint** As noted, we'll want to use `/en/` in our requests to ensure we get results in English. <br>
`/sk-c-5` is the **ID of a single item** in the collection<br>
`?key=fakekey&format=json` are **query string parameters** that get passed along with our request to specify additional information. The docs here state that every API request should specify a key and a format.

## Endpoints

The Rijksmusuem offers four different endpoint for us to work with. Endpoints determine which data set we are accessing. Here, we see we can access public data on the collection, web page content, user created sets of art, and an events calendar.

## Exploring an Endpoint
Let's take a look at the **Collections** endpoints.  Scrolling though, there are three different resources we can access.  

`/api/[culture]/collection` for accessing the full collection<br>
`/api/[culture]/collection/[object-number]` for accessing a particular item<br>
`/api/[culture]/collection/[object-number]/tiles` for accessing image data as a set of tiles of a particular item<br>

On the side we see that there are sections to the API. Let's have a look at the `Movies` and `Genres` sections and explore some of the capabilities of this API.

## Playing around with an API

Let's try making a request using [Hurl.it](http://hurl.it), an app for testing out HTTP requests. 

1. Choose method (GET is default, which is what we want)
2. Add the request path for the API you're using
<!-- 2. Add a header => name: Accept, value: application/json -->
3. Add parameters 
    * name: key and value: *your key* 
    * name:format and value: jsonp
4. Click "Launch Request" to preview what data you get back

## Getting Collection info

Add the /collection/ endpoint as the destination for our request and then click "Launch Request". hurl.it will format the response nicely.

Destination: https://www.rijksmuseum.nl/api/en/collection/

The response has a `header` and a `body`. The header gives us a bit of information about the response, including status, content-type, content-length, etc. The body is the JSON data. 

The "collection" resource (JSON object) is composed of four properties.

1. ellapsedMilliseconds => number
2. count => number
3. artObjects => array of objects


## Refining results with Parameters

The count tells us there are thousands of results, but we're only getting back a few detailed listings. If we want to get the more, we can add another parameter to our request (eg. `&p=2` after your API key and format parameters). Try adding that to hurl.it and notice how the results change. 

This API also allows us to specify how many posts per page we want to retrieve. Try adding a the post per page parameter `ps` with a small value like `3` and see how what you get back.

The artObjects now shows the 3 pieces we asked for and some brief info on each of them. Here's some of the data for a single one:

"artObjects": [
    {
      "links": {
        "self": "https://www.rijksmuseum.nl/api/en/collection/BK-NM-3888",
        "web": "https://www.rijksmuseum.nl/en/collection/BK-NM-3888"
      },
      "id": "en-BK-NM-3888",
      "objectNumber": "BK-NM-3888",
      "title": "Virgin and Child",
      "hasImage": true,
      "principalOrFirstMaker": "Adriaen van Wesel",
      "longTitle": "Virgin and Child, Adriaen van Wesel, c. 1470 - c. 1480",
      "showImage": true,
      "permitDownload": true
      ...
    },

If we wanted to get more information about this particular art item then the `objectNumber` from the original results will be handy. We can make another request, this time to `/collection/[objectNumber]`, to get more detailed info.

Similarly, we can retrieve the tiled image data by making a new request to 
`collection/[objectNumber]/tiles`

### More parameters
Note that there are lots more options for refining results. You can search by artist, media, colours etc. Be sure to explore all the API docs to find out what it's capable of!

https://i.cloudup.com/NQP7-dZyf7.png

## Wrap up

- We know how to make requests to the Rijksmuseum API
- We know how the response data is structured
- We know that we can make multiple requests to obtain different data.
