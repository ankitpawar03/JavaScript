// function iside function

const app = function () { 
    const myFunction = function () {
        console.log("Hello from myFunction");
    }

    const add = function (a, b) {
        return a + b;
    }

    const mult = function (a, b) {
        return a * b;
    }

    console.log("inside app");
    myFunction();

    console.log(add(2, 3));

    console.log(mult(2, 3))

}
app();