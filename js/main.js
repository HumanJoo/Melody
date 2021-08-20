$(document).ready(function () {
    var currentFloor = 2; // переменная где хранится первый этаж
    var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
    var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
    var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
    var modal = $(".modal"); // переменная где хранится модальное окно
    var modalCloseButton = $(".modal-close-button"); // кнопка закрытия модального окна
    var viewFlatsButton = $(".view-flats");

    // функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");  // удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
    });

    
    floorPath.on("click", toggleModal); /* при клике на этаж вызвать окно */
    modalCloseButton.on("click", toggleModal); /* при клике на кнопку закрыть убираю окно */
    viewFlatsButton.on("click", toggleModal); /* при клике на кнопку смотреть квартиры вызываю модальное окно */

    // отслеживаем клик по кнопке вверх
    counterUp.on("click", function () {
        // проверяем значение этажа, которое не должно быть больше 18
        if (currentFloor < 18) {
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 01, а не просто 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });

    // отслеживаем клик по кнопке вниз
    counterDown.on("click", function () {
        // проверяем значение этажа, которое не должно быть меньше 2
        if (currentFloor > 2) {
            currentFloor--; // убавляем один этаж один этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 01, а не просто 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
    });

    // функция открытия-закрытия модального окна
    function toggleModal() {
        modal.toggleClass("is-open");
    }
});