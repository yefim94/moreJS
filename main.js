// some JAVASCRIPT  that i decided to brush up on//

// ARRAY
const array = [1,2,3] // cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
let array = ["a", "b", "c"] // can be reassigned

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('cook dinner', 'mop floor');

console.log(chores);
chores.pop();

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
cities.forEach((city) => {
    //executes a provided function once per array element
})
cities.map((city) => {
    //creates a new array with the results of calling a provided function on every element in this array
})
const cityE = cities.filter(city => { 
  //checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
 return  city.indexOf('E') === 0;
});
console.log(cityE);

const nums = [1, 6, 7, 8, 9, 4, 2 , 4];
const totalNums = nums.reduce((acc, fin) => {
  return acc + fin;
});
console.log(totalNums);
const longArray = [['pneumono'], ['ultramicroscopic'], ['silicovolcano'] ,['coniosis!'],];
const longString = longArray.reduce((acc, fin) => {
  //iterates through an array and takes the values of the elements and returns a single value.
  return acc + fin;
});
console.log(longString);

// promises
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
const myExecutor = (resolve, reject) => {
  if(inventory.sunglasses > 0){
    resolve('Sunglasses order processed.')
  } else {
    reject('That item is sold out.');
  }
};
const orderSunglasses = () => {
  return new Promise(myExecutor);
};
const orderPromise = orderSunglasses();
console.log(orderPromise);
// promises
const {checkInventory, processPayment, shipOrder} = require('./somelibrary.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});