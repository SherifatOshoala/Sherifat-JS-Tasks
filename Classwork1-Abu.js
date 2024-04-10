// 1.⁠ ⁠Write a program to find maximum between two numbers
let firstNumber = 5;
let secondNumber = 6;
if (firstNumber > secondNumber) {
  console.log("first number is greater");
} else {
  console.log("second number is greater");
}

//  2.⁠ ⁠Write a program to find maximum between three numbers.
let Number1 = 5;
let Number2 = 6;
let Number3 = 7;
if (Number1 > Number2 && Number1 > Number3) {
  console.log("Number1 is the greatest");
} else if (Number2 > Number3 && Number2 > Number1) {
  console.log("Number2 is the greatest");
} else {
  console.log("Number3 is the greatest");
}

//  3.⁠ ⁠Write a program to check whether a number is negative, positive or zero.
let number = -1;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//  4.⁠ ⁠Write a program to check whether a year is leap year or not.
let year = 2024;

if (year % 4 === 0) {
  console.log("It's a leap year");
} else {
  console.log("Not a leap year");
}

//  5.⁠ ⁠Write a program to check whether a character is alphabet or not.
let alphabet = "A";
alphabet = alphabet.toLowerCase()
if (alphabet >= "a" && alphabet <= "z") {
  console.log("It's an alphabet");
} else {
  console.log("Not an alphabet");
}

//  6.⁠ ⁠Write a program to input any alphabet and check whether it is vowel or consonant.
let alphabet2 = "B";
alphabet2 = alphabet2.toLowerCase();

if (
  alphabet2 === "a" ||
  alphabet2 === "e" ||
  alphabet2 === "i" ||
  alphabet2 === "o" ||
  alphabet2 === "u"
) {
  console.log("it's a vowel");
} else {
  console.log("It's a consonant");
}

//  7.⁠ ⁠Write a program to input basic salary of an employee and calculate its Gross salary according to following:

// Basic Salary <= 10000 : Allowance 1 = 20%, Allowance 2= 80%

// Basic Salary <= 20000 : Allowance 1 = 25%, Allowance 2 = 90%

// Basic Salary > 20000 : Allowance 1 = 30%, Allowance 2 = 95%

let basicSalary = 5000;
let allowance1;
let allowance2;
let grossSalary;

if (basicSalary <= 10000) {
  allowance1 = (20 / 100) * basicSalary;
  allowance2 = (80 / 100) * basicSalary;
} else if (basicSalary > 10000 && basicSalary <= 20000) {
  allowance1 = (25 / 100) * basicSalary;
  allowance2 = (90 / 100) * basicSalary;
} else {
  allowance1 = (30 / 100) * basicSalary;
  allowance2 = (95 / 100) * basicSalary;
}

grossSalary = basicSalary + allowance1 + allowance2;
console.log(grossSalary);

//  8.⁠ ⁠Write a program to input electricity unit charges and calculate total electricity bill
//  according to the given condition:

// For first 50 units N0.50/unit
// For next 150 units N0.75/unit
// For next 250 units, N1.20/unit
// For unit above 250 (supposed to be 450), N1.50/unit
// An additional surcharge of 20% is added to the bill

let units = 500;
let unitsCharge;
let surcharge;
let totalBill;

if (units <= 50) {
  unitsCharge = units * 0.5;
} else if (units > 50 && units <= 200) {
  unitsCharge = 50 * 0.5 + (units - 50) * 0.75;
} else if (units > 200 && units <= 450) {
  unitsCharge = 50 * 0.5 + 150 * 0.75 + (units - 200) * 1.2;
} else {
  unitsCharge = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (units - 450) * 1.5;
}
surcharge = (20 / 100) * unitsCharge;
totalBill = surcharge + unitsCharge;
console.log(totalBill);

// // //  9.⁠ ⁠. The current year and the year in which the employee joined the organization are
// entered through the keyboard. If the number of years for which the employee has served the
// organization is greater than 3 then a bonus of Rs. 2500/- is given to the employee. If the
// years of service are not greater than 3, then the program should do nothing.
let currentYear = 2025;
let yearJoined = 2021;
let yearsServed = currentYear - yearJoined;

if (yearsServed > 3) {
  console.log("Bonus of Rs. 2500/- for you");
} else {
  console.log("No bonus for you");
}

// 10.⁠ ⁠If the ages of Alim, Kelvin and Zaynab are given, write a program to determine the youngest of the three.
let Alim = 0;
let Kelvin = -1;
let Zaynab = 5;
if (Alim < Kelvin && Alim < Zaynab) {
  console.log("Alim is the youngest");
} else if (Kelvin < Alim && Kelvin < Zaynab) {
  console.log("Kelvin is the youngest");
} else {
  console.log("Zaynab is the youngest");
}

// 11. A library charges a fine for every book returned late. For first 5 days the fine is 50 naira,
//  for 6-10 days fine is one hundred naira and above 10 days fine is 5 hundred naira. If you
//  return the book after 30 days your membership will be cancelled. Write a program to accept
//  the number of days the member is late to return the book and display the fine or the
//  appropriate message.

let latenessFine = true;
let numberOfDays = 6;
let fine;

if (latenessFine === true) {
  fine = "Pay your fine";
  if (numberOfDays === 5) {
    fine = "50 naira";
  } else if (numberOfDays >= 6 && numberOfDays <= 10) {
    fine = "100 naira";
  } else if (numberOfDays > 10 && numberOfDays <= 30) {
    fine = "500 naira";
  } else {
    fine = "Your membership is cancelled, dude";
  }
} else {
  fine = "You are free";
}

console.log(fine);
