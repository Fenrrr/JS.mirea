var login = prompt("Введите имя пользователя: ", '');
if (login == "Админ") {
    var password = prompt("Введите пароль: ", '');
    if (password == "Черный Властелин") {
        alert('Добро пожаловать!');
    } else if (password == null) {
        alert('Вход отменен!');
    } else {
        alert('Пароль неверен!');
    }
    } else if (login == null) {
        alert('Вход отменен!');
    } else {
        alert('Я Вас не знаю!');
    }