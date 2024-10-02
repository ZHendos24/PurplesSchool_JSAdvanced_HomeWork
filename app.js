// Домашнее задание 6. Классы

class Car {
    #make;
    #model;
    #run;
    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get showMileage() {
        return this.#run;
    }

    set changeMileage(newMileage) {
        if (!newMileage) {
            return;
        }
        this.#run = newMileage;
        return this.#run;
    }

    info() {
        console.log(this.#make + ", " + this.#model + ", " + this.#run);
    }
}

const car = new Car("Ford", "Focus 3", "193000");

car.info();
car.changeMileage = "200000";
console.log(car.showMileage);
car.info();