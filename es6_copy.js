// 基本类型数组复制
const a1 = [1, 2];
const a2 = a1;
a2[0] = 2;
console.log("a1", a1);
console.log("a2", a2);

const a1 = [1, 2];
const a2 = [...a1];
a2[0] = 2;
console.log("a1", a1);
console.log("a2", a2);
/* 
    解释
    数组是复合的数据类型，直接赋值的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。
    上面代码中，a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。 
*/

// 引用类型数组复制
const a1 = [{a:1}, {b: 2}];
const a2 = a1;
a2[0].a = 2;
console.log("a1", a1);
console.log("a2", a2);

const a1 = [{a:1}, {b: 2}];
const a2 = [...a1];
const a2 = JSON.parse(JSON.stringify(a1));
const a2 = a1.concat();
const a2 = a1.filter(() => true);
a2[0].a = 2;
console.log("a1", a1);
console.log("a2", a2);
/* 
    解释
    数组里面放的是Objece, Object是引用类型变量，所以a1和a2中的的对象指向的是同一个地址，从而改变a2也影响到a1的值
    问题这个我们应该怎么做才能实现真正的复制呢
*/



// 放法传参
function changeStuff(a, b, c) {
    a = 1010;
    b.item = "changed";
    c = {
        item: "changed"
    };
    console.log(a, b, c);
}
var num = 10;
var obj1 = {
    item: "unchanged"
};
var obj2 = {
    item: "unchanged"
};
changeStuff(num, obj1, obj2);
console.log(num);
console.log(obj1.item);
console.log(obj2.item);
/* 
    JavaScript 中永远是按值传递（pass-by-value），只不过当我们传递的是某个对象的引用时，
    这里的值指的是对象的引用。按值传递中函数的形参是被调用时所传实参的副本。修改形参的值并不会影响实参。
    而按引用传递（pass-by-reference）时，函数的形参接收实参的隐式引用，而不再是副本。
    这意味着函数形参的值如果被修改，实参也会被修改。同时两者指向相同的值。
*/



JSON.parse(JSON.stringify(obj));
var obj = {
    a: 1,
    b: 2,
    c: undefined,
    sum: function() {
        return a + b;
    }
};

var obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj2);
// Object {a: 1, b: 2}
/* 
    利用 JSON 深拷贝
    对于一般的需求是可以满足的，但是它有缺点。下例中，可以看到JSON复制会忽略掉值为undefined以及函数表达式。
*/


let a = {a: 1, b: 22};
let b = [];
b.push(a);
b[0].a = 33;
b[0].b = 44;
console.log(a, b);