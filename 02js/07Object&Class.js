const user = {
    name: 'Pratik',
    age: 26,
    city: 'Mumbai',
    //function aka methods
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

console.log(user);
console.log(user.name);
const greet1 = user.greet();
console.log(greet1);

// we can also make class it will work as a blueprint

class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

const User1 = new User("Sonu",26); // creating new object
console.log(User1); // this will give me the obj as an output
User1.greet()