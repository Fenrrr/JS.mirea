function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
function doubleCheckAge(age) {
   return (age > 18) || confirm ('Родители разрешили?');
}
var age = prompt('Сколько тебе лет?', '');
checkAge(age);
doubleCheckAge(age);