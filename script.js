// НАЧАЛО СКРИПТА

// оборачиваем весь скрипт в одну общую функцию
function showRooms() {

    // получение даты в нужном формате - "29/09/2023"
    function getFormatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return day + '/' + month + '/' + year;
    }

    // Склонения "гостей"
    function getGuestDeclension(count) {
        count = Math.abs(count);
        const remainder = count % 10;
        const remainder100 = count % 100;
        
        if (remainder100 >= 11 && remainder100 <= 19) {
            return " гостей, ";
        } else if (remainder === 1) {
            return " гость, ";
        } else if (remainder >= 2 && remainder <= 4) {
            return " гостя, ";
        } else {
            return " гостей, ";
        }
    }

    // склонение "ночей"
    function getNightDeclension(count) {
        count = Math.abs(count);
        const remainder = count % 10;
        const remainder100 = count % 100;

        if (remainder100 >= 11 && remainder100 <= 19) {
            return " ночей";
        } else if (remainder === 1) {
            return " ночь";
        } else if (remainder >= 2 && remainder <= 4) {
            return " ночи";
        } else {
            return " ночей";
        }
    }

    // подгружаем страницу
    document.addEventListener( 'DOMContentLoaded', function() {

        // создаем шапку, где будет инфо о дате заезда, дате выезда и количестве гостей
        const header = document.createElement("div");
        header.className = "header";

        const textHeader = document.createElement("p");
        textHeader.className = "text_header";
        const arrivalDate = getFormatDate(data.Find.request_in);
        const dateOfDeparture = getFormatDate(data.Find.request_out);
        textHeader.innerHTML = "Даты: " + arrivalDate + " - " + dateOfDeparture
        + ", " + data.Find.guests + getGuestDeclension(data.Find.guests) + data.Find.nights + getNightDeclension(data.Find.nights);

        header.appendChild(textHeader);
        document.body.appendChild(header);

        // создаем общий контейнер, куда потом будем добавлять div с информацией по каждому номеру
        const main = document.createElement("div");
        main.className = "main";
        document.body.appendChild(main);

        // Создаем массив из объектов с комнатами из объекта rooms, чтобы прогнать все комнаты через цикл
        const arrayRooms = Object.values(rooms);
        const arrayRoomsCount = arrayRooms.length;

        // создаем цикл для вывода всех комнат в отдельных div
        for ( let i = 0; i < arrayRoomsCount; i++) {

            const room = document.createElement("div");
            room.className = "room";

            // вставляем картинку
            const imageDiv = document.createElement("div");
            imageDiv.className = "image-div";
            const image = document.createElement("img");
            image.src = arrayRooms[i].image;
            image.alt = "Картинка";

            // создаем текстовку c инфо о комнате
            const textDiv = document.createElement("div");
            textDiv.className = "text-div";
            const text = document.createElement("p");
            text.innerHTML = arrayRooms[i].Name
            + '<br><br>' + arrayRooms[i].BaseArea + ' кв. м., до ' + arrayRooms[i].MaxGuestCount + ' мест'
            + '<br><br>Сумма без скидки: ' + arrayRooms[i].base + " ₽"
            + '<br>Скидка: ' + arrayRooms[i].discount + "%"
            + '<br>Сумма со скидкой: ' + arrayRooms[i].price + " ₽";

            // добавляем элементы друг в друга и выводим на страницу
            imageDiv.appendChild(image);
            textDiv.appendChild(text);
            room.appendChild(imageDiv);
            room.appendChild(textDiv);
            main.appendChild(room);

        }
    });
}

// вызываем функцию
showRooms();

// КОНЕЦ СКРИПТА