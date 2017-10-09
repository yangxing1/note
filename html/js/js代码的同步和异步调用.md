## 在浏览器加载资源时，遇到使用script标签就会立即调用里面的代码（不管是引用的外部文件还是内联的代码），在运行代码的同时不会继续渲染其他元素，所以一般会将代码写在一个load事件函数里，如下：
```html
<div>hello</div>
<script>
	window.onload = function () {
		console.log('hello');
	}
</script>
<div>world</div>
``` 
## 在使用script标签引用外部文件时可以使用两个属性来更改代码的同步调用还是异步调用（虽然并不常用）， 如下：
```html
<div>hello</div>
<script src="jquery.min.js" async="async" defer="defer"></script>
<!-- 可以很明显的看出async属性指同步调用，defer属性指异步调用 -->
<!-- 如果在一个标签上同时使用两个属性，async的优先级高于defer -->
<div>world</div>
```

