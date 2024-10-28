// Домашнее задание 11. Event Loop

// возвращается ошибка: User denied Geolocation

'use strict';

function getCurrentPositionPromise() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position.coords);
            },
            (error) => {
                reject(error);
            }
        );
    });
}

getCurrentPositionPromise()
    .then((coords) => {
        console.log(`Широта: ${coords.latitude}, Долгота: ${coords.longitude}`);
        doSomething(coords.latitude, coords.longitude);
    })
    .catch((error) => {
        console.log(`Ошибка: ${error.message}`);
    });