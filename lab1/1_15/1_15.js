var browser = prompt('Введите название Вашего бразузера: ', '');
if (browser == 'IE') {
    alert ('О, да у Вас IE!');
} else if (browser == 'Chrome' ||
    browser == 'Firefox' ||
    browser == 'Safari' ||
    browser == 'Opera') {
    alert ('Да, и эти браузеры мы поддерживаем!');
} else {
    alert ('Мы надеемся, что и в Вашем браузере всё ок!');
}