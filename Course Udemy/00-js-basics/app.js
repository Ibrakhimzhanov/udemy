const numbers = [2, 7, 19, 22, 38, 9, 11, 10, 10];
let index = 1;
while (index < numbers.length) {
  if (index % 2 === 0) {
    console.log((numbers[index] *= 2));
  } else if (index % 2 !== 0) {
    console.log("=> ", numbers[index]);
  }
  index++;
}
