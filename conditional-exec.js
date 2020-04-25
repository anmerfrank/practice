const whichSchool = function(age) {
  let yourSchool = "";
  if (age < 13) {
    yourSchool = "elementary school";
  } else if (age >= 13 && age < 19) {
    yourSchool = "high school"
  } else {
    yourSchool = "Lighthouse Labs"
  }
  return yourSchool;
}

console.log("I am 35. Which school should I go to?");

console.log(whichSchool(35));

console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));


