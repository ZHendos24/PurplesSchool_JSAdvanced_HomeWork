// Домашнее задание 12. Современный Асинхронный JavaScript

'use strict';

// Список промисов с рандомными задержками
const promise1 = new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 200, 'Первый промис');
});

const promise2 = new Promise((reject) => {
    setTimeout(reject, Math.random() * 200, 'Второй промис');
});

const promise3 = new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 200, 'Третий промис');
});

function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(
                value => resolve(value),
                reason => reject(reason)
            );
        });
    });
}

myPromiseRace([promise1, promise2, promise3])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });