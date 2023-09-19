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
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
log(addAll(2, 2));
log(addAll(2, 2, 2));
log(sumAll(2, 2));
log(sumAll(2, 2, 2));
//we have to pass undefined because
log(sumAll(undefined, 2));
//Rest parameters means (rest of the parameters)
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
//didn't send the array but it will represent it as array
log(total(1, 2, 3, 4, 5));
//never type, when we explicitely throw error
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//without check type was never , with check it becomes void
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom typeguard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//undefined return or use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
