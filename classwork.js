// Write a nested if-else statement to check if a student has passed an exam based on their
// score. If they passed, determine if they scored an A, B, or C grade. If they failed, display
// a message "failed".

let studentScore = 91;

if (studentScore >= 90 && studentScore <= 100) {
  console.log("You have passed");
  if (studentScore >= 98 && studentScore <= 100) {
    console.log("You have an A");
  } else if (studentScore >= 96 && studentScore < 98) {
    console.log("You have a B");
  } else console.log("you have a C");
} else {
  console.log("You can do better");
}
 
// ⁠ ⁠Use a nested if-else statement to categorize a person's age group. If they are under 18, 
// print " I am a child." If they are between 18 and 64, print " I am an adult." If they are 65 
// or older, print "I am an old geezer

let age = 12
if (age < 18 && age > 0){
    console.log('You are '+ age+ ', You are a child')
}else if (age >= 18 && age <=64 ){
    console.log('I am an adult')
}else if(age > 65){
    console.log('I am an old geezer')
} else{
    console.log('get out')
}



