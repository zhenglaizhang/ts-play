class Student {
  fullName: string;
  age?: number;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = firstName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  optional?: number;
}

function greeter(person: Person) {
  return "hello" + person;
}

let user = {
  firstName: "Jane",
  lastName: "User"
};

greeter(user);

const s = new Student("a", "b");
greeter(s);
console.log(s);

let isDone: boolean = true;
let age: number = 38;
let sentence: string = `Hello my name is ${s.firstName}.

I'll be ${age + 1} years old next year`;
console.log(sentence);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: Student[] = [];

let x: [string, number] = ["hello", 10];

enum Color {
  Red = 1, // default to 0
  Green,
  Blue
}
let c: Color = Color.Green;
// Color[0]  // undefined
let cname: string = Color[1]; // Red
console.log(cname);

let unusable: void = undefined;
unusable = null; // ok if --structNullChecks is not given

let u: undefined = undefined;
let n: null = null;

function error(msg: string): never {
  throw new Error(msg);
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}

// let a = error("");

function create(o: object | null): void {}
create(null);
create({ prop: 0 });

let sv: any = "this is a string";
let svLen: number = (<string>sv).length;
let svLen2 = (sv as string).length;

function printLabel(o: { label: string }) {
  console.log(o.label);
}

console.log(s.age);

// option bags
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

interface Point {
  readonly x: number;
  readonly y: number;
}

let a = [1, 2, 3];
let ro: ReadonlyArray<number> = a;
a = ro as number[];

// function types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
};

// indexable types
interface StringArray {
  [index: number]: string;
}
let ma: StringArray = ["bob", "fred"];
console.log(ma[0]);

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
console.log(square.color);
console.log(square.sideLength);
interface PenStroke {
  penWidth: number;
}
square.color = "blue";
square.sideLength = 10;
square.penWidth = 10;

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function(start: number) {} as Counter;
  counter.interval = 123;
  counter.reset = function() {};
  return counter;
}

let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;

function aa(price, discount) {
  return price - price / discount;
}
