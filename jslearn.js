// 9. 输出是什么？
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({ newColor = "green" } = {}) {
        this.newColor = newColor;
    }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
/* 
A: orange
B: purple
C: green
D: TypeError
*/

/* colorChange 是一个静态方法。静态方法被设计为只能被创建它们的构造器使用（也就是 Chameleon），并且不能传递给实例。因为 freddie 是一个实例，静态方法不能被实例使用，因此抛出了 TypeError 错误。 */

// 10. 当我们这么做时，会发生什么？
function bark() {
    console.log("Woof!");
}

bark.animal = "dog";
/* 
A: {}
B: ReferenceError: greetign is not defined
C: undefined
*/

/* 
代码打印出了一个对象，这是因为我们在全局对象上创建了一个空对象！当我们将 greeting 写错成 greetign 时，JS 解释器实际在上浏览器中将它视为 global.greetign = {} （或者 window.greetign = {}）。

为了避免这个为题，我们可以使用 `"use strict"。这能确保当你声明变量时必须赋值。
*/

// 11. 输出是什么？
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());

/* 
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
  */
