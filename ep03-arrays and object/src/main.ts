let strArray = ["one", "two", "three"];
let guitar = ["strat", "vipin", 1234];
let mixedData = ["evj", 1984, true];

strArray[0] = "42";
// strArray[0] = 42 =>typrscript error

let test = [];
let bands: string[] = [];
bands.push("vipin");

//tuple
let myTuple: [string, number, boolean] = ["vipin", 42, true];
let mixed = ["vipin", 42, true];

//no error
mixed = myTuple;
//error
//myTuple = mixed;

//objects
let myObj: object;
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
//error
//exObj.prop2 = 'joshi'

type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "vipin",
  active: true,
  albums: [1984, 19, "Solo"],
};

let jp: Guitarist = {
  name: "jimmy",
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello : ${guitarist?.name}!`;
};

console.log(greetGuitarist(evh));

//enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
