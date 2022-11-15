// var / DO NOT USE
var a = 221;
var a = 1;

// let / Use this
let b = 221;
// let b 221; error
b = 1;

// const / Use this
const c = 221;
// const c = 1; error
// c = 1; error

let boolean = true | false;
let cost = 1.5;
let name = "John" | 'John' | `John` // super power

// Organize your code 
// array
// object

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, true, ''];
const pet = {
    name:"Milo",
}

// console.log(document.querySelector('li').innerText);
// console.log(document.querySelector('li').innerHTML);
// console.log(document.querySelector('li').innerContent);

function myFunction(text) {
    let a = 3;
    let b = 2;
    let answer = a * b;
    console.log(answer);

    const li = document.createElement ('li');
    li.innerText = text;
    document.querySelector ('body').appendChild(li);
    li.style.backgroundColor = 'red';
    li.style.border = '1px solid black';
    li.style.padding = '10px';
    li.style.color = 'white';
    li.style.fontWeight = 'bold';
    li.style.fontSize = '20px';
}

let x = 200;
let y = 100;

myFunction('hello');
myFunction(1 + 2);
myFunction(x > y);
myFunction(x < y);
myFunction(x == y);
myFunction('hello' !== 'hello');

myFunction( `hello ${x} / ${y}`);

// operators
// + - * / % **
// > < >= <= == === != !==
// & || !

// pr.new/link to open github on vscode on website

let accountType = prompt('what is your account type?');
console.log(parseInt(accountType) + 1); // 25a1

// if (accountType === 'premium') { // truethy
//     console.log('can create public and private repositories and have unlimited collaborators for 30 days');
// }
// else if(prompt('are you on a trial?')) {
//     console.log('can create public and private repositories and have unlimited collaborators for 30 days');
// }
// else if(prompt('are you a student?')) {
//     console.log('can create public and private repositories and have unlimited collaborators for 6 months');
// }
// else {
//     console.log('you have basic can create public repositories');
// }

// programming language capabilities

// 1. variables
// 2. data types 
// 3. operators
// 4. control flow
// 5. functions
// 6. objects 
// 7. arrays
// 8. loops
// 9. events
// 10. DOM manipulation

