const myName = 'Felipe Gavilan'; //Single quotes
const countryName = "Kenya";

const greeting = "Hello, "+ myName + ", how are you?";
const greeting2 = `Hello, ${myName}, how are you? `// backticks

const add = (a,b) => a+b;

const message = `Hello, ${myName} 

This is a message for you.

The sum of 2 and 2 is ${add(2,2)}

Bye bye`;

console.log(message);
