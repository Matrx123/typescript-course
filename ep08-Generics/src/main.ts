//dedicated to string only function
const echoStr = (args: string): string => args;
//generic type of above function
const echo = <T>(args: T): T => args;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log("Is Object >>>");
console.log("bool >>>", isObj(true));
console.log("string >>>", isObj("john"));
console.log("null >>>", isObj(null));
console.log("array >>>", isObj([1, 2, 3]));
console.log("object >>>", isObj({ name: "john" }));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

//used with interface
interface TrueReturn<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): TrueReturn<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

//extending interface with generics
interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  //user logic here
  return user;
};

//complex example with "extends"
const getUserProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
    },
  },
];

console.log("users processed >>>", getUserProperty(usersArray, "email"));

//using a generics in a class
class StateObj<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  public get state(): T {
    return this.data;
  }

  public set state(value: T) {
    this.data = value;
  }
}

const store = new StateObj("john");
console.log(store.state);
store.state = "dave";
//error because its state is saved as string, we have to change the initialization
//store.state = 12;
//fix
const myState = new StateObj<string | number | boolean>(15);
myState.state = "dave";
myState.state = true;
myState.state = 42;
