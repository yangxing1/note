## jquery使用$()选取元素，可以给$()传递第二个参数作为查找的上下文，如下：
```javascript
var $box = $('.box');
var $boxChild = $('.boxChild', $box);
```
