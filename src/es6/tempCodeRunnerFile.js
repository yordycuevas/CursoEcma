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
