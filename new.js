let problem = "committeee";
let newProblem = "";
for (i = 0; i < problem.length; i++) {
  if (newProblem.includes(problem.charAt(i) === true)) {
    let firstiIndex = problem.indexOf(problem.charAt(i));
    let secondiIndex = problem.indexOf(problem.charAt(i), i + 1);
    if (i !== firstiIndex) {
      newProblem += problem.charAt(i);
    } else if (i === secondiIndex) {
      newProblem += "Z";
    } else {
      newProblem += problem.charAt(i);
    }
  } else {
    newProblem += problem.charAt(i);
  }
}

console.log(newProblem);
