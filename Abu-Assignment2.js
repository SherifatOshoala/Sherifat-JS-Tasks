// Construct for loops that accomplish the following tasks:

// 1.⁠ ⁠Print the numbers 0 - 20, one number per line.
for (i = 0; i <= 20; i++) {
  console.log(i);
}

// 2.⁠ ⁠Print only the ODD values from 3 - 29, one number per line.
for (i = 3; i <= 29; i++) {
  if (i % 2 === 1) {
    console.log(i);
  } else {
    continue;
  }
}

// 3.⁠ ⁠Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (i = 12; i >= -14; i--) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

// 4.⁠ ⁠Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

// 5.⁠ ⁠Given a string, change every second letter to an uppercase ‘Z’.
let string = "palliative";
let newString = "";
for (i = 0; i < string.length; i++) {
  if (newString.includes(string.charAt(i)) === true) {
    newString = newString.concat("Z");
  } else {
    newString = newString.concat(string.charAt(i));
  }
}
console.log(newString);

let tobi = "Omosholape, go girl you badd";
let newTobi = "";

for (i = 0; i < tobi.length; i++) {
  if (tobi.charAt(i - 2) === " " || i === 1) {
    newTobi = newTobi.concat("Z");
  } else {
    newTobi = newTobi.concat(tobi.charAt(i));
  }
}
console.log(newTobi);

// 6.⁠ ⁠Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let string2 = "Pelz";
for (i = 0; i < string2.length; i++) {
  if (string2.charAt(i) === "y") {
    console.log("yes");
  } else {
    console.log("No");
  }
}

let string3 = "Pelzyy";
if (string3.includes("y")) {
  console.log("yes");
} else {
  console.log("No");
}

// 7.⁠ ⁠Given any number, write a program to calculate the factorial of the number.
// (Hint: Factorial is any number multiplied by the natural integers before it up to 1. eg: Factorial of 5 = 5x4x3x2x1)
let num = 1;
let factorial = 1;
for (i = num; i > 1; i--) {
  factorial = factorial * i;
}
console.log(factorial);

// 8.⁠ ⁠Write a program that use a loop to check if a given string is a palindrome. Remember, a palindrome is a word/sentence that spells the same forward and backward.
let name = "racecar a racecar";
let newName = "";

for (i = name.length - 1; i >= 0; i--) {
  newName = newName.concat(name.charAt(i));
}
if (name === newName) {
  console.log("A palindrome");
} else {
  console.log("Not a palindrome");
}

// 9.⁠ ⁠Write a program that finds the summation of every number from 1 to a given number. (Given say, number 5, the summation is 15, ie: 1 + 2 + 3 + 4 + 5)
let number = 5;
let summation = 0;

for (i = 0; i <= number; i++) {
  summation = summation + i;
}
console.log(summation);

// 10.⁠ ⁠Let's see how your name spells in reverse! 😊
// eg: tobi  =  Ibot 😎
let myName = "Sherifat";
let myNewName = "";

for (i = myName.length - 1; i >= 0; i--) {
  myNewName = myNewName.concat(myName.charAt(i));
}
console.log(myNewName);

//11.  Write a program that reverses your name and capitalizes the first letter.
let myName2 = "pelumi";
let myNewName2 = "";

for (i = myName2.length - 1; i >= 0; i--) {
  if (i === myName2.length - 1) {
    myNewName2 += myName2.toUpperCase().charAt(i);
  } else {
    myNewName2 += myName2.charAt(i);
  }
}
console.log(myNewName2);
