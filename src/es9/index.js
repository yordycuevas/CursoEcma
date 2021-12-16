const x = "Curso es9--------";
console.log(x);

const obj1 = {
  name1: "Oscar",
  age1: 13,
  country1: "United States",
};

let { country1, ...all } = obj1;
console.log(country1, all);

// Propagation Properties

const obj3 = {
  name3: "Oscar",
  age3: "20",
};

const obj4 = {
  ...obj3,
  country3: "MX",
};

console.log(obj4);

// Promise.finaly

const helloWorld5 = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World 1"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld5()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));



// regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);