// const nav = document.createElement('nav');

// document.body.appendChild(nav);

// const logoDiv = document.createElement('div');
// const heroDiv = document.createElement('div');

// nav.appendChild(logoDiv);
// document.body.appendChild(heroDiv);

// const ul = document.createElement('ul');
// const liOne = document.createElement('li');
// const liTwo = document.createElement('li');

// liOne.textContent = 'Home';
// liTwo.textContent = 'About';

// logoDiv.appendChild(ul);
// ul.appendChild(liOne)
// ul.appendChild(liTwo)

// const h1 = document.createElement('h1');
// h1.textContent = 'hero';

// heroDiv.appendChild(h1);

// Constants
const nav = document.createElement('nav');
const logoElement = document.createElement('div');
const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
const hero = document.createElement('div');
const h1 = document.createElement('h1');

// Effects
logoElement.innerText = "Logo";
// li1.innerText = "Home";
// li2.innerText = "About"
// li3.innerText = "Contact";
h1.innerText = "Hero";

// Classes
logoElement.classList.add('logo');
hero.classList.add('hero');

// Appends
document.body.append(nav);
document.body.append(hero);
nav.append(logoElement);
nav.append(ul);
// ul.append(li1);
// ul.append(li2);
// ul.append(li3);
hero.append(h1);

// Colored lis
const colors = [
    "pink",
    "lightblue",
    "lavender",
    "lightgreen",
    "orange",
    "yellow"
];

// !! Comment back lis and comment this out !!
colors.forEach(function(color, index){
    const li = document.createElement("li");
    li.innerText = 'change color to ' + color;
    li.style.color = color;
    ul.append(li);
    li.addEventListener('click', function() {
        hero.style.color = colors[index + 1];
        if (colors[index + 1] === undefined){
            hero.style.color = colors[0];
        }
    })
});

// li1.addEventListener('click', function() {
//     hero.style.color = "pink";
// });
// li2.addEventListener('click', function() {
//     hero.style.color = "lightblue";
// });
// li3.addEventListener('click', function() {
//     hero.style.color = "lavender";
// });
