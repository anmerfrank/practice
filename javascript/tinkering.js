// const raining = true;
// const cold = false; 

// if (raining) {
//   console.log("Don't forget your umbrella!")
// }
// if (cold) {
//   console.log("Make sure you pick out a scarf!")
// }

// console.log("Now you're ready to go out!")


function concat(array1, array2) {
  return array1.concat(array2);
}


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);