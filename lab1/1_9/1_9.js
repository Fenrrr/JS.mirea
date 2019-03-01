var login = prompt('Введите логин', '');

var message = ( login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте!' :
    (login == '') ? 'Нет логина!' :
        'Отмена ввода логина';

alert (message);

