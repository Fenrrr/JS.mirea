var calculator = {
    read: function () {
        this.number_one = +prompt('Введите 1е значение: ');
       this.number_two = +prompt('Введите 2е значение: ');
    },
    sum: function () {
        return this.number_one + this.number_two;
    },
    mul: function () {
        return this.number_one * this.number_two;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul())