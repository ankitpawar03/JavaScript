// lexical scope

const myVar = "myVar100";

function myApp() {
  // const myVar = 'myVar100';

  function myFunc() {
    const myVar = 'myVar200';
    console.log("inside my func", myVar);
    // this function will look for myVar in its own scope and if it does not find it, it will look for it in the parent scope and if it does not find it there, it will look for it in the global scope
    // this is called lexical scope
  }

  const myFunc2 = () => {
    const myFunc3 = () => {
        console.log(myVar);
    }
    myFunc3();
  };

  const meFunc3 = () => {};

  console.log(myVar);
  myFunc();
}

myApp();
