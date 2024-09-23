// Домашнее задание 5. ООП

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function() {
    console.log(this.language + ", " + this.name);
}

const Orс = new Character('орк', 'Азог', 'орочий');
const Elf = new Character('эльф', 'Леголас', 'эльфийский');

Orс.weapon = 'trident';
Orс.hit = function() {
    console.log(this.name + ' наносит удар!');
}

Elf.castSpell = function(spell) {
    console.log(this.name + ' кастует заклинание! ' + spell + '!');
}
Elf.createSpell = function(spell) {
    if (spell === 'curse') return 'Проклятие';
    if (spell === 'fireball') return 'Огненный шар';
    if (spell === 'iceStorm') return 'Ледяная буря';
    return 'Но ничего не выходит';
}

console.log(Orс)

Orс.speak();
Orс.hit();
Elf.speak();
Elf.castSpell(Elf.createSpell('fireball'));