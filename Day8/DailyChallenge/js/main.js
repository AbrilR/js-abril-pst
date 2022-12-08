const dog = {
    name: "Jewel",
    breed: "Chihuahua",
    age: 3,
    speak: "Woof!",
    shake: "Lifts paw",
}

function trick(dog, action){
    alert(`${dog.name} ${dog.[action]}`)
}
function showDog(dog){
    const showname = document.createElement('h1');
    const showbreed = document.createElement('h2');
    const showage = document.createElement('h3');
    showname.innerText = dog.name
    showbreed.innerText = dog.breed
    showage.innerText = dog.age
    document.body.appendChild(showname);
    document.body.appendChild(showbreed);
    document.body.appendChild(showage);
    return dog;
}

trick(dog, "speak")
trick(dog, "shake")

showDog(dog);