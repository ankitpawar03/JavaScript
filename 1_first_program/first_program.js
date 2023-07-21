// below line gives an output as printing the data on console
console.log("Hello World");

// In JavaScript, the `console.log()` function is commonly used to display information in the browser's developer console or the Node.js terminal during debugging or testing. However, there is no direct way to destructure the `console.log()` function itself. Destructuring is typically used for objects or arrays, not for functions.

// If you want to use a shorter alias for `console.log()` or extract it from the `console` object, you can create a variable that references the `console.log()` function like this:

const  {log}  = console;

log("This is a shortened version of console.log()");

// In this example, we're using object destructuring to extract the `log` property (which is a reference to the `console.log()` function) from the `console` object and store it in a constant variable called `log`. This allows you to use `log()` instead of `console.log()` throughout your code.

// Keep in mind that if you're working in a browser environment or using a tool like Node.js, the `console` object will already be available by default, so you don't need to explicitly require or import it. However, if you're working with modules or specific environments, you might need to handle imports differently.