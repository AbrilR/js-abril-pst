// pokeapi.co

// 1. Get the data from the API
const SERVER_URL = 'https://pokeapi.co/api/v2/pokemon/';

function getPokemon(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        console.log('error', error);
    });
}

function displayPokemon(data) {
    console.log(data);
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    document.body.appendChild(img);
    return data;
}

function displayPokemonName(data) {
    const name = document.createElement('h1');
    name.innerText = data.name;
    document.body.appendChild(name);
    return data;
}


getPokemon('mewtwo')
    .then(displayPokemon)
    .then(displayPokemonName)


getPokemon('pikachu')
    .then(displayPokemon)
    .then(displayPokemonName)   
        

