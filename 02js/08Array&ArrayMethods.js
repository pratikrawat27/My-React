const hobby = ["football","cricket","summing","Music"]
console.log(hobby[1])

// method 
hobby.push("Working Out") //add

const index = hobby.findIndex((item)=>{
    return item === "football"
}) // find the index of the element and it take a function

console.log(index)

const newHobby = hobby.map((item) => {
    return item + "!" //transform in another item
}); //it also take a function as an input. it transform every item in an array to another item.

console.log(newHobby)

// for a obj you have to do const newHobby = hobby.map((item) => ({})) like this
const newHobbyy = hobby.map((item) => ({fav: item})); 
console.log(newHobbyy)