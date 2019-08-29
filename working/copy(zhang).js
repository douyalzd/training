
// 深拷贝原生方法
	function copy(arr) {
		// 如果arr的constructor 构造函数为数组就让他为空数组，否则就为空对象
		var obj = arr.constructor == Array ? [] : {};
		// 循环arr里的每一项
		for(var item in arr) {
			// 如果arr返回的每一项的数据类型为对象
			if(typeof arr[item] === "object") {
				// 那么obj的每一项就等于arr的每一项，递归
				obj[item] = copy(arr[item]);
			}else {
				// 如果数据类型为对象以外的数据，那么obj的每一项就等于arr的每一项
				obj[item] = arr[item];
			}
		}
		return obj;
	}
	var obj = {f: [1,2,3], a: {c: 1}, b: 2, c: {d:1, e:[3,4,5]}};
	var newObj = copy(obj)
	obj.f[1] = 0;
	console.log(obj);
	console.log(newObj);