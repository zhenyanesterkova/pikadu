//Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
//Отслеживаем клик по кнопке меню и при нажатии запускаем функцию
menuToggle.addEventListener('click', function(event) {
    //отменяем стандартное поведение ссылки
    event.preventDefault();
    //Вешаем класс на меню, когда кликнули по кнопке
    menu.classList.toggle('visible');

})