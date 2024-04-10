// let isPalindrome = "level";
// if (isPalindrome.charAt(0) === isPalindrome.charAt(isPalindrome.length - 1)) {
//   if (isPalindrome.charAt(1) === isPalindrome.charAt(isPalindrome.length - 2)) {
//     console.log("A palindrome");
//   } else {
//     console.log("Not a palindrome");
//   }
// } else {
//   console.log("Not a palindrome");
// }

// I'll

let str = "My name is pelumee";
let box = "";

for (i = 0; i < str.length; i++) {
  if (str.charAt(i) === "a") {
    box = box.concat(str.charAt(i));
  }
}
// console.log(box.length);

let word = "Sherifat";
let boxx = "";

for (let i = 0; i < word.length; i++) {
  if (i % 2 === 1) {
    boxx = boxx.concat("un-" + word.charAt(i));
  } else {
    boxx = boxx.concat(word.charAt(i));
  }
}
// console.log(boxx);

let newWord = "Ololade";
let slicedWord = "";

for (let i = 0; i < word.length; i++) {
  if (i % 2 === 0) {
    slicedWord += "un-" + newWord.slice(i, i + 1);
  } else {
    slicedWord += newWord.slice(i, i + 1);
  }
}

console.log(slicedWord);
