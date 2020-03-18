type AA = {
  hello: string;
  world: string;
};

type BB = {
  hello: string;
};

function getBB(aa: AA): BB {
  return aa;
}

const bb = getBB({ hello: "hello", world: "world" });
console.log(bb);

type Options = {};
type HttpFunction = (url: string, opts: Options) => Promise<Response>;

const get: HttpFunction = (url, opts) => {
  return undefined;
};
const post: HttpFunction = (url, opts) => {
  return undefined;
};

interface Animal {
  firstName: string;
  lastName: string;
}

interface AnimalWithBirthDate extends Animal {
  birth: Date;
}

type AnimalWithBirthDate2 = Animal & { birth: Date };

type FirstNameAnimal = {
  firstName: Animal["firstName"];
};

type NamedAnimal = {
  [k in "firstName" | "lastName"]: Animal[k];
};

interface SaveAction {
  type: "save";
}

interface LoadAction {
  type: "load";
}

type Action = SaveAction | LoadAction;
type ActionType = Action["type"];

type OptAnimal = Partial<Animal>;

type PostReturnType = ReturnType<typeof post>;

type DancingAnimal<T extends Animal> = [T, T];
const err: DancingAnimal<{ firstName: string; lastName: string }> = [
  { firstName: "firstName", lastName: "lastName" },
  { firstName: "firstName", lastName: "lastName" }
];

const dancingAnimal = <T extends Animal>(x: DancingAnimal<T>) => x;

type CsvRow = { [columnName: string]: string };

type Vec3D = Record<"x" | "y" | "z", number>;

const xs = [1, 2, 3];
const keys = Object.keys(xs);
for (const key in xs) {
  const x = xs[key];
  console.log(x);
}

for (const x of xs) {
  console.log(x);
}

xs.forEach((x, i) => {
  console.log(x);
});

for (let i = 0; i < xs.length; i++) {
  const x = xs[i];
  if (x >= 3) break;
}

const tupleLike: ArrayLike<string> = {
  "0": "A",
  "3": "B",
  length: 3
};

console.log(tupleLike[3]);

// function arraySum(arr: readonly number[]) {
//   arr.pop();
// }

const { firstName, lastName } = { firstName: "f", lastName: "l" } as Animal;

function parseNumber(str: string, base = 10) {}

function getIdNum(id: number) {}
function getIdStr(id: string) {}
let id: string | number = "123";
getIdStr(id);
id = 123;
getIdNum(id);
{
  const id = true;
  console.log(id);
}
console.log(id);

let xxxx = "x"; // type: string
const yyyy = "y"; // type: "y"

const mixed: readonly [string, number] = ["x", 1];

const v = {
  x: 1 as const
};

const rov = {
  x: 1,
  y: 2
} as const;

const a2 = [1, 2, 3] as const; // readonly [1, 2, 3]

function isAnimal(a: any): a is Animal {
  return "firstName" in a;
}

const ani = {} as Animal;
// ani.firstName = "test";
console.log(ani);
console.log(ani.firstName);
console.log(ani.lastName);

const pt = { x: 3, y: 4 };
const na = { name: "pt" };
// const namedPoint = {};
// Object.assign(namedPoint, pt, id);
const namedPoint = { ...pt, ...na };

declare let hasMiddle: boolean;

const firstLast = { first: "first", last: "last" };
hasMiddle = false;
const president = { ...firstLast, ...(hasMiddle ? { middle: "S" } : {}) };
const middle = president.middle;

function animal(animal: Animal): boolean {
  const { firstName } = animal;
  animal.firstName = "hello";
  console.log(animal.firstName);
  console.log(firstName);
  return true;
}

animal({ firstName: "first", lastName: "lastName" });

function promise(n: number): Promise<number> {
  return Promise.resolve(n);
}

promise(12)
  .then(n => {
    return promise(n + 2);
  })
  .then(n => {
    return promise(n + 3);
  })
  .catch(error => {
    console.log(error);
  });

function timeout(millis: number): Promise<never> {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("timeout"), millis);
  });
}

async function fetchWithTimeout(url: string, ms: number): Promise<Response> {
  return Promise.race([fetch(url), timeout(ms)]);
}

async function getNumber(): Promise<number> {
  return 23;
}

async function getNumber3(): Promise<number> {
  return Promise.resolve(3);
}

const getNumber2: () => Promise<number> = async () => 42;

const loc = [10, 20] as const;

Object.values([[1], [2, 3]]);
