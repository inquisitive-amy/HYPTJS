# Using Other JavaScript Libraries and Tools

jQuery is just a single part of the JavaScript landscape - there are many tools that can be used with or in place of jQuery. While most of our projects will be mostly jQuery based - it can be helpful to look at how other libraries and tools work.

The things we learn today are definitely advanced. So, while you won't be expected to know how to code any of this from scratch,  it's helpful to take a look into advanced stuff to see what is possible. 

# Webcam & Microphone Access

A new part of HTML5 includes something called getUserMedia() which allows you to access the users microphone and webcam. While this topic is fairly advanced, getting started with is pretty easy.

Before we can work with getUserMedia() we need to be running a server on our computer. 

Follow these instructions very carefully:

1. Install the Sublime Text package called SublimeServer. Tools → Command Palette → Type install and hit enter → search for SublimeServer and hit enter.
2. open today's __folder__ in Sublime Text. The _entire folder_, not just the file. 
3. Open the command palette again, and type **Start Server**, hit enter
4. Visit <http://localhost:8080> and find the file you are looking for. 

You are now accessing your files through a local server, which allows us to use getUserMedia()

Let's do a code-along together to make a photo booth! Open `webcam.html`

# Today's Exercises

1. Take the start of our photobooth and style it to look like an acutal photo booth:
	1. There should be a button you can click to take a photo
	3. Style the output as a film strip and camera input
	4. Have a button to flip the camera
	5. Make the entire screen "flash" when you hit the photo button
	7. BONUS: Play a camera shutter sound when clicked
	2. BONUS: You should be able to remove (hint: `.remove()`) photos when you don't like them by clicking some sort of `X` or when you drag it into the garbage
	7. BONUS: Wrap your images in a link so that when you click them they download to your computer.
	6. Brain Buster: Have a timed countdown so when you press the button it shows 3..2..1  SNAP!
