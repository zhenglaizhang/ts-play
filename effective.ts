let city = "new york city";
console.log(city.toUpperCase());

const xx = 2 + "2";
const yy = "2" + 2;
console.log(typeof xx);
console.log(typeof yy);

const aaa = null + 7; // evaluate to 7 is JS
const bbb = [] + 12; // evaluate to '12' in JS

alert("Hello", "TypeScript"); // alters "Hello" in JS

const names = ["a", "b"];
console.log(names[2]); // undefined

const an = {} as any;

function add(a, b) {
  return a + b;
}
add(10, null);

const xxx: number = null;

const formatNameAny = (p: any) => `{$p.firstName}`;

function getAny(item: any) {}
getAny(12);
getAny("12");

const regex = /test/;
console.log(regex);

type A = "A";
type B = "B";

interface Cylinder {
  radius: number;
  height: number;
}
const Cylinder = (a: number, b: number) => ({ a, b });
function cal(shpe: unknown) {
  if (shpe instanceof Cylinder) {
    return shpe.radius;
  }
}

type T2 = typeof Cylinder;
const t2 = typeof Cylinder;
