class Namer {
  name: string;
  age: number;
  constructor();
  constructor(name: string);
  constructor(name: string, age: number);
  constructor(name?: string, age?: number) {
    this.name = name;
    this.age = age;
  }
  static totalNum = 0;
  protected sayName(): string | undefined {
    return this.name;
  }
}

class Dog extends Namer {
  sayHello(): string;
  sayHello(times: number): string;
  sayHello(prefix: string): string;

  sayHello(wow?: number | string): string {
    if (typeof wow === "number") {
      return `Dogs says hello for ${wow} time(s)`;
    } else if (typeof wow === "string") {
      return `${wow} Dogs says hello`;
    } else {
      return "Dogs says hello";
    }
  }
}

class Fish extends Namer {
  dive(howDeep: number): string {
    return "Fish dives";
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string | undefined {
  if (pet instanceof Dog) {
    return pet.sayHello() || pet.name;
  } else if (pet instanceof Fish) {
    return pet.dive(1) || pet.name;
  } else {
    throw new Error();
  }
}

class AppState {
  counter = 0;
  private static instanceRef: AppState;
  private constructor() {}

  static getInstance(): AppState {
    if (AppState.instanceRef === undefined) {
      AppState.instanceRef = new AppState();
    }
    return AppState.instanceRef;
  }
}

const as1 = AppState.getInstance();
const as2 = AppState.getInstance();
as1.counter++;
as1.counter++;
as2.counter++;
as2.counter++;
as2.counter++;
console.log(as1.counter);
console.log(as2.counter);
