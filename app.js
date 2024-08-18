// Домашнее задание 1. Maps и Sets

'use strict';

const arrayOfNames = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
]

// создаю новый массив, в который буду добавлять уникальные объекты из массива arrayOfNames
let arrayOfUniqueNames = [];

// создаю сет из уникальных id из массива arrayOfNames
const setOfIdNames = new Set(arrayOfNames.map(el => el.id));

// сверяю id из массива arrayOfNames с уникальным id из сета setOfIdNames 
// и добавляю уникальный объект в новый массив arrayOfUniqueNames 
for (const id of setOfIdNames) {
    const findOfName = arrayOfNames.find(name => name.id === id);
    arrayOfUniqueNames.push(findOfName);
}

console.log(arrayOfUniqueNames);