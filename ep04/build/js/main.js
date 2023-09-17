"use strict";
//type Aliases
//interfaces
// but this is not possible with interfaces
//error
//interface PostId = stringOrNumber
//litral types
let myName;
//error
// myName = 'jimmy'
let userName;
//error
// userName = 'VJ'
// userName = "VIPIN";
const add = (a, b) => {
    return a + b;
};
const log = (message) => {
    console.log(message);
};
const subtract = function (a, b) {
    return a - b;
};
//interface
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
log(multiply(2, 2));
//type guard, optional parameter
//part1
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
//part2
const addAll2 = (a, b, c = 2) => {
    return a + b + c;
};
log(addAll(2, 2));
log(addAll(2, 2, 2));
log(addAll2(2, 2));
log(addAll2(2, 2, 2));
