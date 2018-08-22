const i = 1,
    j = -1;
let getClosestToZero = function(...arr) {
    return arr.sort(function(a, b) {
        return Math.abs(a) > Math.abs(b) ? i : j;
    })[0];
}