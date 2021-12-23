// change words in the sentence 🐳

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacesString = string.replace("JavaScript", "Python");

console.log(replacesString);

const replacedString2 = string.replaceAll ("JavaScript", "Python");

console.log(replacedString2);


// Private Methods 😀

class Message {
    show (val){
        console.log(val);
    };
    
};

const message = new Message ();
message.show ('Hola');

// Promise Any

const promise1 = new Promise ((resolve,reject) => reject ("1"));
const promise2 = new Promise ((resolve,reject) => resolve ("2"));
const promise3 = new Promise ((resolve,reject) => resolve ("3"));

Promise.any([promise1, promise2, promise3])
 .then(response => console.log(response));


// ! WeakRef (element)

/* class anyClass {
    constructor(element)
    this.ref = new WeakRef(element)
    {
        ...
    }
}
 */
// New logical operators 

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);



let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 ||= isFalse1);


let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ??= isFalse1);

