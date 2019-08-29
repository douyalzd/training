var set = new Set();
let obj = {
    a: 1, b: 2
}
let obj2 = {
    a: 1, b: 2
}
set.add(obj);
set.add(obj2);
var set2 = new Set([{a:1}, {a: 1}])
console.log(set2)