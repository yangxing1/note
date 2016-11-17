## 函数拥有一个length属性, 该属性表示函数定义时需要的形参数目, 与arguments.length(指调用时传递的实参数目)不同, 如下:
```javascript
function f(x, y, z) {
	return x + y + z;
}
console.log(f.length);		// 3

// 也可通过arguments.callee.length调用, arguments.callee指正在调用的函数, 
function f(x, y, z) {
	console.log(arguments.callee.length);
}
f();						// 3

// 该属性可作为实参数目判断使用, 可与arguments.length作比较
