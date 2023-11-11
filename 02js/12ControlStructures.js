const pass = prompt("Enter Password");

if(pass === "Hello"){
    console.log("Hello Work");
}else if(pass === "hello"){
    console.log("hello Works");
}else{
    console.log("Access not granted")
}

//imp for loop that loop through array

const hobbies = ["football","cricket","summing","Music"]

for(const h of hobbies){
    console.log(`I like ${h}`);
}