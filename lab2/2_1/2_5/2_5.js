function factortial(n) {
    if (n > 1) {
        return n * factortial(n - 1)
    } else {
        return n;
    }
}

alert(factortial(5));