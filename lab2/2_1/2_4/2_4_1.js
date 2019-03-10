// реализация через цикл
function sumTo (n) {
    var sum = 0;
    for (var i = 0; i <= n; i++ ) {
       sum += i;
    }
    return sum;
}

alert (sumTo(100));