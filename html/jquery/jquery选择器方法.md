## jquery除了可以使用$('.head')这样的选择器, 还可以使用选择器方法, 如$('.head').children('.button')这样的方法来选择html元素, 如下:
```javascript
// main.js
$(function () {
	$('.showAll').click(function () {
		$(this).parent();		// 获取点击元素的父元素
		$(this).parents('.head');	// 获取点击元素的祖先元素中class为.head的元素
		$(this).children();		// 获取该元素的直接子元素
		$(this).find('.updata');			// 在子元素中寻找.updata的元素
		$(this).next();			// 下一个兄弟元素
		$(this).prev();			// 上一个兄弟元素
	}
});

// 在事件函数内, 用$(this)引用触发事件的元素
```

## jquery获取html元素属性的方法, attr()是元素的getter/setter方法, 可以设置或获取属性, 如下:
```javascript
// 使用一个参数时, 是获取属性
$(this).attr('show');		// undefinde

// 使用两个参数, 是设置属性
$(this).attr('show', 'yes');	// yes

$(this).removeAttr('show');		// undefinde 删除属性
```
