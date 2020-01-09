
/*

Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.

The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times to repeat that value.
*/


let repeatNumbers = function(data) {
  let resultArray = [];

  for (let i = 0; i < data.length; i++) {
    let result = "";
    for (let j = 0; j < data[i][1]; j++) {
      result += data[i][0];
    }
    resultArray.push(result);
  }
  return resultArray.join(", ");
}





console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));