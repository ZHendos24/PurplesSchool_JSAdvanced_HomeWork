(function () {
    'use strict';

    class Task {
        constructor(message) {
            this.message = message;
        }

        run() {
            console.log(this.message);
        }
    }

    class User {
        constructor(task) {
            this.task = task;
        }

        do() {
            this.task.run();
        }
    }

    // Домашнее задание 15. Работа с NPM


    const task = new Task("писать код");
    const user = new User(task);

    user.do();

})();
