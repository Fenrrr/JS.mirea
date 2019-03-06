var a = +prompt('Введите а от 0 до 3: ', '');
switch (a) {
    case 0:
        alert ('0');
        break;
    case 1:
        alert ('1');
        break;
    case 2:
    case 3:
        alert ('2,3');
        break;
    default:
        alert ('Вы указали недопустимое значение!');
    }