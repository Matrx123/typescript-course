class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    //only accesable in subclasses
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, Im ${this.age}`;
  }
}

const vipin = new Coder("vipin", "Death metal", 42);
console.log(vipin.getAge());

//inheritance
class Webdev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}
const sarah = new Webdev("Mac", "Sarah", 25, "lofi");
console.log(sarah.getLang());
//age will still be private
console.log(sarah.getAge());
/////////////////////////////////////////////

//using an interface in a class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}
const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));
//////////////////////////////////////////////////

//static keyword

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: String) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("john");
const steve = new Peeps("Steve");
const amy = new Peeps("amy");

console.log(amy.id);
console.log(steve.id);
console.log(john.id);
console.log(Peeps.getCount());
/////////////////////////////////////////////////////
//getters and setters

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil young", "Led zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "zz top"];
console.log(MyBands.data);
//custom error check
MyBands.data = [5150];
console.log(MyBands.data);
