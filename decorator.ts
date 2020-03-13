function whoAmI(target: Function) {
  console.log(`You are \n ${target}`);
}

@whoAmI
class Friend {
  constructor(private name: string, private age: number) {}
}

function UIComponent(html: string) {
  console.log(`The decorateor received ${html} \n`);
  return function(target: Function) {
    console.log(`Someone wants to create a UI component from \n ${target}`);
  };
}

@UIComponent("<h1>Hello Shopper!</h1>")
class Shopper {
  constructor(private name: string) {}
}

function logTrade(target, key, descriptor) {
  const originalCode = descriptor.value;
  descriptor.value = function() {
    console.log(`Invoked ${key} providing:`, arguments);
    return originalCode.apply(this, arguments);
  };
}

class Trade {
  @logTrade
  placeOrder(
    stockName: string,
    quantity: number,
    operation: string,
    tradeId: number
  ) {}
}

const trade = new Trade();
trade.placeOrder("IBM", 100, "Buy", 123);

interface Person {
  name: string;
  age: number;
}

// const worker: Person = { name: "John", age: 22 };
function doStuff(person: Readonly<Person>) {
  // person.age = 12;
}

type propNames = keyof Person;

let b: propNames = "name";
console.log(b);

type propTypes = Person[propNames];

// const p: Person = { name: "name" };
const p: Partial<Person> = { name: "name" };
console.log(p);

class Product {
  id: number;
}

const getProducts = function<T>(
  id?: T
): T extends number ? Product : Product[] {
  if (typeof id === "number") {
    return { id: 123 } as any;
  } else {
    return [{ id: 123 }, { id: 456 }] as any;
  }
};

const pro1 = getProducts(123);
const pro2s = getProducts();
console.log(pro1);
console.log(pro2s);

type RemovedProps<T, K> = Exclude<keyof T, K>;
type RemaingProps = RemovedProps<Person1, "name" | "age">;
