## css可以使用(,)符号一次选择多个类或id，但是如果配合css3的特性（比如:hover)必须在每一个选择器后添加:hover, 否则没添加的并不会在:hover时触发而是直接作为样式使用，如下：
```style
/* error */
.box, .item:hover {
	background-color: #ccc;
}

/* good */
.box:hover, .item:hover {
	background-color: #ccc;
}
```
