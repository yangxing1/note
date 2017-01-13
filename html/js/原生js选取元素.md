## 选取元素的方法有getElementById(), getElementsByName(), getElementsByClassName(), getElementsByTagName(), 依次为使用id选取，使用name属性选取，使用class类选取，使用标签名选取， 如下：
```html
<div class="box" id="box" name="box">
	<div id="boxChild"></div>
</div>
<script>
	// id
	var id = document.getElementById('box');
	// 在document对象上选取，也可以在文档元素对象上选取
	// var boxChild = id.getElementById('boxChild');

	// name
	var name = document.getElementsByName('box')[0];
	// 返回一个nodeList类数组对象

	// ClassName
	var ClassName = document.getElementsByClassName('box')[0];
	// nodeList

	// TagName
	var TagName = document.getElementsByTagName('div')[0];
	// nodeList
</script>
```
