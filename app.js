// Домашнее задание 9. Асинхронный JavaScript

'use strict';

const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.send();

request.addEventListener("load", function() {
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.abilities[0].ability.url);

    const request = new XMLHttpRequest();
    request.open("GET", data.abilities[0].ability.url);
    request.send();

    request.addEventListener("load", function() {
        const data = JSON.parse(this.responseText);
        console.log(data);
        let effect;
        for (let i = 0; i < data.effect_entries.length; i++) {
            if (data.effect_entries[i].language.name === "en")
                effect = data.effect_entries[i].effect;
        }
        if (effect) console.log(effect);
    });
});