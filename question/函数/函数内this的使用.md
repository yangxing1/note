## 每个函数都有this关键字, 指代函数的上下文, 如果这个函数是一个对象的属性, 那么这个上下文就是这个对象, 如下:
```javascript
var o = {	// 声明一个拥有函数作为属性的对象
	number: 10,	// 对象的属性
	func: function() {
		console.log(this.number);	// 输出上下文中的属性
	}
}

o.func();	// 10
```

## 如果是普通函数, 那么上下文就是全局对象
```
function func() {
	function func_1() {
		console.log(this.number);
	}	

	console.log(this.number);
	this.number = 12;
	func_1();
}

number = 10;
func();	// 10, 12
console.log(number);	// 12, 值已经被修改
// 可以看出, 第一次输出是10, this指代全局对象, 然后修改number变量
// 第二次输出是12, 因为嵌套函数依然指代全局对象
```

## 对象属性的属性的属性是一个函数, 那么这个函数的this指代第一个对象的属性, 因为这个函数是对象的属性, 如下:
```javascript
var o = {					// 第一对象
	number: 10,				// 拥有属性number
	k: {					// 第一个对象的属性, 第二个对象
		number: 12,			// 也拥有属性number
		func: function() {	// 第二个对象的属性, 是一个函数
			console.log(this.number);
		}
	}
}

o.k.func();					// 12, 因为第一个对象的属性是一个对象, 所以这里输出12, 而不是输出10
```

## 在严格模式下, 普通对象的this不指代任何对象, 调用会报错
