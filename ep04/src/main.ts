//type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
  name: string;
  isActive: boolean;
  albums: stringOrNumberArray;
};

//interfaces
// but this is not possible with interfaces
//error
//interface PostId = stringOrNumber

//litral types

let myName: "vipin";
//error
// myName = 'jimmy'
let userName: "vipin" | "joey" | "chandler";
//error
// userName = 'VJ'
// userName = "VIPIN";

const add = (a: number, b: number): number => {
  return a + b;
};

const log = (message: any): void => {
  console.log(message);
};
