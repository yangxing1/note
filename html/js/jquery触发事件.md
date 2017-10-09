## 如果使用jquery绑定了事件，可以使用jquery的trigger()方法触发事件，也可以使用click()，绑定事件时使用的函数触发事件，如下:
```javascript
var box = $('.box');
box.click(function () {
	console.log(this.innerHTML);
});

// 触发
box.click();

// 或
box.trigger('click');
```
