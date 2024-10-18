// Домашнее задание 8. SOLID

function getRandomItem(users){
    const rndIndex = Math.floor(Math.random() * users.length);
    return users[rndIndex]
}

class Billing {
    #amount = 1000;

    get amount() {
        return this.#amount;
    }

    calculateTotal() {
        return this.#amount;
    }
}

class FixedBilling extends Billing {
    constructor(units) {
        super();
        this.units = units;
    }

    calculateTotal() {
        if (this.units) return this.amount * this.units;
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(user) {
        super();
        this.user = user;
    }

    calculateTotal() {
        if (this.user) return this.amount * this.user.hours;
        return this.amount;
    }
}

class ItemBilling extends Billing {
    constructor(users) {
        super();
        this.users = users;
    }

    calculateTotal() {
        if (this.users) return this.amount * this.users.length;
        return this.amount;
    }
}

// const billing = new Billing();

const f_billing = new FixedBilling(100);
const h_billing = new HourBilling(getRandomItem(users));
const i_billing = new ItemBilling(users);

console.log(f_billing.calculateTotal());
console.log(h_billing.calculateTotal());
console.log(i_billing.calculateTotal());