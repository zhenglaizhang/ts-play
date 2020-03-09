function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));
// console.log(add(100, "10%"));

const sym1 = Symbol("orderID");
const sym2 = Symbol("orderID");
const ord = Symbol("orderID");
const myOrder = {
  ord: "123"
};

console.log(myOrder["ord"]);

function getName(): string | null {
  return null;
}

const logger: () => never = () => {
  while (true) {
    console.log("up and running...");
  }
};

let name3: "John Smith";
name3 = "John Smith";
console.log(name3);

let productId;
productId = null;
productId = undefined;

function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  } else {
    return padding;
  }
}

type Foot = number;
type Pound = number;

type Patient = {
  name: string;
  height: Foot;
  weight?: Pound;
};

class Person1 {
  constructor(
    public firstName: string,
    public lastName: string,
    public age?: number
  ) {}
}

let patient: Patient = {
  name: "Joe Smith",
  height: 5
};

// type FormControl = {};
type ValidatorFn = (c: FormControl) => { [key: string]: any } | null;

class FormControl {
  constructor(initialValue: string, validator: ValidatorFn | null) {}
}

const p1 = new Person1("f", "l");
console.log(p1.firstName);
new Person1("f", "l", 12);

class C1 {
  name: string;
  age: number;
}

class C2 {
  name: string;
}

const c12: C2 = new C1(); // type structures are the same...
// const c21: C1 = new C2();
const cust: C1 = { name: "a", age: 12 };
const pers: C2 = { name: "a" };

const isPerson = (object: any): object is Person1 =>
  !!object && "firstName" in object && "lastName" in object;

type Boy = {
  discriminator: "Boy";
  age: string;
};

const isBoy = (object: any): object is Boy =>
  !!object && object.discriminator === "boy";
