# Cowboy Rob's Carpet Calculator
## Contents
- Introduction
- Step 1: Getting the Room Dimensions
- Step 2: Calculating the Area
- Step 3: Displaying the Result
- Testing

## Introduction
Welcome to the Cowboy Rob's Carpet Calculator SkillBuilder! Let's get started :)

The **only file you should edit** to complete this SkillBuilder is `script.js`. If you open that file, you'll see the section where you will write your code that looks like this:

// 👇 Write your code here 👇

// 👆 Write your code here 👆

Any code you write in between these comment lines will run each time you click the `Calculate` button on the webpage.  Go ahead and write a log statement between these lines like `console.log("click");`, then click the replit `Run` button, and now each time you click the `Calculate` button on the webpage you'll observe your log statement appearing in the console.

Great, so now we can run some bit of code each time the `Calculate` button on the webpage is clicked. Your task will be to calculate and display the square footage of carpet needed to cover *two* different rooms **INCLUDING 10% EXTRA!!!**. 

Approach this methodically by breaking down the steps needed to achieve your goal. You might try doing it manually on paper or in your head first. Then, write out the steps as comments and code them one at a time! Let's look at how to do that at a high level step-by-step.

## Step 1: Getting the Room Dimensions

We have provided two functions you can call to access the values the entered for the width and length of each room.  These functions are available in your code or you can call them from the console tab.

### `getRoomWidth(roomNumber)`
This function accepts a room number as an argument. It returns the value typed into the input box on the webpage for the width of that particular room.

*Example: The statement *`let room1Width = getRoomWidth(1);`* will store the value typed into the input box on the webpage for Room 1 in the variable `room1Width`*.
<hr>

### `getRoomLength(roomNumber)`
This function works just like `getRoomWidth`, but for the room's length.
<hr>

## Step 2: Calculating the Area

To calculate the total area needed, start by calculating the area of Room 1 and storing it in a variable. Then do the same for Room 2.  Then add the two areas together and store the result in a totalArea variable. Finally, increase the total area by 10%.

**Math Reminder:** If we want to find 50% of something we can multiply by 0.5. Want to get 75%? Then multiply by .75. Want to get 110% (_like in this assignment_)? Multiply by 1.1.  

**For example:** if the first room is 4ft x 4ft (16 sq ft) and the second room is 5ft x 5ft (25 sq ft) then the sum of the square footage is 41 (25 + 16) and the result is `45.1` (41 + 10%).

## Step 3: Show the Result

We have provided a function for showing the result!  All you need to do is call it.  Try it out in the console first with something like `showResult(5)`.

### `showResult(result)`
This function accepts an argument called `result` that represents the carpet square footage (a Number) needed and puts the result on the page.

## Testing
We have also included a TEST function to help you see if your assignment is working properly. Try typing `calculateCarpetTest()` into the console. It will give you hints and tips as you go for "debugging driven development".