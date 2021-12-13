function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "23", "CO");

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// antes js

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing \n" +
  "Lorem ipsum dolor sit amet, consectetur adipiscing";

// nueva forma em6
let lorem2 = `Lorem ipsum dolor sit amet
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age, country);

let team1 = ["oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["david", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global var";
}

{
  let globalLet = "Global let";

  console.log(globalLet);
}

console.log(globalVar);

const a = "b";

// procesos forma

let person1 = {
  name: "oscar",
  age: 32,
  country: "MX",
};

obj = { name, age };
console.log(person1);

//  Arrow function

const names = [
  { name: "oscar", age: 32 },
  { name: "Yordy", age: 30 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

// v2

let listOfNames2 = names.map((item) => console.log(item.name));

// promesas

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups !!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("Hola"))
  .catch((error) => console.log(error));

// Cap 5

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// exportar funciones de
/* import hello from "./module";
console.log(hello());
 */

// generador

function* helloWorld() {

  if (true){
    yield 'hello,' ;
  }if (true){
    yield 'world';
  }
};

const generadorHello = helloWorld();
console.log(generadorHello.next().value);
console.log(generadorHello.next().value);
console.log(generadorHello.next().value);
