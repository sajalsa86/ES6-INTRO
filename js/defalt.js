/* function add(first, secound) {
    if (secound === undefined) {
        secound = 0;
    }
    const sum = first + secound;
    return sum;
};

const result = add(10);
console.log(result); */

//update system by es6
function add(first, secound = 0) {
    const sum = first + secound;
    return sum;
};

const result = add(10, 20);
console.log(result);