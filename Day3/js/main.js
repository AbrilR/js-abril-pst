// boolean (true/false)
// string (" ", ' ', ` `,)
// number

myName = "John";
myName = 'John';
myName = `John`; // super power

// Organize your code
// array
// object

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, ''];
const pet = {
    name: "Milo",
    age: 2,
    color: "black",
    isGoodBoy: true,
}

undefined;
null;

// use let/const for variables not var

let selectedCharacter = null;

let falsey = [null, undefined, false, 0, '', NaN];
let truthy = [1.2, -2, -3, 4, 5,  true, 'hello', {}, [], function() {}]
// examples of how to get NaN
// 1. 0/0 divided by 0
// 2. 1 * 'a'

// console.log(); for testing functions, checking values AKA great troubleshooting

// * bigInt is  something new in JS
// * bigInt is a new data type that can represent integers with arbitrary precision
// * bigInt is created by appending n to the end of an integer or by calling the bigInt function
// * is rare to use bigInt

console.log('jim' === 'jim'); //true

// theory of 20/80
// 20% of the code you will USE 80% of the time

// pop up methods 
// tell the user something
// alert('hello');
// let myAlert= ('the answer is 43');
// ask the user something (yes/no)
// confirm ('are you sure?');
// let myYesNo = confirm('are you sure?');
// ask the user something (input)
// prompt ('what is your name?');
// let myTextAnswer = prompt('what is your name?');

// console.log(myAlert, myYesNo, myTextAnswer);

function askQuestion(){
    let color = prompt('what color?');
    console.log(color);
    document.querySelector('body').style.backgroundColor = color;
}

// collect user input
// prompts/confirm/alert
// mouse events
// keyboard events
// form events
// window events (load, resize, scroll, unload)
// document events (DOMContentLoaded)

// if window is being closed

window.onbeforeunload = confirmExit;
    function confirmExit() {
        return "You have attempted to leave this page. Are you sure?";
    }
window.addEventListener('mousemove', function(event){
    console.log(event)
    document.querySelector('body').style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, 100)`;
})

const colors= ['red', 'blue', 'green', 'yellow',]
const index = Math.ceil(Math.random() * colors.length);
console.log(colors[index]);