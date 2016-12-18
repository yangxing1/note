## select标签设置width样式的时候会包括padding，设置的宽度会包括内边距，如下：
```html
<style>
	/* 这里下拉标签的实际宽度为160px */
	#query {
		width: 200px;
		padding-left: 40px;
	}
</style>
<select id="query">
	<option value="A">A</option>
</select>
```

## 下拉标签的默认背景清除， 如下：
```html
<style>
select {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
}
</style>
<select>
	<option>hello</option>
	<option>world</option>
</select>
```
