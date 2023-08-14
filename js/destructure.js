const book = {
    name1: 'imaner hakikot',
    author: 'abul ala mowdudi',
    page: 100,
    price: '50Tk'
};
/* const name = book.name1;
const price = book.price;
console.log(name, price); */

//update system by ES6
const { name1, page } = book;
const { price } = book;
console.log(name1, price);

const { collage, subjest, teacher } = { collage: 'naogaon polytechnic', subjest: 4, teacher: 16 };
console.log(collage, teacher);

// array destructure

const [firstName, lastName, nickName] = ['sajal', 'hossain', 'suzan'];
console.log(firstName, lastName);

const children = ['samiha', 'safone', 'sajeed'];
const [soto, mejo, boro] = children;
console.log(mejo);

function getNames() {
    return ['Sajal', 'Samiha'];
};

const [chacha, vasti] = getNames();
console.log(vasti, chacha);


