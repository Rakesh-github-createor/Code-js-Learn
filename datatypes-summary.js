// premitive data types

// 7 types of premitive data types: string,number,boolean,null,undefined,symbol,bigInt

// referance (Non-premitive) data types

// 2 types of referance data types: object,array,function

// ******string*********** //
const id = Symbol('123')
const anotherId = Symbol('123') // symbol is unique
console.log(id === anotherId) // false

const bigNumber = 3445888889756n

// Array, Object , Functions

const Personal =[Name,age,gender]
let myobj = {
    name ='rakesh'
    age = 23
    gender = 'male'
}

const myfunction = function(){
    console.log('hello world')  
}
console.log(typeof bigNumber)


// ***********Stack(premitive) and Heap(Non-premitive)************
let myYoutubename = "RakeshYoutubedotcom"
let anothername = myYoutubename
anothername = "RakeshYoutubedotcom2"
console.log(myYoutubename)
console.log(anothername)

let UserOne = {
    email : "user@gmail.com",
    Upi : "user@upi"
}
console.log(UserOne.email)

let UserTwo = UserOne       // User2 is refering to User1
UserTwo.email = "APBTwo@gmail.com"
console.log(UserTwo.email);