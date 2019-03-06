function pow (a, b) {
    var power = a ** b;
    return (b < 1) ? alert ('Степень числа меньше 1 :(') : alert (a + ' в степени ' + b + ' равно ' + power);

}

var a = prompt('Введите число а: ', '');
var b = prompt('Введите число b: ', '');

pow(a, b);