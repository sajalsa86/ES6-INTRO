// function declaration
function add(first, secound) {
    const total = first + secound;
    return total;
};

const output = add(10, 20);
console.log(output);

// function expresion
const add2 = function add(first, secound) {
    const total = first + secound;
    return total;
}
const output2 = add(10, 20);
console.log(output2);
// function expresion with anonymas
const add3 = function (first, secound) {
    const total = first + secound;
    return total;
}
const output3 = add(10, 20);
console.log(output3);

//arrow function
const add4 = (first, secound) => first + secound;

const output4 = add4(20, 30);
console.log(output4);

//arrow function without no parametar
const action = () => 30 + 30;
const resultOfAction = action();
console.log(resultOfAction);

//arrow function with single parametar
const dubble = num => num * 2;
const resultOfDubble = dubble(50);
console.log(resultOfDubble);

//arrow function with multi line action
const multiAction = (a, b, c) => {
    const addition = a + b;
    const subtraction = addition - c;
    const summary = addition + subtraction;
    return summary;
};
const show = multiAction(20, 30, 25);
console.log(show);