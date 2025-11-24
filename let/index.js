// // let dan = 44;
// // console.log(dan)

// // function mad(dddd){
// // x = 5 * dddd
// // return x;
// // }
// // mad(7)

// const mad = (d) => {
//     x = 5 * d
//     return x

// }
// console.log(mad(5));

// function outside() {
//   const x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside());

// function myConcat(separator) {
//   let result = ""; // initialize list
//   // iterate through arguments
//   for (let i = 1; i < arguments.length; i++) {
//     result +=   arguments[i] + separator;
//   }
//   return result;
// }
// console.log(myConcat(", ", "red", "orange", "blue"));

// template litral
var name1 = "Tom";
var name2 = "Dan"
let examples = `${name1}\n 
${name2}
`;
document.getElementById('names').innerHTML = examples

// distructure objects 
const distructions = {
  firstName: 'dami',
  lastName: 'tom',
  city: 'lagos',
  zipCode: 56666,
  country: 'gana'
}

const {firstName: fn, lastName: fm} = distructions;

console.log(`${fn} ${fm}`);

// object distructioning practice 

function homeAddress(address) {
  const {city, state} = address
  const newAddress = {
    city,
    state,
    country: 'united state'

  };
  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

homeAddress({city: 'Lagos', state: 'Ikorodu'})

// for loop

let income = [22000, 34000, 62000];
let total = 5000;

for (income of income) {

  console.log(income)
  total += income
}

// rest operatoors 
function add(...num) {
  console.log(num)
}

add(4, 5, 6, 7);

let example = 'tomi'

console.log(example.padStart(10, 'y'));

class allmebers {
  constructor(name, age, profesion){
    this.name = name;
    this.age = age
    this.profesion = profesion
  }
  member(){
    console.log(`${this.name} ${this.age} ${this.profesion}`)
  } 
}
const member1 = new allmebers('tom', 45, 'doctor')
const member2 = new allmebers('sam', 35, 'pilot')
member1.member()
member2.member()