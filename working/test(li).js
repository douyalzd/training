
// 浅拷贝直接遍历
// var obj1 = {
//     name: '彭湖湾',
//     job: '学生'
// };
// function copy(obj1) {
//     const newObj1 = {};
//     for(const item in obj1) {
//         newObj1[item] = obj1[item];
//     }
//     return newObj1;
// }

// var copyObj1 = copy(obj1);
// copyObj1.name = '我才不是彭湖湾呢！ 哼 (。・`ω´・)';
// console.log(obj1); // {name: "彭湖湾", job: "学生"}
// console.log(copyObj1); // {name: "我才不是彭湖湾呢！ 哼 (。・`ω´・)", job: Object}


// ES6的Object.assign;
var obj2 = {
    name: '彭湖湾',
    job: '学生',
    like: { a: 'a', b: 'b' }
};
var copyObj2 = Object.assign({}, obj2);
copyObj2.name = '我才不叫彭湖湾呢！ 哼  (。・`ω´・)';
copyObj2.like.a = 'aaa';
console.log(obj2); // {name: "彭湖湾", job: "学生", like: { a: 'aaa', b: 'b' } }
console.log(copyObj2); // {name: "我才不叫彭湖湾呢！ 哼  (。・`ω´・)", job: "学生", like: { a: 'aaa', b: 'b' } }


// 深拷贝
// var array = [
//     { number: 1 },
//     { number: 2 },
//     { number: 3 }
// ];
// var copyArray = JSON.parse(JSON.stringify(array));
// copyArray[0].number = 100;
// console.log(array); //  [{number: 1}, { number: 2 }, { number: 3 }]
// console.log(copyArray); // [{number: 100}, { number: 2 }, { number: 3 }]


// 深拷贝手动写递归
var array = [
    [1,2,3],
    { number: 1 },
    { number: 2 },
    { number: 3 }
]; // 定义一个数组
function copy(obj) { // 定义一个方法copy
    var newobj = obj.constructor === Array ? [] : {}; // 定义一个新的对象，判断这个对象如果等于数组的话就是给新的对象数组，否则就是对象
    if(typeof obj !== 'object') { // 判断obj不是对象
        return; // 返回
    }
    for(var i in obj) { // 循环对象
        newobj[i] = typeof obj[i] === 'object' ? copy(obj[i]) : obj[i]; // 给newobj赋值，判断obj中某个是不是对象，如果是就执行copy()方法，如果不是，就取当前数组值
    }
    return newobj; // 返回newobj
}
var copyArray = copy(array); // 定义一个数组等于copy方法并传值array
console.log(copyArray);


