const userNameData = ["Pratik","Rawat"]

const firstName = userNameData[0];
const lastName  = userNameData[1];

// instead of this we can do this 
// this call destructuring

const [firstN,lastN] = ["Sonu","Rawat"]

console.log(firstN);
console.log(lastN);

// its also work on obj

const user = {
    name: "sonu",
    age :25
}

const uname = user.name;
const uage = user.age;

// now destructuring

const {userName,userAge} = {userName: "Ram", userAge: 32}

console.log(userName);
console.log(userAge);