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

# Arrays and Methods

## Arrays

Imagine that you wanted to make a list of values where the **order mattered**. You could do this:

```
var musicObject = {
	"0": "do",
	"1": "re",
	"2": "mi",
	"3": "fa",
	"4": "sol",
	"5": "la",
	"6": "ti",
	"7": "do"
}
```
And then you would have to sort the properties every time you wanted to work with them. While objects usually come out in the order that you want them, there is no guarantee that they will. Once we get into more complex objects you will see that this is true.

Thankfully JavaScript has a built-in object called **"Array"** that does what we want. An array looks like this:

```
var musicObject = [
	"do",
	"re",
	"mi",
	"fa",
	"sol",
	"la",
	"ti",
	"do"
];
```

or to save space:

```
var musicObject = [ "do", "re", "mi", "fa", "sol", "la", "ti", "do" ];
```

What are the differences between a regular object and an array object in terms of syntax?

Solution: <span class="solution">1) square-brackets replace the curly brackets. 2) no property names (they are automatically added).</span>

**A few important notes**: 

* The first number in a sequence is usually 1 but not in programming. JavaScript (and many other programming languages) are **zero-based** meaning the first property of the array has an **index** of 0.
* We can't use dot-notation to get at the values so we use bracket-notation to get the values. 
* Any values (objects, numbers, string, other arrays..) can be inside of arrays.


### Hot questions:

Open any page in your browser and paste this into your console:

	var musicObject = [ "do", "re", "mi", "fa", "sol", "la", "ti", "do" ];

1. How do I access the first value? 
2. How do I access the second value?
3. Type musicObject.length. What is that?


**Exercises**:

The following exercises use this array object:

`var theArray = ["Homer likes pie", 34, { name: "First", age: 66 } ]`

1. Retrieve the 2nd value in the array.
2. Update the first value to `"Homer likes beer"`
3. Retrieve the age property of the object in the array.
4. Update the name property of the object in the array to `"Jack"`.

Solutions:

1. <span class="solution">`theArray[1];`</span>
2. <span class="solution">`theArray[0] = "Homer likes beer";`</span>
3. <span class="solution">`theArray[2].age;`</span>
4. <span class="solution">`theArray[2].name = "Jack";`</span>

Note the chaining of expressions. `theArray[2]` gives us an object which we can immediately work with. Since the value is an object literal, we can use dot-notation `theArray[2].age`. We don't need to store the value in a variable and then get its properties. 

<div class="note">
> Teacher note: Chaining methods/operations might not come naturally to students. Stop here and make sure that students understand that we're retrieving a value from an array which we can then work with. This is used a lot in jQuery for example.
</div>


## Functions

Let's take a small detour and talk about functions. Functions in JavaScript are objects. This means that like a number, string or array, they can be stored in variables.

`var myFunction = function(){ alert('hi!'); }` creates a function called **myFunction** and makes it available anywhere in our code. 

### Reference function
If we write `myFunction` then we get back an object. Define a function using a function expression in your chrome console and  then type its name without the parenthesis. Do you see that you get the function back?

### Call function
`myFunction()` calls the function and we get back the result of the function. The only difference is the added parenthesis `()`.

### Method

We already know that objects can hold strings, numbers and arrays. Now we will learn that objects can also hold functions. 

A function that is a property of an object is called a **method**. 

Once more: Functions and methods are pretty much the same thing. Any time a function is in an object, we call it a method. It does the same thing, just called something different. So, for ease of understanding right now a method is a function.

We define methods like this:

```
var myObject = {
	propertyName: value,
	propertyName: value,
	methodName: function() {
		// do something
	}
}
```

Here is another object for Wes where we use a function to convert height from CM to inches. 

	var wes = {
		gender : "Male",
		age : 26,
		height : 177,
		getHeightInInches : function() {
			return wes.height / 0.393701; // converts CM to Inches
		}
	}

### Call methods

Calling a method is just as easy as saying the method name plus `()`.

We have already seen this with the object `console` and the method `log`:

	console.log();

What other methods are on console? Let's open dev tools to see.

With reference to the above wes object:

	wes.getHeightInInches();

### Built-in Methods
Most objects have built-in methods that do interesting work. We said earlier that an Array is an object. Arrays have some special built in methods.

#### Adding items to array with `.push()`

To add an item to an array, we use push

	> var myArray = [1, 3, 4];
	> myArray.push(5) //add value to the end;
	> myArray;
	[1, 3, 4, 5];
	> myArray.unshift(0) //add value to the beginning;
	> myArray;
	[0, 1, 3, 4, 5]


##### Do it again!

1. First, Create an empty array:

	`var names = [];`

2. Next, add the following names to it: Brenna, Christina

```
names.push("Brenna");
names.push("Christina");
```	

3. How would I get "Christina"?

	`names[1]; // why 1? Isn't it the 2nd`

4. We forgot to add Drew. As an apology, we will add her to the front of the list. To do this, we can use unshift to **add to the front of an array**.
	
	`names.unshift("Drew");`

5. Now how would I access "Christina"?

	`names[2]`


#### Removing items from array with `.pop()` and `.shift()`

	> var myArray = [1, "hi", 4, true];
	> myArray.pop() //remove last value & return it;
	> myArray;
	[1, "hi", 4];
	> myArray.shift() //remove first value & return it;
	> myArray;
	["hi", 4]

##### Do it again!

1. Let's start with	a base array of names:
	
	`var names = ["Brenna","Christina","Drew","Heather","Christopher"];`

2. Let's get rid of "Brenna". Since she is the first item in the array:

	`names.shift();`

3. Is it gone? Type `names` into console again. See that "Brenna" is no longer there

4. What about getting rid of the last item in the array? Get rid of "Christopher". 

	`names.pop()`


#### More Array Methods

An array has a handful more of methods to help you with manging your data.


| Method | Description |
|:-----------|:------------|
|concat() | 	Joins two or more arrays, and returns a copy of the joined arrays |
|indexOf() | 	Search the array for an element and returns its position |
|join() | 	Joins all elements of an array into a string |
|lastIndexOf() | 	Search the array for an element, starting at the end, and returns its position |
|pop() | 	Removes the last element of an array, and returns that element |
|push() | 	Adds new elements to the end of an array, and returns the new length |
|reverse() | 	Reverses the order of the elements in an array |
|shift() | 	Removes the first element of an array, and returns that element |
|slice() | 	Selects a part of an array, and returns the new array |
|sort() | 	Sorts the elements of an array |
|splice() | 	Adds/Removes elements from an array |
|toString() | 	Converts an array to a string, and returns the result |
|unshift() | 	Adds new elements to the beginning of an array, and returns the new length |
|valueOf() | 	Returns the primitive value of an array |

Bookmark the cheatsheets at <http://www.cheatography.com/davechild/cheat-sheets/javascript/>

<http://www.scribd.com/doc/19457597/Javascript-Methods>

#### Array Exercise

Open **arrays.html**. Manipulate the array using the above methods. There are comments in the source for each item you should do.

You will need to use `console.log()` to log it to the console as well as create your own variables when required. 

Your final output should look like this:

![](http://wes.io/U1sB/content)

Let's start the first few together, after that we will work in pairs.

## this

Inside of an object, the keyword `this` refers to the object itself. this can be used to update an object's parameters. For example:

```
var myBasket = {
	apples: 1,
	increment: function() {
		this.apples += 1
	}
}
> myBasket.apples;
1
> myBasket.increment();
> myBasket.apples;
2
```

**Exercise**:

Create an object that represents a "warrior". This warrior has the following properties:

- equipment, an array containing the values "sword" and "shield".
- energy, defaults to the number 100
- location, an object with two properties: x and y. The values of x and y are numeric.
- a method `walk()` which updates the warrior's location. If the warrior's location is x:10 and y:5 then walk(2, 0) will update the location to x:12 and y:5.
- a method `strike()` which uses up energy. If the warrior's energy is at 100 then `strike(25)` will reduce the energy to 75.
- a method `pickUpEquipment()` which adds the argument (a string) to the equipment array.


**Answer**:

<div class="solution">
	
	var warrior = {
	  equipment: ["sword", "shield"],
	  energy: 100,
	  location: {x: 6, y: 4},
	  walk: function(x, y) {
	    this.location["x"] += x;
	    this.location["y"] += y;
	  },
	  strike: function(power) {
	    this.energy -= power;
	  },
	  pickUpEquipment: function(item) {
	  		this.equipment.push(item);
	  }
	}

</div>
