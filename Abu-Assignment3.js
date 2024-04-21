// 1.⁠ ⁠Write a JavaScript function to clone an array.

let array1 = [
  "sherifat",
  "Aduks",
  "20",
  "Raodat",
  "20",
  "Aduks",
  "Abass",
  "Umm",
  "Zeeky",
  "Zeeky",
];

const duplicate = (arrayVar) => {
  let array2 = [];
  for (i = 0; i < arrayVar.length; i++) {
    array2.push(arrayVar[i]);
  }
  return array2;
};
console.log(duplicate(array1));

// // 2.⁠ ⁠Write a JavaScript function to get the last element of an array. Passing the parameter 'n'
// // will return the last 'n' elements of the array.
const returnElements = (arrayName, numberOfElements) => {
  let i = arrayName.length;
  let newArrayName;
  while (i > numberOfElements) {
    newArrayName = arrayName.shift();
    i--;
  }
  return arrayName;
};

console.log(returnElements(array1, 3));
// // 3.⁠ ⁠Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
// For example if you accept 025468 the output should be 0-254-6-8.

let number = 124567848;

const evenNumberDash = (num) => {
  let splittedNum = String(num).split("");
  let number2 = [];

  for (i = 0; i < splittedNum.length; i++) {
    if (splittedNum[i] % 2 === 0 && splittedNum[i + 1] % 2 === 0) {
      number2.push(splittedNum[i], "-");
    } else {
      number2.push(splittedNum[i]);
    }
  }
  return number2.join("");
};

console.log(evenNumberDash(number));

// 4.⁠ ⁠Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
let array4 = [
  "sherifat",
  "Aduks",
  "20",
  "Raodat",
  "20",
  "Aduks",
  "Abass",
  "Umm",
  "Zeeky",
  "Zeeky",
];
const removeDuplicate = (arrayy) => {
  let arrayy2 = [];
  for (i = 0; i < arrayy.length; i++) {
    if (arrayy2.includes(arrayy[i]) === true) {
      arrayy2.push();
    } else {
      arrayy2.push(arrayy[i]);
    }
  }
  return arrayy2;
};

console.log(removeDuplicate(array4));

// 5.⁠ ⁠Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// // Sample Output : a
