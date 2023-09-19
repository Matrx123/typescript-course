"use strict";
class Coder {
    constructor(name, music, age, 
    //only accesable in subclasses
    lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    getAge() {
        return `Hello, Im ${this.age}`;
    }
}
const vipin = new Coder("vipin", "Death metal", 42);
console.log(vipin.getAge());
//inheritance
class Webdev extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const sarah = new Webdev("Mac", "Sarah", 25, "lofi");
console.log(sarah.getLang());
//age will still be private
console.log(sarah.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));
//////////////////////////////////////////////////
//static keyword
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
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
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
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
