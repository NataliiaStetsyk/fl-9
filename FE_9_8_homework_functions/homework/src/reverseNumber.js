const i = 0,
    j = 10;
let reverseNumber = function(number) {
    let reversed = i;
    while (number !== i) {
        reversed *= j;
        reversed += number % j;
        number -= number % j;
        number /= j;
    }
    return reversed;
}