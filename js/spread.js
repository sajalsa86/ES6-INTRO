const max = Math.max(45, 65, 90, 85);
console.log(`Max Value is: ${max}`);
//example-1
let numbers = [10, 20, 30, 50, 40, 60, 85, 70];

const largest = Math.max(...numbers);
console.log(`Largest Value is: ${largest}`);

//example-2
let array = [10, 20, 30, 50, 40, 60, 85, 70];
array.push(100);

let yourArray = [...array];
yourArray.push(101);

console.log(array);
console.log(yourArray);
//example-3
let lastArray = [200, ...yourArray, 500];
console.log(lastArray);