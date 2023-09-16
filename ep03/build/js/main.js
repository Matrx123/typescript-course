"use strict";
let strArray = ["one", "two", "three"];
let guitar = ["strat", "vipin", 1234];
let mixedData = ["evj", 1984, true];
strArray[0] = "42";
// strArray[0] = 42 =>typrscript error
let test = [];
let bands = [];
bands.push("vipin");
//tuple
let myTuple = ["vipin", 42, true];
let mixed = ["vipin", 42, true];
//no error
mixed = myTuple;
//error
//myTuple = mixed;
//objects
let myObj;
//no error as [] is an object
myObj = [];
myObj = bands;
myObj = {};
const exObj = {
    prop1: "vipin",
    prop2: true,
};
//noerror
exObj.prop2 = false;
let evh = {
    name: "vipin",
    active: true,
    albums: [1984, 19, "Solo"],
};
let jp = {
    name: "jimmy",
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    return `Hello : ${guitarist === null || guitarist === void 0 ? void 0 : guitarist.name}!`;
};
console.log(greetGuitarist(evh));
//enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
