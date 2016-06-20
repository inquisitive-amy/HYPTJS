# Working with Data

When working with data, we often need to tweak and bend the data to our needs. Not every array is exactly what we need for every purpose. Especially in the case of returned data from external API's, we need to adapt the data to what our project requires.

Luckily there are useful native methods, and powerful external libraries that exist to help us accomplish these tasks. While these problems could be solved by some creative iteration and reworking of arrays using methods, we can utilize these tools today.

## Native Methods

In 2009, ECMAScript 5 was introduced and the following methods were included among others, to help sort data. The three methods in the next section are all methods to iterate over an array or object, but they differ in terms of functionality. 

With each method below, a callback function is used to define the task to be performed. 

## Functional Programming

The methods and libraries we will be looking at are part of a programming paradigm called Functional Programming. Although it sounds fancy and might make you think of math, think of functional programming as a way to take data and, using functions, transform it anyway you want.

Check out these <a href="https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84" target="_blank">great videos</a> on youtube for more information about functional programming!

For more information on iteration methods available within native JS, read and check out [this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods) on MDN. Be aware that the methods below work in IE9+, and some newer methods may not work in anything, but modern browsers.

### .map()
The `.map()` method allows us to 'map' over an existing array, provide a callback function to be run, that transforms the data and returns it.

The `.map()` method **returns** a new array, so it's ideal to create a variable to hold the result.

#### Examples

**Dividing values in an array**

```js
var numbers = [10, 100, 25, 20];

var halfNumbers = numbers.map(function(value) {
    return value / 2;
});

console.log(halfNumbers);
//[5, 50, 12.5, 10];
```

The `.map()` method will run a function for every element in the array, and it will allow you to make any changes you need to the data.


**Creating an array of items from objects**

```js
var persons = [
  {first: 'Drew', last: 'Minns'},
  {first: 'Kristen', last: 'Spencer'},
  {first: 'Ryan', last: 'Christiani'}
];

var people = persons.map(function(value) {
    return value.first + ' ' + value.last;
});

console.log(people);
//["Drew Minns", "Kristen Spencer", "Ryan Christiani"]

```

### .filter()
Where the `.map()` method by default returns a new array, the `.filter()` method returns all items that meet a condition you provided inside of your callback function. 

Again, this method returns a new array, but only for the values that are returned `true` from your condition.

### Examples

**Filtering out members that are younger than 19**

```js

var users = [
  { name: 'Spider-Man', age: 16 },
  { name: 'Charlie Kelly', age: 25 },
  { name: 'Wes Bos', age: 28 },
  { name: 'Prudence Thunder', age: 9 }
];

var ofAge = users.filter(function(value) {
    return value.age >= 19
});

console.log(ofAge);
//[
//  { name: 'Charlie Kelly', age: 25 },
//  { name: 'Wes Bos', age: 28 }
//];

```

**Filter Titles longer than 8 characters**

```js

var posts = ["Pain", "Sweetness", "Work", "The Middle", "I will steal you back"];

var longTitles = posts.filter(function(value) {
    return value.length >= 8;
});

// longTitles = ["Sweetness", "The Middle", "I will steal you back"]

```

### .forEach()

The `.forEach()` method is a familiar face. It simply iterates over an array, and performs a provided task. Within the callback, we can define two arguments that represent the iterated item, the _value_ and the _index_.

It is much like the .each() method in jQuery in that it can perform the requested task, but does not return a new array unless specified.

#### Example

**Pluralizing Animals and pushing into a new array**

```js
var pluralAnimals = [];

var animals = ["Elephant", "Dog", "Horse"];

animals.forEach(function(value, index) {
    pluralAnimals.push(value + 's');
    console.log(pluralAnimals.length);
});
```

## Underscore JS

For further control, a library called [Underscore.js](http://underscorejs.org) exists. Much like jQuery, Underscore.js provides helpful shortcuts and tools, specifically for working with data.

Underscore.js is organized into methods for working with [collections of data](http://underscorejs.org/#collections), [arrays](http://underscorejs.org/#arrays), [objects](http://underscorejs.org/#objects) and [functions](http://underscorejs.org/#functions). To use the library, include a link to the library in your HTML, ideally from a [CDN](http://cdnjs.com/libraries/underscore.js/) and before your scripts.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
```

All the methods are part of an object named `_`. Similar to how everything from jQuery is on the `$` object. Whenever we call a method, we call `_.find()` and pass in arguments. With all methods, it's possible to pass in a callback function that handles the resulting task.

### _.find()

The `_.find()` method iterates over a list and returns the first value that passes a test. If no result is found, it returns `undefined`, otherwise it continues until the first result is found.

#### Example

**Find the first value that starts with "E"**

```js
var users = ["Kristen", "Drew", "Ryan", "Christopher", "Eunice", "Eva", "Heather"];

var firstName = _.find(users, function(value) {
  return value.charAt(0) === "E"
});

console.log(firstName)
//"Eunice"

```

### _.where()

The `_.where()` method iterates over each value in a list, and returns an array of all the values that match the provided argument to search for. The argument provided is an object that will be used as the search guidelines.

#### Examples

**Sort data by year**

```js
var data = [ 
    { firstName: 'Drew', year: 1984 },
    { firstName: 'Ryan', year: 1985 },
    { firstName: 'Kristen', year: 1985 },
    { firstName: 'Eunice', year: 1987}
];

var eightyFour = _.where(data, {year: 1984});
var eightyFive = _.where(data, {year: 1985});
```

### _.pluck()

Much like the native `.map()` method, `_.pluck()` allows the creation of a new array by searching for a single property name and returning a new array. This is useful when you want to have an array with only specific information while retaining the original collection.

_*If you need to provide multiple properties, the map method is your best bet*_

#### Example

**Creating a new array with only the names of each object**

```js
var data = [ 
    { firstName: 'Drew', year: 1984 },
    { firstName: 'Ryan', year: 1985 },
    { firstName: 'Kristen', year: 1985 },
    { firstName: 'Ryan', year: 1985 },
    { firstName: 'Eunice', year: 1987}
];

var names = _.pluck(data, 'firstName');
```

### _.uniq()

The `_.uniq()` method is useful in that it helps to remove duplicates within an array. By simply passing an array, it will sort and remove all duplicates, or a function can be passed that defines what duplicates to search for.

### Examples

**Removing duplicate names**

```js
var users = ["drew", "ryan", "kristen", "drew", "kristen", "eva", "drew"];

var clean = _.uniq(users);

console.log(clean);
//["drew", "ryan", "kristen", "eva"]
```

**Removing Objects that appear twice**

```js
var data = [ 
    { firstName: 'Drew', year: 1984 },
    { firstName: 'Ryan', year: 1985 },
    { firstName: 'Kristen', year: 1985 },
    { firstName: 'Drew', year: 1984 },
    { firstName: 'Ryan', year: 1985 },
    { firstName: 'Eunice', year: 1987}
];

var cleaned = _.uniq(data, function(value) {
    return value.firstName;
});

```

### _.first(), _.last(), _.initial() and _.rest()

These four methods return either the first or last values in an array, or a number of items in the beginning or the end.

For the next few examples, the following example array will be used.

```js
var data = [100, "Dog", true, 14, undefined];
```

#### _.first()
Returns the first element of an array, or passing an argument will return the first X number of items from the array.

```js
var firstTwo = _.first(data, 2);

// firstTwo = [100, "Dog"]
```

#### _.last()
Returns the last element of an array, or passing an argument will return the last X number of items from the end of the array

```js
var lastThree = _.last(data, 3);

// lastThree = [true, 14, undefined];
```


#### _.initial()
Returns everything but the last entry of the array.  Passing an argument will exclude the last X elements from the result.

```js
var firstNums = _.initial(data);
// firstNums = [100, "Dog", true, 14]

var allButTheLastTwo = _.initial(data, 2);
// allButTheLastTwo = [100, "Dog", true]
```

#### _.rest()
Returns everything but the first entry of an array. Passing an argument will return items from that index number forward

```js
var allButFirst = _.rest(data);
// allButFirst = ["Dog", true, 14, undefined]

var fourthOnward = _.rest(data, 3);
// fourthOnward = [14, undefined]
```

## Moving forward 

Again, all of the above tools are part of a programming paradigm called 'Functional Programming'. This concept is the idea that a developer should have the proper tools (functions) on hand to accomplish a task.

Resources and concepts: 
* <a href="https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84" target="_blank">Functional Programming in Javascript</a>[Video]
* <a href="http://ryanchristiani.com/functions-as-first-class-citizens-in-javascript/" target="_blank">Functions as first class citizens</a>[Article]
* <a href="http://ryanchristiani.com/call-and-apply-for-beginners/" target="_blank">Call and Apply for beginners</a>[Article]

Beyond native methods and Underscore.js, some other libraries include the following:

* [is.js](https://arasatasaygin.github.io/is.js/) - a microcheck library for checking values
* [Ramda](http://ramdajs.com/0.18.0/index.html) - A library of functional programming methods
* [LoDash](https://lodash.com/) - Similar data transformation library to Underscore.js




