## 使用setTimeout，第一个参数是函数对象， 所以不能调用参数，可以在该函数中调用另一个函数并传递参数， 如下：
```javascript
function func_1(number) {
	console.log(number);
}

var number = 22;

setTimeout(function () {
	func_1(number);
}, 1000);

// 在一秒后声明一个函数并调用func_1
```

