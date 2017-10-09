## bind() 方法是每个函数都拥有的属性, 该方法可以将任何函数绑定在任意对象上, 准确的说是将任意对象作为调用该方法的函数的上下文, 如下:
```javascript
function func() {				// 普通函数
	console.log(this.number);	// 调用上下文中的属性
}

var o = {						// 将要绑定的对象
	number: 10
}

var temp = func.bind(o);		// 将函数作为一个对象调用bind()方法

temp();						// 10
```

## 有函数f(), 调用f.bind(o, x)的意思是将f()绑定在o对象上, x是绑定的参数, 绑定参数的形式是在arguments左侧上传数据, 如下:
```javascript
function bind(o /* arguments */ ) {			// bind()方法的原理
	var argu = arguments;					// 保存传入的参数, 嵌套函数调用需要
	var self = this;						// 因为要调用的函数是bind()的上下文, 所以需要this的值
	return function () {
		var bindArgu = [];					// 保存所有参数
		var i = 0;

		for (i = 1; i < argu.length; i++, bindArgu.push(argu[i]));
		// 先将传入外部函数的参数添加至参数数组
		for (i = 0; i < arguments.length; i++, bindArgu.push(arguments[i]));
		// 然后将传入嵌套函数的参数添加至参数数组
		// 这时候参数已经绑定了, 因为先添加的是外部函数的参数, 所以调用函数时先使用绑定的参数		
		
		return self.apply(o, bindArgu);
		// 使用外部函数(bind())的上下文, 也就是需要绑定的函数来调用apply()方法,
		// 并将bindArgu作为参数数组传递
	}
}
```

## 问题: 如果将一个对象的方法使用bind()来绑定另一个对象, 会不会正常绑定, 如下:
```javascript
var k = {						// 一个带有方法的对象
	func: function () {			// 该方法输出上下文中的一个属性
		condole.log(this.number);
	},
	number: 20
}

var o = {
	number: 10
}

var temp = k.func.bind(o);		// 调用bind()

temp();						// 10, 因为是将对象作为上下文临时调用, 然后返回嵌套函数, 所以并没有问题
k.func();					// 20, 并没有对对象的上下文进行更改
```
