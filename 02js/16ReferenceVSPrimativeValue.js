let message = "Hello";
message = "Hello There" //creating new string not old

// methods
message = message.concat(" There") //this will give you a new string not edit the old string 
//  we cant change/edit the values but create new value 

// but it will change for obj and array

const hobbies = ["Football","Summing"]
hobbies.push("Running");
console.log(hobbies); // now this will edit and add running in hobbies