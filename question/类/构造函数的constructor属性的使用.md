## 每个函数都拥有prototype属性, 这个属性默认只有一个不可枚举的属性constructor(译:构造函数), 这个属性指向一个函数对象(就是拥有prototype属性的对象), 如下:
```javascript
function func() {}
console.log(func.prototype.constructor == func);		// true
```

## 使用构造函数的时候, 新建的对象可以调用constructor属性, 可以使用这个属性判断该对象是否为一个函数的实例, 如下:
```javascript
function Func() {}
var temp = new Func();

console.log(temp.constructor == Func);					// true
```

## 使用构造函数时, 实例继承另一个原型对象时, prototype属性将会被重新赋值, 所以constructor属性可以使用其他方法弥补, 如下:
```javascript
// 添加constructor属性
var o = {
	number: function () {
		console.log(10);
	}
}							// 原型对象
function Func() {}					// 构造函数
Func.prototype = o;					// 原型属性被刷新
Func.prototype.constructor = Func;	// 重新赋值

var temp = new Func();
console.log(temp.constructor == Func);	// true


// 在prototype属性上添加属性, 这样prototype属性将不会被刷新
Func.prototype.number = o.number;
var temp = new Func();
console.log(temp.constructor == Func);	// true
```
