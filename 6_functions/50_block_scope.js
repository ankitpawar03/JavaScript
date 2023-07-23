// block scope vs function scope

// let and const are block scoped
// var is function scoped

{
    let firstName = "John";
}

// console.log(firstName); // this will throw an error because let is block scoped
// var is function scoped

{
    var lastName = "Doe";
}

{
    console.log(lastName);
}

console.log(lastName); // this will not throw an error because var is function scoped

function myApp() {

    if(true) {
        let myVar = "myVar100";
        console.log(myVar);

        var myVar2 = "myVar200";
    }
    // console.log(myVar);
    console.log(myVar2)
}

myApp();
console.log(myVar2);
// we can not access myVar because it is block scoped and we can access myVar2 because it is function scoped