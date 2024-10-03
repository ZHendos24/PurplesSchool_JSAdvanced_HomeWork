// Домашнее задание 5. ООП

// Передалал задание, немного сложно далось, с классами все намного проще) И видимо тут я по длинному пути пошел

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Character.prototype.speak = function() {
    console.log(this.language + ", " + this.name);
};

const Orc = function(race, name, language) {
    Character.call(this, race, name, language);
};
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.weapon = 'trident';
Orc.prototype.hit = function() {
    console.log(this.name + ' наносит удар!');
}

const Elf = function(race, name, language) {
    Character.call(this, race, name, language);
};
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.castSpell = function(spell) {
    console.log(this.name + ' кастует заклинание! ' + spell + '!');
}
Elf.prototype.createSpell = function(spell) {
    if (spell === 'curse') return 'Проклятие';
    if (spell === 'fireball') return 'Огненный шар';
    if (spell === 'iceStorm') return 'Ледяная буря';
    return 'Но ничего не выходит';
}

const orc = new Orc('орк', 'Азог', 'орочий');
const elf = new Elf('эльф', 'Леголас', 'эльфийский');

console.log(orc)

orc.speak();
orc.hit();
elf.speak();
elf.castSpell(elf.createSpell('fireball'));