import mapData from "./data/mapData.js";

// reduce
let data = mapData.data;
console.log(data);
let aa = data.reduce((result,item) => {
    let index = result.findIndex(d => d.id == item.area);
    if(index == -1) {
        let obj = {
            name: item.areaName,
            id: item.area,
            children: [],
        }
        obj.children.push(item);
        result.push(obj);
    }else {
        result[index].children.push(item);
    }
    console.log(result);
    debugger
    return result;
}, [])
console.log(aa);

/* 
    arr.reduce(callback,[initialValue])
    callback （执行数组中每个值的函数，包含四个参数）
        previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
        currentValue （数组中当前被处理的元素）
        index （当前元素在数组中的索引）
        array （调用 reduce 的数组）
    initialValue （作为第一次调用 callback 的第一个参数。）
*/
