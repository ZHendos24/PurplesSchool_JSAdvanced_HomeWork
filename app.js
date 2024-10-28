// Домашнее задание 11. Event Loop

'use strict';

function doSomething(latitude, longitude) {
    console.log(`Широта: ${latitude}, Долгота: ${longitude}`)
}

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
        doSomething(coords.latitude, coords.longitude);
    })
    .catch((error) => {
        console.log(`Ошибка: ${error.message}`);
    });