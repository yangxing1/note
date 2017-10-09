## 隔行选择一个容器中的子元素，实现背景不同，使用css3的:nth-child()选择器， 如下：
```html
<style>
	.li {
		height: 20px;
		width: 100px;
	}
	/* li标签中索引为奇数的文档元素 */
	.li:nth-child(odd) {
		background-color: #fff;
	}
	/* 选择索引为偶数 */
	.li:nth-child(even) {
		background-color: #333;
	}
	/* 选择索引为3的元素 */
	.li:nth-child(3) {
		color: #0f0;
	}
	/* 选择元素在容器的排序前三的元素 */
	.li:nth-child(-n+3) {
		background-color: red;
	}
	/* 选择元素在容器的排序第3之后的所有元素 */
	.li:nth-child(n+4) {
		background-color: red;
	}
</style>
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
