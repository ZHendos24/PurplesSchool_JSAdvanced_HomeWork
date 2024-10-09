// Домашнее задание 7. Принципы ООП в классах

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(this.language + ", " + this.name);
    }
}

class Orc extends Character {
    #weapon;
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.#weapon = weapon;
    }

    hit() {
        console.log(this.name + ' наносит удар оружием: ' + this.#weapon);
    }

    speak() {
        console.log(this.language + ", " + this.name + ". За Орду!");
    }
}

class Elf extends Character {
    constructor(race, name, language) {
        super(race, name, language);
    }

    castSpell(spell) {
        console.log(this.name + ' кастует заклинание! ' + spell + '!');
    }

    createSpell(spell) {
        if (spell === 'curse') return 'Проклятие';
        if (spell === 'fireball') return 'Огненный шар';
        if (spell === 'iceStorm') return 'Ледяная буря';
        return 'Но ничего не выходит';
    }

    speak() {
        console.log(this.language + ", " + this.name + ". Вернем баланс природе!");
    }
}

const orc = new Orc('орк', 'Азог', 'орочий', 'трезубец');
const elf = new Elf('эльф', 'Леголас', 'эльфийский');

console.log(orc)

orc.speak();
orc.hit();
elf.speak();
elf.castSpell(elf.createSpell('fireball'));