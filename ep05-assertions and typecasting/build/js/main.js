"use strict";
//convert to more or less specific
let a = "hello";
//assertion
let b = a; // less specific
let c = a; //more specific
let d = "hello again";
let e = "volla!";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
//be carefull with assertion as this is telling typescript there is no problem but we know it will return a string
let nextVal = addOrConcat(2, 2, "concat");
//unknown type
// 10 as string => Error
//no error due to unknown
10;
//dom
const myImg = document.getElementById("#img");
myImg.src;
