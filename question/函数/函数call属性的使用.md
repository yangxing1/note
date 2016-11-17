## call和apply是每个函数都拥有的属性, 可以使用这个属性调用函数并修改上下文, 如下:
```javascript
function func() {					// 一个普通函数
	console.log(this.number);
}

var o = {							// 一个带有属性的对象
	number: 10
}

number = 12;						// 一个全局变量

func.call(o);						// 10, call第一个参数是函数的上下文, 在这里是o, 其他参数都是函数调用的实参
func();								// 12 
```

## 对象的属性依然可以使用call和apply修改上下文, call与apply的区别是第二及之后的参数传递地方式不同, 如下: 
```javascript
function func(a, b) {
 console.log(this. number, a, b);
}

var o = {
	number :10
}

func.call(o, a, b);				// 调用的时候除了第一个参数, 其他和普通的调用表达式都相同
func.apply(o, [a, b]);			// 除了第一个参数其他参数都是以数组的方法传递
```
