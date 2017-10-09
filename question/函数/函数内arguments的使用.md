## arguments是函数的实参对象, 也就是参数列表, 是一个类数组对象, 可以通过arguments来调用传递到函数的实参值, 如下:
```javascript
function func(a) {
	console.log(a);				// 通过形参名称来调用实参值
	console.log(arguments[0]);	// 通过arguments来调用实参值
}

func(10);		// 10, 10
```

## arguments的元素和通过形参名称调用的实参值是引用的同一个值, 所以改变其中一个, 也会对另一个残生影响, 如下:
```javascript
function func(a) {
	console.log(a);
	arguments[0] = 12;				// 修改参数列表的元素
	console.log(arguments[0]);		// 输出
	console.log(a);
}

func(10);							// 10, 12, 12
```

