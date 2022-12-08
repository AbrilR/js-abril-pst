
function champMastery(champion){
    const url = ('https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/9KLEUvzuMIXB0dpKR-RPHcY5wOYF_8ifHgjI5mfqaiIkk6M/top/' + champion)

    return fetch(url, {
        method: "GET",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://developer.riotgames.com",
            "X-Riot-Token": "RGAPI-44141a99-9e69-48dc-880c-2190eb925517"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .catch(function(error) {
        console.log('error', error);
    });
}
function displayChampionId(data) {
    console.log(data);
    const id = document.createElement('h1');
    id.src = data.championId;
    document.body.appendChild(id);
    return data;
}
champMastery('Jinx')
    .then(displayChampionId);