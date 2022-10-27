const age = 21;
let message;
let message2 = (age >= 18) ? "You shall pass" : "You shall not pass";

if (age >= 18){
    message = 'You shall pass';
} else {
    message ='You shall not pass';
}
console.log(message);
console.log(message2);