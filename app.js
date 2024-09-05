// Домашнее задание 3. Даты и время

'use strict';

const date = "2009-03-29";

function ageVerification(birthdaydate) {
    const [year, month, day] = birthdaydate.split('-').map(Number);
    const birthdayDateObj = new Date(year, month - 1, day);
    const today = new Date();
    // Получаем возраст
    const age = today.getFullYear() - birthdayDateObj.getFullYear();
    // Если день рождения уже прошел в этом году, то прибавляем год к возрасту
    if (today.getMonth() < birthdayDateObj.getMonth() || (today.getMonth() === birthdayDateObj.getMonth() && today.getDate() < birthdayDateObj.getDate())) age--;
    
    if (age >= 14) return true;
    return false
}
  
console.log(ageVerification(date));