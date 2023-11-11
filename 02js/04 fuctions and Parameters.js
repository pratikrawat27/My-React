function greet () {
    console.log('Hello, world!');
}

function greet1 (firstName,LastName){
    console.log(firstName);
    console.log(LastName);
    console.log("You are best")
}
function greet2 (firstName,LastName){
    return "Iam" + firstName + LastName +". Nice to meet you"
}

greet();
greet();
greet1("Pratik","Rawat");
greet1("Sonu","Rawat");
console.log(greet2("Sonu","Rawat"));
// best practices
const greet3 = greet2("Sonu","Rawat");
console.log(greet3)