
const target = { a: 1, c: 2 };
const source1 = {a: 23, b: 2};
const source2 = {
    b:33, 
    c: null, 
    d: {f: 333},
    n: undefined,
    e: function() {
        return this.d
    } 
};
let cc = Object.assign({}, source2);
cc.d.f = 666;
console.log(h);
console.log(cc);
console.log(source2);

/* 
    Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
    Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
    注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
*/

// 例子
var obj = Object.create({foo: 1}, { // foo 是个继承属性。
    bar: {
        value: 2  // bar 是个不可枚举属性。
    },
    baz: {
        value: 3,
        enumerable: true  // baz 是个自身可枚举属性。
    }
});

// var obj = {
//     a:{foo: 1}, 
//     b: { // foo 是个继承属性。
//     bar: {
//         value: 2  // bar 是个不可枚举属性。
//     },
//     baz: {
//         value: 3,
//         enumerable: true  // baz 是个自身可枚举属性。
//     }
// }};
console.log(obj);
var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }


// 深拷贝方法
// function clone(obj) {
//     var copy;
 
//     // Handle the 3 simple types, and null or undefined
//     if (null == obj || "object" != typeof obj) return obj;
 
//     // Handle Date
//     if (obj instanceof Date) {
//         copy = new Date();
//         copy.setTime(obj.getTime());
//         return copy;
//     }
 
//     // Handle Array
//     if (obj instanceof Array) {
//         copy = [];
//         for (var i = 0, len = obj.length; i < len; i++) {
//             copy[i] = clone(obj[i]);
//         }
//         return copy;
//     }
 
//     // Handle Object
//     if (obj instanceof Object) {
//         copy = {};
//         for (var attr in obj) {
//             if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
//         }
//         return copy;
//     }
 
//     throw new Error("Unable to copy obj! Its type isn't supported.");
// }

// var tree = {
//     "left"  : { "left" : null, "right" : null, "data" : 3 },
//     "right" : null,
//     "data"  : 8
// };
// let treeClone = clone(tree);
// treeClone.left.data = 20;
// console.log(tree);
// console.log(treeClone);