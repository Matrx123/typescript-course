//type Aliases
//interfaces
// but this is not possible with interfaces
//error
//interface PostId = stringOrNumber
//litral types
var myName;
//error
// myName = 'jimmy'
var userName;
//error
// userName = 'VJ'
// userName = "VIPIN";
var add = function (a, b) {
    return a + b;
};
var log = function (message) {
    console.log(message);
};
var subtract = function (a, b) {
    return a - b;
};
//interface
// interface mathFunction {
//   (a: number, b: number): number;
// }
var multiply = function (c, d) {
    return c * d;
};
log(multiply(2, 2));
//type guard, optional parameter
//part1
var addAll = function (a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//part2
var sumAll = function (a, b, c) {
    if (a === void 0) { a = 10; }
    if (c === void 0) { c = 2; }
    return a + b + c;
};
log(addAll(2, 2));
log(addAll(2, 2, 2));
log(sumAll(2, 2));
log(sumAll(2, 2, 2));
//we have to pass undefined because
log(sumAll(undefined, 2));
