let number1 = "  The morning is upon us  ";
let result = number1.trim().slice(3, 12);
// console.log(result)

let number2 = "The quick brown fox jumps over the lazy dog";
let indexOfJumps = number2.indexOf("jumps");
let number2b = number2.slice(indexOfJumps);
// console.log(number2b);
let number2c = number2.slice(0, indexOfJumps);
// console.log(number2c)
let result2 = number2b.concat(", ", number2c);
// console.log(result2)

let number3 = "  The brown fox ";
let result3 = number3.trimEnd().includes("o");
// console.log(result3);

let number4 = "abcdefg";
let lengthOfnumber4 = number4.length;
let result4 = number4.slice(0, lengthOfnumber4).replace(number4, "aceg");
// console.log(result4);

let number5 = "example example example";
let lengthOfExample = "example".length;
let indexOfExample = number5.indexOf("example");
let secondOccurrenceOfExampleIndex = number5.indexOf(
  "example",
  indexOfExample + 1
);
let secondOccurrenceOfExample = number5.slice(
  secondOccurrenceOfExampleIndex,
  secondOccurrenceOfExampleIndex + lengthOfExample
);
let result5 = secondOccurrenceOfExample.replace(
  secondOccurrenceOfExample,
  "lamp"
);
// console.log(result5);

let number6 = "  Hello, World!  ";
let number6Trim = number6.trim();
let result6 = number6Trim.charAt(number6Trim.length - 1);
// console.log(result6);

let number7 = "Hello, World!";
let lengthOfWorld = "World".length;
let indexOfWorld = number7.indexOf("World");
let result7 = number7.slice(indexOfWorld, indexOfWorld + lengthOfWorld);
// or
let result7b = number7.slice(indexOfWorld, number7.length - 1);
// console.log(result7b)

let s = " Hello World  ";
let trimS = s.trim();
// console.log(trimS)
let lastIndexOfSpace = trimS.lastIndexOf(" ");
// console.log(lastIndexOfSpace)
let result8 = trimS.slice(lastIndexOfSpace + 1).length;
// console.log(result8)

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
// console.log(newA);
let newB = b
  .replaceAll("a", "4")
  .replaceAll("e", "3")
  .replaceAll("i", "1")
  .replaceAll("o", "0")
  .replaceAll("s", "5")
  .trim();
// console.log(newB)
let newC = c
  .replaceAll("a", "4")
  .replaceAll("e", "3")
  .replaceAll("i", "1")
  .replaceAll("o", "0")
  .replaceAll("s", "5")
  .trim();
console.log(newC);
