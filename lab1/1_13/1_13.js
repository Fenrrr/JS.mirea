while (true) {
    var number = prompt('Введите любое число больше 100: ', '');
    if (number == null) {
        alert('До свидания!');
        break;
    }
    if (number <= 100) {
        alert('Набранное Вами число меньше или равно 100, пожалуйста, повторите попытку.');
    } else if (number > 100) {
        alert('Спасибо!');
        break;
    } else if (isNaN(number)) {
        alert('Пожалуйста, введите число, а не строку.');
    }
}