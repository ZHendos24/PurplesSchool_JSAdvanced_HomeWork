// Домашнее задание 8. SOLID

class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        const units = this.getUnits();
        if (units) return this.amount * units;
        return this.amount;
    }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    getUnits() {
        return 1;
    }
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    getUnits() {
        return this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    getUnits() {
        return this.items;
    }
}

let fixedBilling = new FixedBilling(650, 5);
let hourBilling = new HourBilling(530, 5);
let itemBilling = new ItemBilling(370, 3);

console.log(fixedBilling);
console.log(fixedBilling.calculateTotal());
console.log(hourBilling);
console.log(hourBilling.calculateTotal());
console.log(itemBilling);
console.log(itemBilling.calculateTotal());