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
    name3: 'Oscar',
    age3: '20',
};

const obj4 = {
    ...obj3,
    country3: 'MX'
};

console.log(obj4);