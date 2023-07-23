// function return function
// function as a return value of another function
// we can also call it as higher order function because it takes another function as an argument or returns another function as a return value

function myFunc(){

    // function myFunc2(){
    //     console.log("inside myFunc2")
    // }
    // return myFunc2;
    // or
    return function myFunc2(){
        console.log("inside myFunc2");
    }
}
const ans = myFunc();
ans();

