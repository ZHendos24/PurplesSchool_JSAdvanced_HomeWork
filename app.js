// Домашнее задание 4. Таймеры


// оборачиваем весь скрипт в одну общую функцию
function timerUntilNewYear() {

    // Функция для получения текстовки сколько осталось до нг
    function leftUntilNewYear(text) {
        const date = new Date();
        const month = date.toLocaleString('ru-RU', { month: 'numeric' });
        const day = date.toLocaleString('ru-RU', { day: 'numeric' });
        const hour = date.toLocaleString('ru-RU', { hour: 'numeric', hour12: false });
        const minutes = date.toLocaleString('ru-RU', { minute: 'numeric' });
        const seconds = date.toLocaleString('ru-RU', { second: 'numeric' });

        // получаем количество дней в текущем месяце
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        // Получаем первый день следующего месяца
        const firstDayNextMonth = new Date(currentYear, currentMonth, 1);
        // Получаем количество дней в текущем месяце
        const daysInCurrentMonth = new Date(firstDayNextMonth - 1).getDate(); 

        // получаем остаток месяцев, дней, часов, минут и секунд до нг
        const monthLeft = 12 - month;
        const daysLeft = daysInCurrentMonth - day;
        const hoursLeft = 23 - hour;
        const minutesLeft = 59 - minutes;
        const secondsLeft = 59 - seconds;

        text.innerHTML = "До нового года осталось: " + monthLeft + declinationOfMonth(monthLeft)
            + daysLeft + declinationOfDays(daysLeft)
            + hoursLeft + declinationOfHours(hoursLeft)
            + minutesLeft + declinationOfMinutes(minutesLeft)
            + secondsLeft + declinationOfSeconds(secondsLeft);
    }

    // получение даты нового года
    function getNewYearDate(year) {
        return new Date(year + 1, 0, 1); 
    }

    // Склонения "месяцев"
    function declinationOfMonth(count) {
        count = Math.abs(count);
        const remainder = count % 10;
        const remainder100 = count % 100;
        if (remainder100 >= 11 && remainder100 <= 19) return " месяцев, ";
        if (remainder === 1) return " месяц, ";
        if (remainder >= 2 && remainder <= 4) return " месяца, ";
        return "  месяцев, ";
    }

    // Склонения "дней"
    function declinationOfDays(count) {
        count = Math.abs(count);
        const remainder = count % 10;
        const remainder100 = count % 100;
        if (remainder100 >= 11 && remainder100 <= 19) return " дней, ";
        if (remainder === 1) return " день, ";
        if (remainder >= 2 && remainder <= 4) return " дня, ";
        return "  дней, ";
    }

    // Склонения "часов"
    function declinationOfHours(count) {
        count = Math.abs(count);
        const remainder = count % 10;
        const remainder100 = count % 100;
        if (remainder100 >= 11 && remainder100 <= 19) return " часов, ";
        if (remainder === 1) return " час, ";
        if (remainder >= 2 && remainder <= 4) return " часа, ";
        return "  часов, ";
    }

    // Склонения "минут"
    function declinationOfMinutes(count) {
        count = Math.abs(count);
        const remainder = count % 10;
        const remainder100 = count % 100;
        if (remainder100 >= 11 && remainder100 <= 19) return " минут, ";
        if (remainder === 1) return " минута, ";
        if (remainder >= 2 && remainder <= 4) return " минуты, ";
        return "  минут, ";
    }

    // Склонения "секунд"
    function declinationOfSeconds(count) {
        count = Math.abs(count);
        const remainder = count % 10;
        const remainder100 = count % 100;
        if (remainder100 >= 11 && remainder100 <= 19) return " секунд";
        if (remainder === 1) return " секунда";
        if (remainder >= 2 && remainder <= 4) return " секунды";
        return "  секунд";
    }

    // подгружаем страницу
    document.addEventListener( 'DOMContentLoaded', function() {
        // создаем контейнер, в котором будет таймер
        const timerDiv = document.createElement("div");
        timerDiv.className = "timer_div";
        const timerText = document.createElement("p");
        timerText.className = "timer_text";
        timerDiv.appendChild(timerText);
        document.body.appendChild(timerDiv);

        const today = new Date();
        const newYearDate = getNewYearDate(today.getFullYear());

        if (today >= newYearDate) {
            timerText.innerHTML = "С новым годом!"
        } 

        if (today < newYearDate) {
            leftUntilNewYear(timerText);
            setInterval(() => {            
                leftUntilNewYear(timerText);
            }, 1000);
        }
    });
}

timerUntilNewYear();