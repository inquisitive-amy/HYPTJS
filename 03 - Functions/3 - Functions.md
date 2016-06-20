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

# Day 2 Review

1. What is a boolean?
	* <span class="solution">Something that is either `true` or `false`. </span>
2. What diet did the ghost go on? 
	* <span class="solution">boo-lean</span>
2. What is an if statement? When would one be useful?
	* <span class="solution">An if statement executes code only when the condition is true. It is useful for introducing logic into your application. </span>
3. What is the different between age = 10, age == 10 and age === 10?
	* <span class="solution">age = 10 sets age to 10, while age === 10 checks to see if the age is equal to 10.</span>
4. How do I check if variable `age` is greater than 10 and less than 30?
	* <span class="solution">We  use the `&&` operator. `age > 10 && age > 30`</span>
5. What is a block statement?
	* <span class="solution">A block statement is a chunk of code that is grouped together. It is usually part of an if statement</span>
6. How do we loop over things? From 1 to 10?
	* <span class="solution">We use a `for loop`</span>
	* <span class="solution">for (var i = ; i <= 10; i++) { ... };</span>



# console.log snippet

In today's folder I've included `vanilla.console_log.sublime-snippet` - put this in your `User` folder when opening `Preferences` → `Browse Packages`. Now, when you are in a javascript document, you can type `cl` + `tab` and get `console.log()`.


# Functions

Just to recap, we said that functions are chunks of code that can be run at any point in time. Functions are arguably the most important and powerful concept in any programming language but this is especially true for JavaScript. Understand functions and you can become a JavaScript wizard.

So far you have seen built-in functions but it is time to take things to the next level. You will now learn how to create your own functions. 

A function is best used to reduce verbosity in your code. Why write something multiple times when you can simply create a function to do the work for you.

## Defining Functions

A function is `defined` by giving it a name and the code you would like it to execute, and then `called` by referencing the name at a later point in the code. The syntax looks like this:

```
function nameOfFunction() {
  // block of statements to execute
}
```

**Example**:

```
function helloWorld() {
	console.log("Hello there!");
}
```

## Calling Functions
We __call__ the function by typing its name including the parentheses. Note that your function will never run unless you call it, previously we simply __defined__ it.

```
> helloWorld();
"Hello there!"
```

**Exercise:** Write a function called `sayMyName` that alerts your name, then call it.

## Parameters

Functions can do much more than simply executing the same code over and over. This is where **parameters** come in. Parameters are the comma separated list of variables that serve as placeholders for the values passed to the function (i.e. arguments).

```
function nameOfFunction(parameter1, parameter2) {
  // block of statements to execute
}
```

**Terminology**:

- Define: to create a function
- Parameter: a variable (placeholder) for the arguments when defining a function
- Argument: a value provided to a function
- Pass: to provide arguments to a function
- Call: ask JavaScript to evaluate a function
- Return: pass back a value

Using these parameters, you can define a function that will return a result based on the arguments passed.

What is the difference between a parameter and an argument? Nothing really, they are just called different things when they are defined and when they are called.  

For example, here `name` is a _parameter_:

	function sayHello(name) {
		alert("Hello "+ name);
	}

and when we call it, "wes" is the name _argument_.

	sayHello("Wes");

### Default Arguments

As of ES6, we now have default arguments. Let's say we were writing a function where we assumed the pet was a dog unless otherwise stated:

```js
function logPet(petName, petType) {
	console.log(`${petName} is a ${petType}`);
}
logPet('snickers'); 

// gives us:
// snickers is a undefined
```

So we used to have to check like so:
```js
function logPet(petName, petType) {
	if(petType === undefined) {
		petType = 'dog';
	}
	console.log(`${petName} is a ${petType}`);
}
logPet('snickers'); 
```

Now we can have default arguments when we define the function!

```js
function logPet(petName, petType = 'dog') {
	console.log(`${petName} is a ${petType}`);
}
logPet('snickers'); // snickers is a dog
logPet('coco', 'cat'); // coco is a cat

```


### Defining and Calling a Function Example

```
// define it
> function add(a, b) {
	return a + b;
}

// call it
> add(2, 4);
6
```

So first we *define* a function called "add" that takes the parameters `a` and `b` and returns their sum. Then we *call* the function and *pass* it the *values* `2` and `4` as *arguments*. Inside the function, `a` refers to the value `2` and `b` refers to the value `4`. The function *returns* the value `6`.

**Exercise:** Edit your `sayMyName` function to accept one parameter called `name`, then call it. It should alert out the name that was passed in as an argument. 

## Return vs. console.log

A function can print / log values to the console with `console.log()`. Don't confuse this with `return`. Returning a value is useful if you want to store this value and reuse it.

For example, the following function prints a value to the console.

```
function add(a,b) {
	console.log(a+b);
}
```
If we try to store the result of the function we see that our variable stored nothing; the value is undefined.

```
> var num = add(1,2);
> num;
undefined
```

If we use the `return` statement then we can make the function a lot more useful.

```
function add(a,b) {
	return a+b;
}
```

```
> var num = add(1,2);
> num;
3
```

**Exercise**: How can we use the `add()` function to add three numbers together?

Solution 1:

<div class="solution">
	var sum = add(1,2);
	var sum2 = add(3, sum);
</div>

Solution 2:

<div class="solution">
	// cut out the middle man and pass a function to a function
	var all3 = add(1,add(2,3));
</div>

The second solution above shows a function calling itself. A function can even call itself **from inside its own definition**; this is a very powerful if mind-blowing concept called **recursion**. For beginners, it is much easier to use the first method as it makes more sense with reading the code. Don't worry about recursion for now.


## Exercises

Complete the functions exercises in **tip-calcuator.html**, **vowels.html**, **functions.html**
