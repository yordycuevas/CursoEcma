let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(1))


let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value *2]));

let hello = '       Hello world ';
console.log(hello);
console.log(hello.trimStart());

let hello1 = 'Hello world    ';
console.log(hello1);
console.log(hello1.trimEnd());

// fromEntries

let entries1 = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries1));

let mySymbol = `My Symbol`;
let symbol =Symbol(mySymbol);
console.log(symbol.description);