//arrow function
//practice-1
const multiply = (num1, num2, num3) => num1 * num2 * num3;

const multiplyResult = multiply(10, 20, 30);
console.log(`Multiply: ${multiplyResult}`);
//practice-2
const myDialog = `
I am a Web Developer.
I Love to Code.
i Love to Eat Biryany.
`;
console.log(myDialog);
//practice-3
const getAction = (num1, num2 = 2) => num1 * num2;

const getResult = getAction(10);
console.log(getResult)

//practice-4
/* let evenFriends = [];
const getEventFriends = (friendsNames) => {
    for (const friend of friendsNames) {
        if (friend.length % 2 === 0) {
            evenFriends.push(friend);
        }
    }
    return evenFriends;
};
const friends = ['manik', 'khobirul', 'habib', 'sarour', 'alomgir', 'alamin', 'shihab'];
const showOutput = getEventFriends(friends);
console.log(showOutput); */
//by es6
const friends = ['manik', 'khobirul', 'habib', 'sarour', 'alomgir', 'alamin', 'shihab'];

const getEvenFriends = (friendNames) => friendNames.filter(friend => friend.length % 2 === 0);

const evenFriends = getEvenFriends(friends);

console.log(evenFriends);


//practice-5
/* let sumSquaredArray = 0;
const getAverageElement = (elements) => {
    for (let element of elements) {
        const squaredArray = (element * element);
        sumSquaredArray += squaredArray
    }
    return sumSquaredArray / elements.length;
};
const values = [1, 3, 5, 7, 9];
const averageResult = getAverageElement(values);
console.log(averageResult); */

//by es6
const getAverageElement = (elements) => {
    const sumSquaredArray = elements.reduce((sum, element) => sum + element ** 2, 0);
    return sumSquaredArray / elements.length;
};

const values = [1, 3, 5, 7, 9];
const averageResult = getAverageElement(values);
console.log(averageResult);

//practice-6
/* write an arrow function where it will do the following..  1. it will take two array inputs. 2. combine to two array and assign them in a new array.  3. find the maximum number from the new array and return the result */
const findMaxFromCombinedArrays = (array1, array2) => {
    const combinedArray = [...array1, ...array2];
    const maxNumber = Math.max(...combinedArray);
    return maxNumber;
};

const array1 = [5, 8, 12];
const array2 = [20, 3, 15];

const maxNumber = findMaxFromCombinedArrays(array1, array2);
console.log("Maximum number:", maxNumber);
