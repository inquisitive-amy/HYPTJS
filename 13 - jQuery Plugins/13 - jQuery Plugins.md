# jQuery Plugins

jQuery plugins are a fantastic way to add common functionality to your site without having to code all the JavaScript yourself. 

Plugins extend the native functionality of jQuery to do anything from add a slider to a website to validating forms before they are submitted. 

jQuery plugins live in their own file. They must be loaded **after** jQuery but **before** your own JavaScript. Your script tags will often look something like this:

	<script src="jquery.js"></script>
	<script src="jquery.flexlisder.js"></script>
	<script src="jquery.isotope.js"></script>
	<script src="scripts.js"></script>

## Finding Plugins

There are many ways to find jQuery plugins, and you can often find them by just Googling for what you want. For example "Responsive Slider jQuery plugin" or "jQuery tabs plugin". 

The best site for browsing jquery plugins and getting ideas is <http://www.unheap.com/>

Let's take some time to read through them.

## Using and Running Plugins

Sometimes plugins will have nice websites that document how to use their plugin, like so: <http://bbo-code.com/components/paper-collapse>

Other times you will have to view the project on Github - a website for sharing and collaborating on code. <https://github.com/VodkaBears/Vide#readme>

Every time, you will always have to download the jQuery plugin, move it to your website folder, and include it in your HTML via a script tag. Often the download will include many files, you want either the `jquery.PLUGINNAME.js` or `jquery.PLUGINNAME.min.js`. The other files aren't required unless the plugin relies on some CSS. 

## Let's try a few

Open `testing-plugins.html` and let's try implement the following plugins. I've already downloaded and loaded the plugins for you. We need to read the docs and write the appropriate JS and HTML for them.

- fitvid
- fittext
- flexslider
- paper-collapse

Then try the entire process to implement the following one:

<http://tristanedwards.me/sweetalert>

## HTML data attributes & jQuery

Before we do the next exercise, we need to take some time to learn about the jQuery `data()` method.

In HTML, we sometimes wish to store data on an HTML element which we can later access via JavaScript. For example a person:

	<div class="person" data-first-name="Wes" data-last-name="Bos" data-age="48">
		<img src="wes.jpg">
	</div>

Say when we click the picture of Wes, it alerts "Wes Bos is 48" - this is information that needs to be _attached_ to that element so we can create what are called **data attributes**.

Data attributes can be named anything, they just need to start with `data-`.

Another example is with a tweet button - the Twitter "tweet" button gets it's data from data attributes. When you click it, JavaScript makes a popup window. 

	<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://wesbos.com" data-text="Check out Wes' Site!" data-via="wesbos">Tweet</a>

When we want to access an elements data attributes, we call `.data()` and pass it the value we want.

For example for the following HTML:

	<div class="person" data-first-name="Wes" data-last-name="Bos" data-age="48">
		<img src="wes.jpg">
	</div>

We might write the following JS:

	var fname = $('.person').data('first-name');
	var lname = $('.person').data('last-name');
	var age = $('.person').data('age');

# Exercise: jQuery Gallery

This week you are going to write some JavaScript using the jQuery library in order to build an interactive gallery. A demo is in `/gallery-demo/index.html` of what the gallery should look like. We've given you the HTML, CSS and assets to start:  `gallery-start.zip`. The zip file has three collections of images that you can work with that will help to keep your project unique. Choose one collection to display in the gallery and remove the others that you aren't using.

## Gallery requirements

- There are five thumbnail images to the left. These images are inside a div with class `previews`.
- There is one div with class `full` to the right.
- Clicking on a thumbnail will show a larger version of the image inside the div with class `full`.
- The image that is being displayed in "full" has a border around its thumbnail image.
- This border also displays when you hover over the thumbnails.
- Clicking on a full image opens a `fancybox` with a version of the image that scales with the window size.


## Hints and reminders:

* Don't forget to execute JavaScript only once the document is ready to be manipulated.
* You will need one event listener on the `.previews a` anchor tags.
* It's possible to create elements with: `$('<tag>')`.
	* Create a span with $('<span>')
* It's possible to set any element attribute with the `attr(attributeName, content)` method.
	* 	Example: `$('img').attr('src','images/dog.jpg');`
* Note that all of the thumbnail images have a data attribute. This data points you to the image's larger version. You can access this data with `data(nameOfData)`.
	* $('a').data('full') will return the url of the image
* The nice "blinking" effect that you see when a full image is loaded can be achieved by hiding and then fading in the image.
* The full images will be added after the DOM has been completely loaded so you'll need delegated events for the fancy box.
* The Fancybox jQuery plugin is already loaded for you. You just need to open it up with `$.fancybox.open(sourceOfImage)`.

## Extension exercise suggestions

- When you mouse over the large/full image a zoomed version of the image should appear allowing you to see a more detailed view of that portion of the image.

**Example**: http://epic-image-zoom.webfactoryltd.com/

Note that the example is from a paid jQuery plugin. Don't buy it. Be resourceful and find a free solution.

- All images in the gallery are in grayscale until they are hovered over.

**Example**: http://www.kfsoft.info/MyFadeOverImage/demo.php

- Change the styling to something that meets your own aesthetic.
