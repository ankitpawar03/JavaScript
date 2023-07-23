// callback function

function myFunc(callback){

    console.log('we can do something here and call the callback function')
    // we can do something here and call the callback function
    callback("Rohit");
    // this will call the function that is passed as an argument to myFunc
}

// // myFunc("[1,2,3]");
// myFunc({name: 'John', age: 23});

function myFunc2(name){
    // here myFunc2 is a callback function
    console.log('I am callback function')
    console.log(`Hello ${name}`)
    // here we are using the name parameter that is passed to myFunc2
}

myFunc(myFunc2);

