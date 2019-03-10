// реализация через рекурсию
function fib(n) {
    if (n > 1) {
        return fib(n-1) + fib(n - 2);
    } else {
        return n;
    }
}

alert(fib(7));