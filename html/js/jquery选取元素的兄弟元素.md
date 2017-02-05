## 使用jquery的next()和prev()选取元素的下一个兄弟元素和上一个兄弟元素，如下：
```javascript
var $box = $('.box');
var $boxPrev = $box.prev();			// 选取上一个兄弟元素
var $boxNext = $box.next();			// 选取下一个兄弟元素

var $boxActive = $box.prevAll('.active');		// 选取在该元素前面class为.active的兄弟元素
var $boxRight = $box.nextAll('.aight');			// 选取在该元素后面class为.aight的兄弟元素
```
