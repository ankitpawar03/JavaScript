// methods
// methods are functions inside objects and classes

// this is a method inside an object and we can call it using dot notation like person.about() or person['about']() or we can call it using a variable like const about = person.about; about() but in this case this keyword will refer to the global object and we don't have personName and age in global object so it will print undefined for both personName and age and we will get an error for personName and age if we use strict mode in js file or in js code using 'use strict' at the top of the file or in the function using 'use strict' at the top of the function and if we don't use strict mode then it will print undefined for both personName and age and will not throw an error for personName and age and will not stop the execution of the program and will continue the execution of the program and will print undefined for both personName and age and will not throw an error for personName and age and will not stop the execution of the program and will continue the execution of the program

// person = {
//     personName : 'John',
//     age : 18,
//     about : function(){
//         // console.log("Person name is john and age is 8")
//         // instead of hardcoding the values we can use this keyword

//         // console.log(`person name is ${personName} and age is ${age}`)
//         // we can not use this keyword here because this keyword will refer to the global object and we don't have personName and age in global object

//         console.log(this)
//         console.log(`person name is ${this.personName} and age is ${this.age}`)
//     }
// }

// console.log(person.about())
// person.about()

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}

const person1 = {
    firstName: 'John',
    age: 30,
    about: personInfo,
}

const person2 = {
    firstName: 'Mohn',
    age: 90,
    about: personInfo,
}
const person3 = {
    firstName: 'Vohn',
    age: 80,
    about: personInfo,
}
person1.about()
person2.about()
person3.about()

personInfo()