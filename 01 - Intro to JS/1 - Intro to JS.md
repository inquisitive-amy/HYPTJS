# Introduction to JavaScript

## JavaScript is awesome and it's everywhere!

In the past few years, we have seen a JavaScript explosion. 

* The web is becoming more interactive which required a whole lot more JavaScript to be written.
* The JavaScript standard is constantly evolving and becoming better
	* ES(6|7|8) / ES2015
	* Babel JS
* We can write JavaScript in the browser
* We can write JavaScript on the server
* We can write JavaScript to power robots
	* Nodebots, Tessel, Johnny 5...
* We can write JavaScript to automate our computers + workflow
	* Gulp, Automator...
* Major Companies are embracing JavaScript as their language of Choice
	* Uber, Yelp, Netflix...

## Programming languages

Programming languages are used to communicate a set of instructions to a machine. There are many different programming languages for different situations / projects.

For example, Objective C is used for iPhone apps. Java is used for Android Apps. Ruby, Python and PHP are great for the backend of websites and web apps. 

JavaScript is used primarily for front-end programming; things that happen in the browser. 

Programming is like having a conversation with your computer so sticking to the "grammar rules", known as the **syntax**, specific to each language is important. For example, spitting out the text "Hello World" is different in each language. Let's look at a few examples:

<http://en.wikipedia.org/wiki/List_of_Hello_world_program_examples>

The role of a programmer is to think of a solution to a real-world problem and break the solution down into "code" (simple mechanical instructions that the computer can understand). The computer simply runs the series of instructions in it's environment.

## JavaScript
Instructions to the computer are given by using a series of 0’s and 1’s. Programming languages, such as JavaScript, have been created to allow us to communicate with the computer in a more natural way.

**HTML** defines the content.  
**CSS** defines the presentation.  
**JavaScript** defines the behaviour & functionality.

HTML + CSS + JavaScript = Front-end development / client-side

**Read more about JavaScript** - especially the history, ECMAScript and the uses of JavaScript.

* [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) (just the Introduction for now)
* [JavaScript Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/JavaScript_Overview)


## REPL
A REPL (read, eval, print, loop) is an interactive environment where you can type instructions for the computer to read it, evaluate/run it, print the result and then make itself ready for the next instruction. 

A REPL will take the code you give it and return a result. 

A JavaScript REPL is available inside the Google Chrome Web Browser. Open the JavaScript console by going to `View => Developer => JavaScript Console`, by clicking the **console** tab in chrome dev tools or going straight to it with `⌘` + `j` on mac,  `ctrl` + `j` on windows.

If you see `>` and a blinking cursor… then you're there! Give the computer a simple instruction like `1 + 1`, press enter and the REPL will return a value. 

```
> 1 + 1
2
```


## Expressions and values
The instruction that you gave is called an **expression**. What the computer returns is a **value**. In the example above `1 + 1` is the expression and `2` is the value. In the console, the value is returned immediately after you press enter.

**Values** are simply pieces of data (sequences of 0's and 1's).  
An **expression** is any piece of code or instruction given to the computer that produces a value.

Vocabulary is very important because it helps us ask coherent questions and adds structure to our thinking. Just as we learned **selector, rule, property and value** in CSS, go ahead and drill **expression** and **value** into your head now.

## Intro to Functions

**Functions** are used to make the code "do things" and are basically chunks of code/instructions that can be repeated and run any time. We can create our own functions (to be discussed later) but there are many handy ones already built into JavaScript. 

To get the function to execute, you have to *call the function* using the function name followed by parentheses. 

**Calling a function:** 
	
	functionName();

Functions often (but not always) need to *pass* some data into the function called **arguments**.  

**Calling a function with an argument:** 

	functionName(argument);

Let's take a closer look at some terminology:  

- **Argument:** a value provided to a function
- **Pass:** to provide arguments to a function
- **Call:** ask JavaScript to evaluate/execute a function
- **Return:** pass back the value from the function

A few built-in JavaScript functions are `prompt()`, `alert()` and `confirm()`. All three display a dialog box containing a message but `prompt()` also allows the user to input some text and `confirm()` also includes a "cancel" button in addition to "ok".

Let's try calling these functions in the browser console with and without arguments and see what happens, one function at a time.
	
**Without arguments**

	prompt();
	alert();	
	confirm();
	
**With arguments**  
Note that the argument are contained in quotes.

	prompt("What is your name?");
	alert("hello");
	comfirm("yay or nay?");


In the example above, the *value* "What's your name?", "hello" and "yay or nay" was *passed* as an *argument* to the function named `prompt` and `alert`. We *called* the function and it *returned* different values for each function.

`prompt()`:

* when the user clicks OK, the text entered in the input field is returned
* if the user clicks OK without entering any text, an empty string is returned
* if the user clicks the Cancel button, the function returns `null` (means "value of nothing")

`alert()`:

* the *argument* shows in the dialogue (The text written in the parenthesis)
* returns an `undefined` value (means "does not have a value"")

`confirm()`:

* returns `true` if "ok" was selected
* `false` if "cancel" was selected

Note that the arguments being passed were contained within quotes as well as some of the values being returned. That's because different values have different **types**. Let's go over these different types of values that were returned.

## Types
Every JavaScript value has a type which determine the role it plays. Listed below are some types you will encounter.

* Numbers — Integers & decimals/floats (e.g. 10, 10.001)
* Strings — characters including spaces.   
 **Must be contained within single / double quotes or backticks** (e.g. "Hello" or 'How are you today?' or \`these are template strings\`)
* Booleans — true or false
* Undefined — means "I don't have a value"
* Null — means "I have a value of nothing"
* Objects — (to be discussed later)
* Functions — (to be discussed later)


## Comments
Sometimes you want to write notes to yourself (or others) to organize blocks of code or leave explanations. Just like HTML & CSS, JavaScript will ignore comments and not execute them.

Single line comments can be added with `//`.

```
// There are 365 days in a year.
```

Just like in CSS,  /\*  \*/ are used for multiline comments.

```
/* 
	Many 
	Lines!
*/
```

Multi-line comments are also great for "hiding" large blocks of code so you can try something new without erasing your old code.


## Variables
Variables are like "containers" used to name and store data. The data can be accessed by referring to the name of the variable. Basically, we can store a piece of data and retrieve it whenever we want using variables.

### Declaring a variable

To use a variable, it must be *declared* first. The **keyword** `var` is used to declare a variable and bring it into existence. The name of the variable is determined by you. Be sure to name it something descriptive, based on what kind of value it will hold.

```
> var email;
```

Type the above into your console. What does it return? `undefined`.   Remember,`undefined`is a data **type** that means it doesn't have a value. 

Now reference it's value by typing 'email'. What do you see? Nothing! We have created the variable but not yet assigned any value to it.


**Keyword:** Special words reserved in JavaScript to denote specific behaviours.  Check out the [MDN Keyword List](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Reserved_Words) for reference.

#### let and const

As of ES6 there are also two new ways to create a variable - using `let` and `const`. 

In coming classes we are going to learn all about **scope** - or where variables are made available. `let` and `const` have a bit of a different scope that is called block scoped. More on this in a future class.

The other difference is that `const` variables cannot be changed. 

Try this and see how it doesn't work.

```js
const name = 'Snickers';
name = 'Prudence';
```


For now we will use `var` and go deeper into let and const in the future. 


### Assigning a value to a variable
Assign a value to the variable with the `=` operator:

```
> var email;
> email = "hello@email.com";
"hello@email.com"
```
*The value on the right hand side is stored in the variable on the left hand side.*

Now type `email` into your console again. The value has been assigned to `email` so now we can access it just by its name. You should see:
	
	> email
	"hello@email.com"

Variables can also be declared and assigned a value in a single line of code:

```
> var email = "hello@email.com";
undefined
```

Why did the above example return undefined?   
No value is returned because `var email = "hello@email.com";` is not an expression, it's a **statement**. 

**Statements** are similar to expressions, as they both give instructions to the computer but expressions *always* return a value, statements *don't always* return a value. 

It's best practice to declare variables using the keyword `var` and at the top of your code to avoid confusion.

Once you have declared a variable with `var` you don't need to keep using the keyword `var`. We've already seen that referencing the variable name returns it value but you can also *reassign* a variable to another value without using `var`. 

```js
> var email = "hello@email.com";
> email = "hi@email.com";
> email;

```

What do you think `email` will return?

### Variable naming conventions
* Variables can't contain spaces. Start with a non-numeric character (letter, _, or $) followed by any character. (e.g. `var 23people` is invalid)
* Use camelCase to separate words. (e.g. `var myName`)
* JavaScript is case sensitive so variable names are also case sensitive.
* Another convention is to use underscores to_separate_words. This is common in other programming languages (like PHP) but is generally avoided in JavaScript.
* When naming a variable, it's best to give it a descriptive name. (e.g. `var name` instead of `var n`)

Consider the following code: 
	
	var 8 = x;
	
The result will show an error when the syntax rules are not followed.

	SyntaxError: Unexpected number


### Using variables as values
After a variable is declared, it can be used as an *expression* in another  variable. In the example below, `years` is being reused in the `days` variable.

```js
> var years = 25;
> var days = years * 365;
```

## Operators
You can do basic arithmetic with numbers using **operators**. Arithmetic operators in JavaScript are (`+`) for addition, (`-`) for subtraction, (`*`) for multiplication and (`/`) for division.

```js
> 55 * 20 
> 23.5 - 11
> 6 / 1.5
> 34 + 66.3
```

Parentheses can be used to group operations. Just like you learned in grade school, BEDMAS applies. The order in which the computer will do the math is:

**B**rackets   
**E**xponents  
**D**ivision  
**M**ultiplication  
**A**ddition  
**S**ubtraction 

**Note:** When numbers are contained within quotes, they are considered **strings** and arithmetic operations cannot be performed.

**Exercise**  
In pairs, solve the following questions by using **operators**. You can type all your equations into the Chrome developer tools console. 

**Hint:** When in the console, press the up arrow on your keyboard to bring back the last run line of code.

- how many hours are in a year? Solution: <span class="solution">365 * 24</span>
- how many minutes are in a decade? Solution: <span class="solution">10 * 365 * 24 * 60</span>
- how many seconds old are you? Solution: <span class="solution">26 * 365 * 24 * 60 * 60</span>

## Concatenation
Unlike the other arithmetic operators, the `+` operator has another purpose other than adding numbers. It is the "addition" or joining of strings, known as **concatenation**. If you use the `+` operator with only numerical values, it will add the values. Otherwise, it will combine the outputs as a string.

You can concatenate variables, strings or a combination of both but strings must always be contained within quotes.

To join the three strings "Javascript", "is" and "awesome!" to get "JavaScript is awesome!" it would be:

	"Javascript " + "is" + " awesome!"

To join strings and variables, it would be:

	var language = "Javascript";
	var sentence = language + " is awesome!";
	sentence;
	
What happens when you type the below expressions in the console?

	'HackerYou' * 6 

or

	'HackerYou' + 6

or 

```
'HackerYou' * 'Class'
```

or 

	Array(16).join("lol" - 2) + " Batman!";

`NaN` (not a number) for first and third examples. We can't do some operations (like multiplication) with types that are not numbers.

**Note:** You can create strings by using either single or double quotes. For example, 'HackerYou' and "HackerYou" are equivalent. Pick one and stay consistent. 

**Exercises**  
What happens when you type in the console: `'She's a HackerYou student'`. 

SyntaxError! How would you solve this issue?

Solution: <span class="solution">When you need to use a character that will break your string, you can *escape* the character with a backslash `\` So: , `'She\'s a HackerYou student'`</span>

## Template Strings

As of ES6, we now have **template strings** which allow us to put variables into strings. To create a template string we we backticks:

```js
var sentence = `My dog is 6 years old`;
```

This has the benefit of being able to use _any_ quotes inside:

```js
var sentence = `My dog's nickname is "Scruffy" and he is 6 years old`;
```

As well as interpolate variables right inside

```js
var age = 6;
var sentence = `My dog's nickname is "Scruffy" and he is ${age} years old`;
```

and even run JS right inside the string!

```js
var age = 6;
var sentence = `My dog's nickname is "Scruffy" and he is ${age} years old. That is ${age * 7} in dog years!`;
```


#### Template Strings Support

Template strings don't work in every browser just yet, but using Babel we can compile back to ES6. **For this class, feel free to use template strings as frequently as you would like.**


### Whitespace
Whitespace refers to blank characters and includes spaces, tabs and line breaks. JavaScript usually ignores whitespace except when a *string* is being outputted into the browser.

Note how a single space is added to the strings in the concatenating examples above.

**Exercise**: In the statement `var email = "hello@email.com";`, which whitespaces are optional and which are not?

Solution: <span class="solution">a space is needed between `var` and `email` but the other whitespaces are unnecessary. `var email="hello@email.com"` will work just fine but `varemail="hello@email.com"` will create a variable called `varemail`</span>


## Variables and Functions

Let's look at an example of using variables and functions.  We know that the `prompt()` function allows the user to input text. What if we wanted to hold onto that text input to use for later?

Since functions are also a data **type**, they can be assigned to a variable. 

**Exercise:**  
Using `prompt("What is your name?")`, let's create a variable to hold the value and `alert()` a message with that value.

	var name = prompt("What is your name?");
	alert("Hello " + name + ".");

The text added by the user in the prompt window is passed as a *value* into the variable `name` which is then passed as an *argument* into the alert function.


## Syntax & Code Conventions
When do we use semi-colons? Why did the computer complain when we typed `'She's a HackerYou student'`? Just like any other language, there are rules (or grammar) to be followed. Computers need code written in a very specific way or they will not understand it. 

### Semi-colons
Code is composed of **statements** (instructions) that are usually executed one at a time from top to bottom. Statements end with a semi-colon to indicate the end of the instruction.

	var name = "Your Name";
	name;
	
	//same as
	
	var name = "Your Name"; name;

**Note:** Because of a technique called **automatic semicolon insertion** (ASI), some statements that are "well formed" on a new line will be executed as if a semicolon had been added. 
	
	// will execute both statements
	var name = "Your Name" 
	name;
	
	// will throw an error
	var name = "Your Name" name;

In the example above, when the statement is on a new line, the instruction will run as if there was a semicolon there thanks to ASI.

**To avoid errors, it's best practice to put each new statement on it's own line and end it with a semicolon.**

**Block Statements:** Used to group zero or more statements enclosed by a pair of curly brackets `{ }`. Single line statements must end in a semi-colon but the block itself does not. Generally used with **control flow statements** (to be discussed later).

	var singleLineStatement = "hello"; //needs semi-colon
	
	if (condition === "something"){
		var singleLineStatement = "hello"; //needs semi-colon
		var anotherStatement = "hi"; //needs semi-colon
	} //does not need semi-colon

Here's a handy [Stack Overflow discussion](http://stackoverflow.com/questions/1834642/best-practice-for-semicolon-after-every-function-in-javascript) about when semi-colons are needed.

   
**Exercise**: In the example below, where should the semicolons and line breaks be to make the below code work without errors.

```
"I'm just a value!" var schoolName = "HackerYou" var numOfStudents = 25 schoolName + " has " + numOfStudents + " students." 
```

Solution:
<div class="solution">


<pre>
"I'm just a value!";
var schoolName = "HackerYou";
var numOfStudents = 25;
schoolName + " has " + numOfStudents + " students.";
</pre>

</div>

<div class="note">
> **Teacher note**: Ask students to point out which part of the above code is a value, expression and statement.
</div>

### Variable declarations

All variables should be declared *before* they are used. In some instances, JavaScript does not require this, but doing so makes the program easier to read.

### Quotes
Single / double quotes or backticks can be used but pick one and be consistent.  Also, make sure that the closing quote matches the opening quote.  

### Some common errors:
Have a look at the code below and see if you can spot the error. Then run the code and verify that you spotted an error. Fix the code and verify that it runs properly.

```
> var myName = "Homer";
> myNme;
```

Solution: <span class="solution">`ReferenceError: myNme is not defined`. The variable was simply misspelled but the computer doesn't know that. So it tells you that the misspelled variable doesn't exist. [This error usually means that the computer can find the variable so most likely there is a spelling or syntax error.]</span>

Now repeat the above steps with the following code:

```
> "JavaScript" + " is " + 18 + years old";
```

Solution: <span class="solution">Syntax error. Missing a double-quote. `"JavaScript" + " is " + 18 + "years old";`</span>


## Adding Javascript to HTML Pages
Similar to CSS, to add JavaScript to your HTML pages, you can include it inline on the HTML page or as an external file.

To include it internally, write all of your JavaScript within a `<script></script>` tag. Though the tags can be added in the `<head>` or anywhere in the `<body>`, it is usually added at the bottom of the page, just before the closing `</body>` tag.
	
	...
	<script>
		// js code here
	</script> 
	</body>

To include it as an external file, save your file using a `.js` extension and link to it using the script tag as well but add the `src` attribute like this:
	
	<script src="scripts.js"></script> 
	
Note that prior to HTML5, an additional `type` attribute was required so you may see external javascript files linked this way as well:

	<script type="text/javascript" src="scripts.js"></script> 

In the external JavaScript file you don't include `<script>` tags; just JavaScript code itself.

## More built-in functions
We've already looked `prompt()`, `alert()` and `confirm()` but there are many more built-in functions. For example:

* console.log()
* `Math.`
Type `Math.` (without hitting enter) and you'll see a list pop up of available math related functions. E.g., `Math.cos()`, `Math.max()`, `Math.min()` and many more.

Note that these functions look a little different from the previously discussed since they have a `prefix.functionname()` syntax. We will be discussing **objects** in another lesson and will expand on this.

Just like CSS properties, there are too many different functions to memorize them all so it's a good idea to have some handy resources nearby. Go to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/) and use the search box at the top of the page to learn more about these functions. 

**HINT:** You will need to use these functions for the following exercises. Here are a few examples on how to use the above:

### console.log 

When working with JavaScript inside of a file, we often need to _log_ a value to see if everything is working correctly. At anytime when writing JavaScript, we can type console.log(), pass it a value and it will be logged.

For example:

	console.log("Hi there");

![](http://wes.io/X6DH/content)

You can also pass it a number:


	console.log(1004);

or a variable

	var name = "Wes";
	console.log(name);

This will be an invaluable part of your debugging process coming up.


### Exercises

Practice using variables and operators in **variables-operators.html**

After that, give some built in functions a try with  **variables-operators-functions.html**

Answers to both exercises are available.


