[1, 5, 10, 15].find((value, index, arr) => {
    return value > 9;
});
/* 
    数组实例的find方法，用于找出第一个符合条件的数组成员。
    它的参数是一个回调函数，所有数组成员依次执行该回调函数，
    直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

    find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
 */


function f(v){
    return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);
/* 
    find函数接收了第二个参数person对象，回调函数中的this对象指向person对象。
*/
