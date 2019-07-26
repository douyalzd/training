// import "./es6_reduce.js";
import "./es6_copy.js";
// import "./es6_assign.js";

var name = 'jozo';
var b = name.toUpperCase(); // 输出 'JOZO'
console.log(b);
console.log(name); // 输出  'jozo'

var person = 'jozo';
person.age = 22;
console.log(person.age);

var a = 1;
var b = "1";
console.log(a == b);//true
console.log(typeof b);


var a = {a: 1, b: 2}
var b = a;
b.a = 3;
b.c = 4;
console.log(a); // 
console.log(b); // 

var person1 = {};
var person2 = {};
console.log(person1 == person2); 

var a = [1, 2]
var b = a;
b[0] = 3;
console.log(a === b);
console.log(a);
console.log(b);


var b = { a: 1, b: 4};
var a = b;
var c = {n: 1, m: 2};
function f(c) {
    c.a = 4;
    console.log(c);
    c.n = 5;
    console.log(c);
    c = c;
    console.log(c);
}
f(b);

// li  {a: 4, b:4};  {a:4, b:4, n:5}
// wang 

function ff() {
    console.log(222)
}
ff();


foo() 
var foo =  function() {
    console.log(1111);
}

function foo () {
    console.log(1111);
}

const a = {n: 1, b: 3}
const b = {n: 2, b: 4}
const c = b;
c.a = a.n;
console.log(c);



// li 