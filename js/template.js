const name1 = "Sajal Hossain";
const name2 = 'Samiha';
const name3 = `Shihab Ali`;

/* const paragraph =
    'Bangladesh is a  beautiful contry \n' +
    'india is not a beautiful contry \n' +
    'pakisthan is  a beautiful contry \n';
console.log(paragraph); */

//update system by es6
const paragraph = `
    Bangladesh is a  beautiful contry 
    india is not a beautiful contry 
    pakisthan is  a beautiful contry 
    `;
console.log(paragraph);

/* const a = 10;
const b = 20;
const sum = 'sum of ' + a + ' and ' + b + ' is: ' + (a + b);
console.log(sum); */

//update system by es6
const myArray = [10, 20, 30, 40, 50, 60];
const a = 10;
const b = 20;
const sum = `Sum of ${a} and ${myArray.length} is ${a + myArray.length}`;
console.log(sum);