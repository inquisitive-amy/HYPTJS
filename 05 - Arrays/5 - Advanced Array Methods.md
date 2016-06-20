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

# Advanced Array Methods
Often when working with data it's helpful to loop over and "massage" your data. This could be adding items up, converting data from one format to another or filtering an array. The following 4 array methods are advanced but will be immensely helpful when we get to working with APIs and external data!

## Looping over an Array with forEach

The traditional way to loop over an array is like this:

```js
var dogs = ['Snickers', 'Prudence', 'Coco'];

for(var i = 0; i < dogs.length; i++) {
	console.log(dogs[i]);
}
```

This can get confusing very quickly when working with nested data. 

Instead, and this is relatively new to the browser, we can use the `.forEach()` array method, which gives us a singular variable called `dog` instead of having to use `dogs[i]`.

```js
var dogs = ['Snickers', 'Prudence', 'Coco'];
dogs.forEach(function(dog) {
	console.log(dog);
});
```

## Mapping an array

Mapping an array is simple: Take one array of items and return another array of items. 

Let's take this array of dog's ages in human years:

```js
var ages = [2,1.5,5,9,4,5];
```

How do we make a new array called `dogAges` that shows each value multipled by 7? For that we map over the array and return new values:

```js
var ages = [2,1.5,5,9,4,5];

var dogAges = ages.map(function(age){
	return age * 7;
});

console.log(dogAges); // [14, 10.5, 35, 63, 28, 35]
```

How about we take an array of strings and uppercase them?

```js
var names = ['Wes','Kait','Lux'];

var yelledNames = names.map(function(name) {
	return name.toUpperCase();
});

console.log(yelledNames); // ["WES", "KAIT", "LUX"]
```

Or add last names: 

```js
var names = ['Wes','Kait','Lux'];

var fullNames = names.map(function(name) {
	return name + " Bos";
});

console.log(fullNames); // ['Wes Bos','Kait Bos','Lux Bos'];
```

## Filtering

Mapping is great if you want every item in the array, but what if we just want a subset of that array? We can use `.filter()` for this! 

The way filter works is that you loop over each item and then either return `true` if you want it, or `false` if you don't. 

How would I made an array people who's names are 3 letters or shorter?

```js
var names = ['Wes', 'Alsu', 'Heather', 'Ryan', 'Eva', 'Matthew', 'Karley', 'Anna', 'Guy'];

var shortNames = names.filter(function(name) {
	if(name.length <= 3) {
		return true;
	}
});

console.log(shortNames); // ["Wes", "Eva", "Guy"]
```

Now, a little more advanced. Let's say we have a list of students and their grades and we want to filter for students that only have grades above an 80.

```js
var students = [
	{
		name: 'Kyle',
		grade: 58
	},
	{
		name: 'Anna',
		grade: 93
	},
	{
		name: 'Russ',
		grade: 80
	},
	{
		name: 'Oliva',
		grade: 78
	},
	{
		name: 'Randy',
		grade: 69
	}
];
```

Let's do this one together!

## Reducing 

Reducing is probably the most advanced array method so we will keep this one simple and only deal with numbers for now. We will come back to this and show how it can be used for any data type.

Reducing let's you loop over data and **aggregate it into a single value**. For example if we have a list of numbers, we could loop over each one and add it to the total. 

```js
var ages = [12,52,64,23,62,15];

var totalAges = ages.reduce(function(prevValue, currentValue) {
	return prevValue + currentValue;
},0);

console.log(totalAges); // 228
```


### Exercises

`.forEach()`: Open `people.html` and follow the instructions there.

`.map()`: Complete the second exercise in `people.html`

`.filter()`: Complete the third exercise in `people.html`

`.reduce()`: **brain buster** open `times.html` and complete the requested task. This one is extra tricky!

