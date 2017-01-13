## flex盒属性是css3的特性，可以在样式选择器中使用display:flex;使用该特性，这个特性是css3对响应式页面的另一种支持，如下：
```html
<div class="box">
	<div class="item"></div>
	<div class="item"></div>
</div>
<style>
.box {
	display: flex;			/* 使用flex盒模型 */
	flex-flow: row wrap;	/* 设置子元素排列的方向和允许换行, column nowrap */
	justify-content:space-betwwen;
	/* 设置在排列的方向上子元素的分布 
	*	可选：flex-start	 靠近开始处
	*	flex-end		靠近结尾处
	* 	center			向中间靠拢
	* 	space-around	均匀分布
	* 	space-between	第一个子元素和最后一个子元素靠近两边，其余均匀分布 */
	align-items: center;
	/* 设置侧方子元素剩余空间 如果设置垂直居中：center
	*	可选：flex-start
	*	flex-end
	*	center */
	align-content: center;
	/* 设置侧方子元素的剩余空间，在子元素多行下才可用
	*	属性与justify-content一模一样 */
}
/* 剩下的以后补充 */
</style>
```
