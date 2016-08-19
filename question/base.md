# js的变量类型

Number String Boolean Object Array Undefined

# css的引入方式

1.引入样式表
```javascript
<link href="stylesheets/common.css" rel="stylesheet" type="text/css">
```

2.使用标签
```javascript
<style type="text/css">
.search {
	background: black;
}
</style>
```

3.使用行内样式
```javascript
<div style="color: #333;"></div>
```
# 如何拷贝一个数组

1.使用Array.concat();
```javascript
var a = [1, 2, 3];
var b = a.concat();
```

2.使用Array.slice(0);
```javascript
var a = [1, 2, 3];
var b = a.slice(0);
```

# apply与call的用法和区别

1.用法
```javascript
function add(a, b) {
	console.log(a + b);
}
function ssb(a, b) {
	console.log(a - b);
}
add.call(ssb, 3, 1); // 4
add.apply(ssb, [3, 1]); //4

//将add作为ssb的方法调用

function add() {
	console.log( this.hello );
}
(function ssb() {
	this.hello = 'world';
}());
add.call(ssb); //'world'

//第一个参数是上下文， 也就是环境变量this
```

2.差别
```javascript
add.call(ssb, 3, 1);
add.apply(ssb, [3, 1]);

//除第一位参数后其他参数都会作为实参传递到add函数内
//他们的差别就是实参的传递方式不同，第二种将所有实参作为数组传递
```
