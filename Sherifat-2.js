let number1 = "  The morning is upon us  ";
let result = number1.trim().slice(2, 11);
console.log(result);

let number2 = "The quick brown fox jumps over the lazy dog";
let indexOfJumps = number2.indexOf("jumps");
let number2b = number2.slice(indexOfJumps);
// console.log(number2b);
let number2c = number2.slice(0, indexOfJumps);
// console.log(number2c)
let result2 = number2b.concat(", ", number2c);
console.log(result2);

let number3 = "  The brown fox ";
let result3 = number3.trimEnd().includes("o");
console.log(result3);

let number4 = "abcdefg";
let lengthOfNumber4 = number4.length;
let result4 = number4.slice(0, lengthOfNumber4);
let result4a = result4.charAt(0);
let result4b = result4.charAt(2);
let result4c = result4.charAt(4);
let result4d = result4.charAt(6);
let result4Final = result4a.concat(result4b, result4c, result4d);
console.log(result4Final);

let number5 = "example example example";
let firstSpace = number5.indexOf(" ");
console.log("firstOccurrenceOfSpace:", firstSpace);
let secondSpace = number5.indexOf(" ", firstSpace + 1);
console.log(secondSpace);
let secondExample = number5.slice(firstSpace + 1, secondSpace);
console.log(secondExample);

let result5 = secondExample.charAt(5);
let result5a = secondExample.slice(2, 5);
let result5Final = result5.concat(result5a);
console.log(result5Final);

let number6 = "  Hello, World!  ";
let number6Trim = number6.trim();
let result6 = number6Trim.charAt(number6Trim.length - 1);
console.log(result6);

let number7 = "Hello, World!";
// let lengthOfWorld = "World".length;
let indexOfWorld = number7.indexOf("World");
// let result7 = number7.slice(indexOfWorld, indexOfWorld + lengthOfWorld);
// or
let result7b = number7.slice(indexOfWorld, number7.length - 1);
console.log(result7b);

let s = " Hello World  ";
let trimS = s.trim();
// console.log(trimS)
let lastIndexOfSpace = trimS.lastIndexOf(" ");
// console.log(lastIndexOfSpace)
let result8 = trimS.slice(lastIndexOfSpace + 1).length;
console.log(result8);

let a = "   javascript is cool  ";
let b = "programming is fun";
let c = "  become a coder";
let newA = a
  .replaceAll("a", "4")
  .replaceAll("e", "3")
  .replaceAll("i", "1")
  .replaceAll("o", "0")
  .replaceAll("s", "5")
  .trim();
console.log(newA);
let newB = b
  .replaceAll("a", "4")
  .replaceAll("e", "3")
  .replaceAll("i", "1")
  .replaceAll("o", "0")
  .replaceAll("s", "5")
  .trim();
console.log(newB);
let newC = c
  .replaceAll("a", "4")
  .replaceAll("e", "3")
  .replaceAll("i", "1")
  .replaceAll("o", "0")
  .replaceAll("s", "5")
  .trim();
console.log(newC);

let Java = "javascript javascript javascript";
let trimJava = Java.trim();
let firstOccurrenceOfSpace = Java.indexOf(" ");
console.log("firstOccurrenceOfSpace:", firstOccurrenceOfSpace);
let secondOccurrenceOfSpace = Java.indexOf(" ", firstOccurrenceOfSpace + 1);
console.log(secondOccurrenceOfSpace);
let secondOccurrenceOfJavascript = Java.slice(
  firstOccurrenceOfSpace + 1,
  secondOccurrenceOfSpace
);
console.log(secondOccurrenceOfJavascript);
