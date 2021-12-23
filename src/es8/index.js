const es8 = "divisions------!";

console.log(es8);

const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

// Genera matrices

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data1 = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana",
};

const values = Object.values(data1);
console.log(values);
console.log(values.length);

// hasta el valor septimo debe incluirse
const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " -------"));
console.log("food".padEnd(12, " -------"));

const obj = {
  name: "food",
};

console.log(obj);

// Async and awit -- promesas

const helloWorld1 = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld1();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld1();
    console.log(hello);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction();

// ejemplo

// Async Await
const prepareIceCream = (money) => {
  return new Promise((resolve, reject) => {
    if (money >= 500) {
      console.log("We are preparing your Ice cream...");
      setTimeout(() => {
        resolve("Here you are a Chocolate Ice cream");
      }, 6000); //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
    } else {
      reject("Sorry! You do not have enough money :("); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
    }
  });
};

const buyIceCream = async (money) => {
  try {
    console.log("Welcome to Ice Cream World!");
    const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado
    console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
    console.log("Thanks for your purchase!");
  } catch (error) {
    console.log(error); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
  }
};

buyIceCream(100); //1. llamas a la funcion comprar helado e Ingresas el dinero
