// This line of code will target the button and add html inside
document.querySelector('button').innerHTML = 'Hello World!';

// This line of code will target the button class and add html inside
document.querySelector('.btn1').innerHTML = 'This is a button';

// This line of code will target the button id and add html inside
document.querySelector('#mybutton').innerHTML = 782 * 459;

// Target and style the button
'background-color: blue;'
document.querySelector('button').style.backgroundColor = 'blue';

'font-size: 40px;'
document.querySelector('.btn1').style.fontSize = '40px';

document.querySelector('#mybutton').style.backgroundColor = 'green';

// Will add an event listener to the button for a click event
document.querySelector('button').addEventListener('click',function(){
    // alert('You clicked me!')
    button.classList.toggle('active')
});

// Variable
let button = document.querySelector('button')

button.innerHTML = 'Click Me!'

'skeleton-case';
'kebab-case';
'snake_case';
'camelCase';
'PascalCase';
'UPPERCASE_CASE';
/* skeleton-case;
kebab-case;
snake_case;
camelCase;
PascalCase;
UPPERCASE_CASE; */

// let upper_case; not a case
 
let joe;
let Joe;
let JOE;

/* 1+1;
2-1;
3*2;    
4/2

myFavoriteNumber = 6;
leastFavoriteNumber = 3;

myFavoriteNumber - leastFavoriteNumber; */

/*  
Things you can do in Javascript
    1. Change the html of a page 
    2. Change the CSS of a page
    3. Crate Actions to change html or css
    4. Go to the internet and get data

Actions can be triggered
    1. On page load
    2. On users interaction
    3. On a timer
*/