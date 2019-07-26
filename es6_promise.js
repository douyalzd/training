function sleep(duration) {
    return new Promise(function(resolve, reject) {
        console.log("c");
        setTimeout(resolve,duration);
    })
}
async function foo(name){
    await sleep(2000)
    console.log(name)
}
async function foo2(){
    await foo("a");
    await foo("b");
}

foo2();

function sleep(duration) {
    return new Promise(function(resolve, reject) {
        console.log("aaaa");
        setTimeout(resolve,duration);
    })
}
sleep(1000).then( ()=> console.log("finished"));

var r = new Promise(function(resolve, reject){
    console.log("a");
    resolve()
});
setTimeout(()=>console.log("d"), 0)
r.then(() => console.log("c"));
console.log("b")

setTimeout(()=>console.log("d"), 0)
var r = new Promise(function(resolve, reject){
    resolve()
});
r.then(() => { 
    var begin = Date.now();
    while(Date.now() - begin < 1000);
    console.log("c1") 
    new Promise(function(resolve, reject){
        resolve()
    }).then(() => console.log("c2"))
});

function sleep(duration) {
    return new Promise(function(resolve, reject) {
        console.log("b");
        setTimeout(resolve,duration);
    })
}
console.log("a");
sleep(5000).then(()=>console.log("c"));


function sleep(duration) {
    return new Promise(function(resolve, reject) {
        console.log("c");
        setTimeout(resolve,duration);
    })
}
async function foo(){
    console.log("a")
    await sleep(2000)
    console.log("b")
}
foo();


function sleep(duration) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,duration);
    })
}
async function foo(name){
    await sleep(2000)
    console.log(name)
}
async function foo2(){
    await foo("a");
    await foo("b");
}
foo2()


function sleep(duration, color){
    return new Promise(function(resolve){
        console.log(color);
        setTimeout(resolve, duration);
    })
}
// async function changeColor(duration,color){
//     // document.getElementById("traffic-light").style.background = color;
//     console.log(color);
//     await sleep(duration);

// }
async function main(){
    while(true){
        await sleep(3000,"green");
        await sleep(1000, "yellow");
        await sleep(2000, "red");
    }
}
main()


var o = {
    myfunc: function(){}
 }
console.log(o.myfunc.name)

// sync1
// sync2
// promise
// setTimeoutPromise
// pro_then
// pro_timeout
// setTimeout1
// last_setTimeout

console.log('sync1');

setTimeout(function () {
    console.log('setTimeout1')
}, 0);

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('setTimeoutPromise')
    }, 0);
    console.log('promise');
    resolve();
});


promise.then(() => {
    console.log('pro_then');
    setTimeout(() => {
        console.log('pro_timeout');
    }, 0)
})

setTimeout(function () {
    console.log('last_setTimeout')
}, 0);
console.log('sync2');
