# HTML5 Video and Audio

HTML5 Video and Audio are two new-ish parts of the HTML5 spec that we didn't learn about in our HTML class. Why? Because while they are HTML, we use JavaScript to control them!

## HTML5 Audio HTML

Before we can start to use JavaScript with HTML video and audio, we need to be able to write the HTML.

Over the years there have been many different formats of audio and video that were required for all the browsers to work properly. Previously we would need to use `.ogg`, `.mp3` and `.wav` for audio and `.webm`, `.mp4` and `.ogg` for video.

Luckily things have settled down now, and _most_ browsers support `.mp3` for audio and `.mp4` or `.webm` for video.

HTML for an audio element looks like this:

	<audio src="everlea.mp3"></audio>

If you need to support multiple formats, it takes a source tag:

	<audio>
		<source src="everlea.ogg" type="audio/ogg">
		<source src="everlea.mp3" type="audio/mpeg">
	</audio>

The above will try and play the ogg file first and fallback to mp3 if it's unable to play. 

The audio element also takes a number of **attributes:** 

<table class="reference notranslate">
  <tbody><tr>
    <th style="width:20%">Attribute</th>
    <th style="width:15%">Value</th>
    <th style="width:55%">Description</th>
  </tr>
  <tr>
    <td class="html5badge">autoplay</td>
    <td>autoplay</td>
    <td>Specifies that the audio will start playing as soon as it is ready</td>
  </tr>
    <tr>
    <td class="html5badge">controls</td>
    <td>controls</td>
    <td>Specifies that audio controls should be displayed (such as a play/pause button etc)</td>
    </tr>
  <tr>
    <td class="html5badge">loop</td>
    <td>loop</td>
    <td>Specifies that the audio will start over again, every time it is finished</td>
  </tr>
    <tr>
    <td class="html5badge">muted</td>
    <td>muted</td>
    <td>Specifies that the audio output should be muted</td>
    </tr>
  <tr>
    <td class="html5badge">preload</td>
    <td>auto<br>
	metadata<br>
	none</td>
    <td>Specifies if and how the author thinks the audio should be loaded when the page loads</td>
  </tr>
  <tr>
    <td class="html5badge">src</td>
    <td><i>URL</i></td>
    <td>Specifies the URL of the audio file</td>
  </tr>
</tbody></table>


So your audio might look like this:

	<audio src="everlea.mpg" controls loop autoplay></audio>

Remember that is the same as doing this:

	<audio src="everlea.mpg" controls="true" loop="you know it" autoplay="elephant"></audio>

or even:

	<audio src="everlea.mpg" controls="false" loop="false" autoplay="false"></audio>

If you do not wish to have one of these attributes, simply omit it. Setting to false does not work.

## HTML5 Video HTML

HTML5 video works much the same way. The preferred video file to use is `.wemb` which is a new open standard developed by Google and is generally a smaller filesize than `.mp4`. The downside is that it does not yet work in every browser, so we also need to supply `.mp4` which does work everywhere:

	<video>
		<source src="files/trailer.webm"></source>
		<source src="files/trailer.mp4"></source>
	</video>

Just like audio, it also takes a number of attributes:

<table class="reference notranslate">
  <tbody><tr>
    <th style="width:20%">Attribute</th>
    <th style="width:20%">Value</th>
    <th style="width:50%">Description</th>
  </tr>
  <tr>
    <td class="html5badge">autoplay</td>
    <td>autoplay</td>
    <td>Specifies that the video will start playing as soon as it is ready</td>
  </tr>
  <tr>
    <td class="html5badge">controls</td>
    <td>controls</td>
    <td>Specifies that video controls should be displayed (such as a play/pause button etc).</td>
  </tr>
  <tr>
    <td class="html5badge">height</td>
    <td><i>pixels</i></td>
    <td>Sets the height of the video player</td>
      </tr>
  <tr>
    <td class="html5badge">loop</td>
    <td>loop</td>
    <td>Specifies that the video will start over again, every time it is finished</td>
  </tr>
    <tr>
    <td class="html5badge">muted</td>
    <td>muted</td>
    <td>Specifies that the audio output of the video should be muted</td>
  </tr>
    <tr>
    <td class="html5badge">poster</td>
    <td><em>URL</em></td>
    <td>Specifies an image to be shown while the video is downloading, or until the user hits the play button</td>
    </tr>
  <tr>
    <td class="html5badge">preload</td>
    <td>auto<br>
	metadata<br>
	none</td>
    <td>Specifies if and how the author thinks the video should be loaded when the page loads</td>
  </tr>
  <tr>
    <td class="html5badge">src</td>
    <td><i>URL</i></td>
    <td>Specifies the URL of the video file</td>
  </tr>
  <tr>
    <td class="html5badge">width</td>
    <td><i>pixels</i></td>
    <td>Sets the width of the video player</td>
  </tr>
</tbody></table>


## Bringing in JavaScript

HTML5 audio and video have `.pause()` and `.play()` methods which we can call on the element. We can use jQuery to grab the element but there is one important distinction here:

With jQuery, we do things like:

	$('.box').fadeOut();

Because jQuery returns _an array_ of elements, we are working with something called a **jQuery Object** that allows us to call any **jQuery methods** on it. 

Are `.play()` and `.pause()` jQuery methods? No! They are plain 'ol JavaScript methods that get called an a single element, not an array of elements. 

So, we simply need to grab the first element when using jquery like so:

	$('video.trailer')[0].play();

Note how we use `[0]` to grab the first one. If you don't do this, you will get an error that says <span style="color:red;"> Uncaught TypeError: undefined is not a function</span> because `.play()` isn't a jQuery method, it's a JavaScript method. 


## Properties

In addition to `.play()` and `.pause()` we have a handful of other properties that we can set, let's look at them on <http://www.w3.org/2010/05/video/mediaevents.html>  - they are the grey buttons at the top.


## Code along

Let's open `video.html` and do the following:

1. Create a play and pause button and wire them up to work.
2. Create FFW and RWD buttons and hook them up using the playbackRate property
3. Use an input with the type of range to control the volume
4. Create a button that toggles the mute on and off - not using volume, but the `muted` property

## Events

Video and audio also have their own set of events that we can listen to, just like a click and we can use jQuery.

Let's take a look at <http://www.w3.org/2010/05/video/mediaevents.html> for the events.

We can use these just like normal jQuery events, so:

	$('video').on('timeupdate',function() {
		// the video time updated
	});

(note above the timeupdate is the event you would want to use for a custom progress bar, not the 'progress event', which is currently broken in some browsers)

or

	$('video').on('pause',function() {
		// the video was paused
	});


## Exercises 

Let's work on a few exercises - pick whichever one interests you more and if you have time you can tackle the other one.

`drums.html` is an audio drum pad that plays different sounds when you click different drums.

Once you are done the basic functionality, you can take it one of two ways:

1. Spend time with the HTML + CSS making it look like a more convincing drum pad and improving visual feedback when a drum is hit including glows and animations
2. Add additional functionality with JavaScript such as:
	* Looping sounds for a background beat
	* Adding in additional sounds (more in the files folder)
	* individual volume sliders for each drum

`video-player.html` requires you to create custom video controls with HTML, CSS for styling and JavaScript to control the events. I've given you a very basic layout, but you should:

1. Toggle the play/pause buttons depending on what state you are in
2. Visually show the volume level as a number
3. Style it to look like a real player such as youtube, vimeo or your own styles

If you finish that, some challenges for this one:

1. Create a list of videos and dynamically swap out the source when someone clicks a thumbnail
2. When the video ends, prompt the user to replay it
 





