//#######################################################################
//              ##################################################
// @Copy Array  ##############################################
// ###############################################
//##############################

const numbers = [9, 1, 78, 32, 6, 24, 3, 12, 64, 51];

// const spredOperatorArray = (numbers) => {
//   // спред оператор
//   const copy = [...numbers];
//   copy.sort((a, b) => a - b);
//   return copy;
// };

// console.log(spredOperatorArray(arr));

const sortArray = (numbers) => {
  const copy = numbers.slice();
  const sortNumbers = copy.sort((a, b) => a - b);
  return sortNumbers;
};

console.log("Sorted: " + sortArray(numbers));

console.log("Original: " + numbers);

// const sortArray = (numbers) => numbers.slice().sort((a, b) => a - b);

// console.log("Sorted: " + sortArray(numbers));

// console.log("Original: " + numbers);
