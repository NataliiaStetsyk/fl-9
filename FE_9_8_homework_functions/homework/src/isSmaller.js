let isSmaller = function(a, b) {
    return !isBigger(a, b) && a !== b;
}

let isBigger = function(a, b) {
    return a > b;
}