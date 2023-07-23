// default parameter

// function addTwo(a, b){

//     if(typeof b === 'undefined'){
//         // before ES6 we used to write the default parameter like this
//         b = 2;
//     }
//     return a + b;
// }

// const ans = addTwo(2);
// console.log(ans);

function addTwo(a, b=10){
    // after ES6 we can write the default parameter like this and it will work
    return a + b;
}

const ans = addTwo(2);
console.log(ans);

const ans2 = addTwo(2,1);
console.log(ans2);
