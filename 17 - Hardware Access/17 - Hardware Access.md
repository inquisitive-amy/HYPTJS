# Using Other JavaScript Libraries and Tools

jQuery is just a single part of the JavaScript landscape - there are many tools that can be used with or in place of jQuery. While most of our projects will be mostly jQuery based - it can be helpful to look at how other libraries and tools work.

The things we learn today are definitely advanced. So, while you won't be expected to know how to code any of this from scratch,  it's helpful to take a look into advanced stuff to see what is possible. 

# Webcam & Microphone Access

A new part of HTML5 includes something called getUserMedia() which allows you to access the users microphone and webcam. While this topic is fairly advanced, getting started with is pretty easy.

Before we can work with getUserMedia() we need to be running a server on our computer. There are a number of different servers you can use including MAMP and Sublime Server. My favourite quick server is called browser-sync. It requires a few steps to get setup, but once you have it installed, it's very easy to get running. 

1. Make sure you have Node.js installed — <http://Nodejs.org>
2. Open a terminal window
	* On OSX it's `Applications` → `Utilities` → `Terminal`
	* On Windows it's a program called `Powershell`
3. Type `npm install browser-sync -g`
	* OSX users might need to run `sudo npm install browser-sync -g`
4. We need to move to today's folder in the terminal.
	* Type `cd ` and then drag+drop today's folder into your terminal. Press enter.
	* ![](http://wes.io/gZzx/content)
5. Type `pwd` to make sure you are in the right folder
6. To run the server, paste `browser-sync start --directory --server --directory --files "*.js, *.html, *.css"` into the terminal and the server should open

Let's do a code-along together to make a photo booth! Open `webcam.html`

# Today's Exercises

1. Take the start of our photobooth and style it to look like an actual photo booth. 
	2. Here is an example: <https://wesbos.com/demos/photobooth/>	
	1. There should be a button you can click to take a photo
	3. Style the output as a film strip and camera input
	4. Have a button to flip the camera
	5. Make the entire screen "flash" when you hit the photo button
	7. BONUS: Play a camera shutter sound when clicked
	2. BONUS: You should be able to remove (hint: `.remove()`) photos when you don't like them by clicking some sort of `X` or when you drag it into the garbage
	7. BONUS: Wrap your images in a link so that when you click them they download to your computer.
	6. Brain Buster: Have a timed countdown so when you press the button it shows 3..2..1  SNAP!
