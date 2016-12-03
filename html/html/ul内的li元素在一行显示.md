## ul里的li元素默认是多行显示， 可以使用float: left;使li元素在一行显示， 如下：
```javascript
// html
/*
<style>
ul, li {
	list-style: none;
	text-decoration: none;
}

li {
	float: left;
}
</style>
<ul>
<li>hello</li>
<li>world</li>
</ul>
*/
```

## 也可以使用display: inline-block; 使li在一行显示，配合text-align: center;可以让li元素水平居中， 如下：
```javascript
// html
/*
<style>
ul {
	text-align: center;
}
li {
	display: inline-block;
}
</style>
<ul>
	<li>hello</li>
	<li>world</li>
</ul>
*/
```
