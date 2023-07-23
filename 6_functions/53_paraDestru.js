// parameter destructuring - it is used to assign the values of the object properties to the variables

const person = {

    firstName: 'John',
    gender: 'male'
}

// function printDetails(obj){

//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

function printDetails({firstName, gender, age}){
    
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);