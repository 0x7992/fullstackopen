const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);

console.log(sumWithInitial);
// Expected output: 10
