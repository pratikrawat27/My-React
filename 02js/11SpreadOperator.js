// Let merge 1 hobby list with another
const hobby = ["Football", "Summing"];
const hobby2 = ["Music","Cricket"];

const newHobby = [...hobby,...hobby2];
console.log(newHobby);

// obj
// this is how you merge an obj
const person = {name: 'John', age:30};
const person2 = {sex: 'male', age:30,...person};
console.log(person2);