let no1 = -100;

if (no1 > 0) {
  console.log("Positive");
} else if (no1 === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// OR math.sign

let no1b = -20;
let no1b2 = Math.sign(no1b);

if (no1b2 === 1) {
  console.log("Positive");
} else if (no1b2 === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// OR string the number

let no1c = "-100";
if (no1c.startsWith("-") === true) {
  console.log("Negative");
} else if (no1c === 0) {
  console.log("Zero");
} else {
  console.log("Positive");
}

let no2 = 23;
if (no2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let age = 24;
if (age % 5 === 0) {
  console.log("Multiple of 5");
} else if (age % 3 === 0) {
  console.log("Multiple of 3");
} else {
  console.log("Neither");
}

let year = 1901;

if (year >= 1901 && year <= 2000) {
  console.log("20th Century");
} else if (year >= 2001 && year <= 2100) {
  console.log("21st Century");
} else if (year >= 2101 && year <= 2200) {
  console.log("22nd Century");
} else {
  console.log("none");
}

let a = 90;
let b;

if (a < 10) {
  b = 0;
} else if (a >= 10 && a <= 50) {
  b = 1;
} else if (a >= 51 && a <= 100) {
  b = 2;
} else {
  b = 3;
}
console.log('b =', b);
