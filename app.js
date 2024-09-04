// Домашнее задание 2. Расчёты и math

'use strict';

function rollTheDice(dice) {
    if (dice.toLowerCase() === 'd4' || 
        dice.toLowerCase() === 'd6' || 
        dice.toLowerCase() === 'd8' || 
        dice.toLowerCase() === 'd10' || 
        dice.toLowerCase() === 'd12' || 
        dice.toLowerCase() === 'd14' || 
        dice.toLowerCase() === 'd16' || 
        dice.toLowerCase() === 'd18' || 
        dice.toLowerCase() === 'd20') { 
        const min = 1;
        const max = parseInt(dice.slice(1));
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return null;
}

const result = rollTheDice('d20');
console.log(result);
