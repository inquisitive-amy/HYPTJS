# Project 1

This project will call upon everything we have learned about so far and will include:

1. Control Flow (if statements)
5. Types - numbers strings, booleans
6. Built in functions - alert, prompt
2. Custom Functions
3. Objects
4. Arrays

Because we are only just finishing the beginnings of JavaScript, we haven't yet learned how to interface with HTML and CSS just yet. So, while this may seem limiting, it is intentional. We are becoming very good with the core concepts of JavaScript before we start to interface with HTML in the next class. 

For now, if you require input from the user, we will need to use prompt() boxes or running the function from the console. 

Here are a few examples of apps that you can make. You are welcome to choose 1 or 2 of these, or make up your own. We will have 1 class to work on it as well as the office hours on the following Sunday. 

I have provided simplistic examples of the applications so you can see their functionality - **do not look at the code.**

## Build a rock paper scissors App

Play rock, paper scissors against the computer that keeps going until someone wins 5 games.

* The Computer should randomly draw rock, paper or scissors
* You need to keep count of wins, losses and ties until someone wins.
* You need to validate the input from the user to make sure they don't type in "BOMB" or "123", also be aware of capitalization of "Scissors" etc.. 
* Bonus if you can look ahead to create a simple scoreboard with jQuery

## Cat name Generator

Don't know what to name your cat? Take or create the four+ arrays and string together a random name. 

![](http://wes.io/XMC3/content)

* Each name should be 100% unique - once something is used, it should be removed and never used again
* There should be a function that gets called like getCatName(); 
* You should be able to ask for a few names at once - say 5 names
* 

Other Ideas along this path:

* Startup name generator:  http://www.dotomator.com/web20.html

## Countdown Timer

Build a timer which allows users to input any of the following common household tasks. 

* timer("Dryer");
* timer("Washer);
* timer("Hard Boiled Eggs");
* timer("Soft Boiled Eggs");

The timer should log the number of hours, minutes and seconds left to the console and alert the user when done. 

This will use things in JavaScript we have yet to learn about called a `setInterval` and `setTimeout`.

## Calorie Intake Calculator 

Build a calorie intake calculator based on the BMR <http://www.bmi-calculator.net/bmr-calculator/bmr-formula.php> and the Harris Benedict equation.  <http://www.bmi-calculator.net/bmr-calculator/harris-benedict-equation/>

* The user should be able to input their weight as "50kg", "50 kilos", "50 kilograms", 120 pounds", "120lbs" and you should parse that into the correct number of pounds.
* The user should be able to input their height in 5"10 and you should convert that to inches. 

# Brain Buster: 10 million coin flips

A coin flip is a 50/50 chance that you will get heads or tails.

If you flip a coin 100 times, how many of them will be heads and how many will be tails? Sometimes you get 55/45, maybe even 60/40. Let's call these 100 flips a "group".

If you repeat the previous 100 flip group 100,000 times, each 100 flips recording any record highs and record lows for that group.

So, to approach it from a programming perspective:

1. Write a flip() function that flips a coin and returns heads or tails based on a random number.
2. Write a function flipMany() that calls flip() 100 times. Recording the results of heads and tails.
3. If there are record highs or record lows for each flip group. For example, 30 heads or 70 tails, record them as the the current highs/lows.
4. Write a function flipManyGroups() that calls flipMany() 100,000. Each time the flipMany() is run, it might find a new high/low.

This will effectively flip a coin 10 million times. If you computer can handle it, you can increase this number. I ran mine 10,000,000 times, flipping the coin 1 billion times getting these results:

highest heads: 75
highest tails: 76
lowest heads: 24
lowest tails: 25
