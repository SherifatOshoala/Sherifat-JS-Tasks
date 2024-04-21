// // let isPalindrome = "level";
// // if (isPalindrome.charAt(0) === isPalindrome.charAt(isPalindrome.length - 1)) {
// //   if (isPalindrome.charAt(1) === isPalindrome.charAt(isPalindrome.length - 2)) {
// //     console.log("A palindrome");
// //   } else {
// //     console.log("Not a palindrome");
// //   }
// // } else {
// //   console.log("Not a palindrome");
// // }

// // I'll

// let str = "My name is pelumee";
// let box = "";

// for (i = 0; i < str.length; i++) {
//   if (str.charAt(i) === "a") {
//     box = box.concat(str.charAt(i));
//   }
// }
// // console.log(box.length);

// let word = "Sherifat";
// let boxx = "";

// for (let i = 0; i < word.length; i++) {
//   if (i % 2 === 1) {
//     boxx = boxx.concat("un-" + word.charAt(i));
//   } else {
//     boxx = boxx.concat(word.charAt(i));
//   }
// }
// // console.log(boxx);

// let newWord = "Ololade";
// let slicedWord = "";

// for (let i = 0; i < word.length; i++) {
//   if (i % 2 === 0) {
//     slicedWord += "un-" + newWord.slice(i, i + 1);
//   } else {
//     slicedWord += newWord.slice(i, i + 1);
//   }
// }

// console.log(slicedWord);

// let age = prompt('Your pin?')
// age = Number(age)

// console.log(age)

// let date = Date();
// let timeIndex = date.indexOf(":") - 2;
// let timeFormat = "00:00:00";
// let slicedTime = date.slice(timeIndex, timeIndex + timeFormat.length);

// function greeting(name) {
//   if (slicedTime >= "00:00:00" && slicedTime < "12:00:00") {
//     return "Good morning, " + name + "!";
//   } else if (slicedTime >= "12:00:00" && slicedTime < "17:00:00") {
//     return "Good afternoon, " + name + "!";
//   } else if (slicedTime >= "17:00:00" && slicedTime < "21:00:00") {
//     return "Good evening, " + name + "!";
//   } else {
//     return "Good night, " + name + "!";
//   }
// }
// console.log(greeting("Sherifat"));

// const guessGames = (num) => {
//   let result = "";
//   if (num < 5) {
//     if (num === 1 || num === 3) {
//       result = "Hurray, you guessed right!";
//     } else {
//       result = "not " + num;
//     }
//   } else {
// result = 'enter a number less than 5'
//   }
//   return result;
// };

// // console.log(guessGames(3));

// let noOfLives = 4
// while(noOfLives < 5) {
//   console.log("Bark")
// noOfLives++
// }
// console.log("Done")

// Write a program that accepts a number between 2 and 7 from user.
// It should keep asking for an input rom the specified range until the use inputs a number between the range.
//It should print the number that the user inours if the range is correct.

// let number = Number(prompt('enter a number between 2 and 7: '))
// while (number < 2 || number > 7){
//   number = Number(prompt('enter a number between 2 and 7: '))
// }

// console.log(number)
let noOfAttempt =1
let number1 = Number(prompt('enter number 1: '))
let number2 = Number(prompt('enter number 2: '))
while(number1 + number2 > 10){
if(noOfAttempt < 5){
  number1 = Number(prompt('enter another 1: '))
  number2 = Number(prompt('enter another 2: '))
  noOfAttempt++
  if(noOfAttempt === 5){ 
    console.log("You're out of options")
  }
} 
}
console.log(number1 + number2)



const guessingGame = () => {
  let feedback; //make a variale to hold feedaback
  let guess; // variable to hold users guess
  let noOfGuesses = 1; //initiate no of attempt to 1
  let secretNum = Math.ceil(Math.random() * 15); // getting a secret number
  guess = Number(prompt("Guess a number between 0 and 15...")); //accepting user's guess
  while (noOfGuesses < 5) {
    //ensures as long as attempts is less than 5, user can contnue trying
    if (guess === secretNum) {
      feedback = "Hurray! you guessed right.";
      noOfGuesses = 5; // we update no of attempts to 5 to terminate the loop early
    } else {
      guess = Number(prompt("Oh, wrong! Pls guess again...")); //allows user to input another guess
      noOfGuesses++; // allows us to count the number of attempts
      if (noOfGuesses === 5) {
        //ie if all attempts have been used
        feedback = "Sorry! You are out of options";
      }
    }
  }
  return feedback;
};

console.log(guessingGame());
