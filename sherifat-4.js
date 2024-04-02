// 1. Finds the largest of three number.
// If num1 is larger, print num1 is the largest number.
// If num2 is larger, print num1 is the largest number.
// If num3 is larger, print num1 is the largest number.
let num1 = 2;
let num2 = 3;
let num3 = 4;

if (num1 > num2 && num1 > num3) {
  console.log("num1 is the largest number");
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is the largest number");
} else {
  console.log("num3 is the largest number");
}

// 2. Write an if-else block that checks if a variable isWeekend is true. If it is, check if a
// variable isHoliday is true and print "Weekend holiday" if it is, or "Regular weekend" if it
// isn't. If isWeekend isn't true, check if isHoliday is true and print "Weekday holiday" if it
//  is, or "Regular weekday" if it isn't.
let isWeekend = false;
let isHoliday = true;
if (isWeekend === true) {
  if (isHoliday === true) {
    console.log("Weekend Holiday");
  } else {
    console.log("Regular weekend");
  }
} else {
  if (isWeekend === false) {
    if (isHoliday === true) {
      console.log("Weekday holiday");
    } else {
      console.log("Regular weekday");
    }
  }
}
// 3. In an organization , bonus to be shared for staff who have spent at least 10 years with
// the company to get 5% on their salary. Write an if-else to calculate if a staff is or isn't
// entiled to the bonus and how much.

let staffYears = 2;
let staffSalary = 250000;
let staffBonus;

if (staffYears >= 10) {
  staffBonus = (5 / 100) * staffSalary;
  console.log(
    "you're entitled to a bonus,".concat(" ", "Your bonus is ", staffBonus)
  );
} else {
  console.log("No bonus for you!");
}

// 4. Write a statement that allows a shop to give a discount of 10% if the cost of purchased
// quantity is more than 1000. Output the total cost for the user.

let costOfGoods = 900;
let Discount;
let totalCost;

if (costOfGoods > 1000) {
  Discount = (10 / 100) * costOfGoods;
  totalCost = costOfGoods - Discount;
} else {
  totalCost = costOfGoods;
}
console.log(totalCost);

// 5. Finds the type of the triangle for given side values.
// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.

let side1 = 1;
let side2 = 2;
let side3 = 2;

if (side1 === side2 && side1 === side3 && side2 === side3) {
  console.log("Equilateral Triange");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("Isosceles triangle");
} else {
  console.log("scalene triangle");
}

// 6. Write JavaScript code to take a number and check whether it is a Buzz number or not. A
// number is a buzz number when it ends with 7 or is divisible by 7
let Number = "16807";

if (Number % 7 === 0 || Number.endsWith("7") === true) {
  console.log("It is a buzz number");
} else {
  console.log("It's not a buzz number");
}

// OR

let Numberr = "47";

if (Numberr % 7 === 0 || Numberr.charAt(Numberr.length - 1) === "7") {
  console.log("It is a buzz number");
} else {
  console.log("It's not a buzz number");
}
