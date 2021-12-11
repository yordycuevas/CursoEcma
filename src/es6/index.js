function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // es6
  console.log(name, age, country);
  function newFunction2(name = 'oscar', age = 32, country = "MX") {
  };
  
  newFunction2();
  newFunction2('Ricardo', '23', 'CO');
  