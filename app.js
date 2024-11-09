// Домашнее задание 13. Продвинутый DOM и Events

'use strict';

const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (el) => {
    count.innerHTML = Number(count.innerHTML) + 1;
    for (const el of [...buttons.children]) {
        el.innerHTML = "Нажми меня";
    }
    el.target.innerHTML = "Нажата!";
})