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

# Objects

The **primitive types** of JavaScript values are *numbers*, *strings*, *boolean values* (true and false), *null* (haven't discussed this yet), and *undefined*. All other values are something called **objects**.

We can think of objects as containers. Inside the container are **properties** , which are referred to as key-value pairs. Each property contains a *name* and *value* which can be referenced directly.

![image](http://wes.io/XLox/objects.png)

Another way to think about JavaScript objects is to compare them to real-life objects. An apple is an object and it has properties like colour, size, sugar-content, etc.

### Syntax
The syntax for creating an object looks like this:

```
var myObject = {
	propertyOneName: propertyOneValue,
	propertyTwoName: propertyOneValue,
	propertyThreeName: propertyOneValue
}
```

or in our apple example:

	var apple = {
		color: "red",
		size : "medium",
		sugar : 25
	}

The curly brackets with comma separated properties is the "**object literal**" notation for making objects. There are other ways of making objects which will be covered later.

You may remember a similar layout from your sublime text settings:

![](http://wes.io/U0dv/content)

**Note**:

* property names are always strings but the quotes are optional if the strings are valid variable names
* the value of an object property can be any of the primitive types (number, string, boolean, null and undefined) or another object (creating a nested tree structure)
* the last property is not followed by a comma.

Here is an example object. Note how objects can be nested inside each other. 

```
var clothing = {
	belt: "can't remember",
	socks: 34,
	shoes: 2,
	pants: 3,
	hat: true,
	tShirts: {
		smallSize: 3,
		mediumSize: 4,
		largeSize: 2
	}
}
```

### Retrieving values
To _retrieve_ a property value from an object you need to know the property name. There are two ways to get the value.

**Dot-Notation**

The generic syntax looks like this:
```
myObject.propertyName;
```

To retrieve the amount of shoes in our clothing object:

```
> clothing.shoes;
2
```

**Bracket-Notation**

The generic syntax looks like this: `myObject["propertyName"];` **Note that the property name is a string with quotes here.**

To retrieve the amount of shoes in our clothing object:

```
> clothing["shoes"];
2
```

Bracket-notation is used if the property names require quotes or if they are unknown at runtime (e.g. user's input is used to retrieve a property).

### Updating Values

To update a property value you just need to know the property name. And again there are two ways to do this.

**Dot-Notation**
Simply assign the value to `myObject.propertyName`, like this:

```
myObject.propertyName = new_value;
```

For example, if we bought some new pants then we can update the value like this:

```
> clothing.pants = 4;
> clothing.pants;
4
```

**Bracket-Notation**

```
myObject["propertyName"] = new_value;
```

The same example using bracket-notation looks like this:

```
> clothing["pants"] = 4;
> clothing["pants"];
4
```

To add a new property to an existing object, simply use those one of the above notations to define a new property and value. This will update your object with the new property and value.

```
> clothing.scarves = 5;
```

**Exercise 1**:

Create an object called "HackerYou" which contains information about the number of courses offered, age of the school, name of instructor, etc. (any information you want to store really…). 

Solution:

<div class="solution">

	var hackerYou = {
		schoolName: "HackerYou",
		numberOfCourses: 4,
		age: 1,
		nameOfInstructor: "Wes Bos"
	}

</div>

**Exercise 2**:

Create an object called "student" which has the properties: `id`, `name`, `age`, `GPA`, and `highSchool`. Add some values to the object. Write a line(s) of code that says the following: `"The student Homer Simpson (ID: 1) is 15 years old. He has a GPA of 1.4 and is from Springfield High"`.

Solution: <span class="solution">`"The student " + student["name"] + " " + "(ID: " + student["id"] + ") is " + student["age"] + " years old. He has a GPA of " + student["GPA"] + " and is from " + student["highSchool"] + "."`</span>

## Enumeration
The **for-in loop** can be used to iterate over the properties of an object and execute a block of statements.

The syntax looks like this:

```
for (variable in object) {
  ...
}
```

**Note**: 
* The above, variable will be a name created by you and object is the thing you are looping over.
* The property name is assigned to the variable on each iteration.
* There is no guarantee that the properties are retrieved in the same order they were inserted -- don't count on the order to stay the same. Browsers will *usually* keep the order the same… *it's just not guaranteed*.

Here's an example:

```
var clothing = {
	socks: 34,
	shoes: 2,
	pants: 3
}

for (item in clothing) {
	console.log("I have " + clothing[item] + " " + item);
}
```

The output looks like this:

```
I have 34 socks
I have 2 shoes
I have 3 pants
```

The first time around, **item** is assigned to **"socks"**. So if you output **item**, you get **"socks"**. Now that is great for the property name, but how do we get the value?

Normally, we would do something like this:  **clothing["socks"]** or **clothing.socks**. Since **item** _is equal_ to **"socks"**, we can use bracket notation and put the **item** variable in it's place. **clothing[item]**.

The loop repeats it two more times with **"shoes"** and **"pants"** and  then it is done.

**Exercises**:

The following object is used in the exercises:

```
var inventory = {
	apples: 2,
	oranges: 3,
	bananas: 6,
	milk: 2
}
```

**Level 1**
Use the inventory object to print a string that looks like this: `"We have 2 apples, 3 oranges, 6 bananas, and 2 milk in stock."`


**Level 2**
Iterate over the inventory object and print a list of the items. The output should look like this:

```
apples
oranges
bananas
milk
```

**solutions**

After you have had a chance to try it, let's walk through it as a class.


### More Exercises

There are two more exercises in today's folder that will challenge you on objects, looping, if statements and concatenation. 
