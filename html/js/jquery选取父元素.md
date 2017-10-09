## 使用jquery的parent()方法可以选取元素的父元素，使用parents()方法可以选取元素的祖先元素，如下：
```html
<div class="box">
	<div class="parent">
		<div class="child">
		</div>
	</div>
</div>
<script>
	var $child = $('.child');
	var $parent = $child.parent();
	var $box = $child.parents('.box');		// 向上一直查找.box直到<html>
	var $box1 = $child.closest('.box');		// 向上查找.box，找到一个就返回
</script>
```

## jquery所有选取方法如果选中一个元素该数组的length属性将不为0, 如下：
```javascript
var $box = $('.box');
console.log($box.length);		// 0;
```
