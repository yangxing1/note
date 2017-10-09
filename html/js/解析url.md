## url在js中一般由Location对象保存，window.location属性引用该对象，该对象拥有href; protocol; host; hostname; port; pathname; search; hash;等属性， 表示该网页的地址， 如下：
```javascript
window.location.search; // 该网页的查询条件，以？开头

window.location.url = 'https://www.baidu.com';	// 载入新页面
// location = 'https://www.baidu.com'; 同上 

window.location = "#top" // 使用相对url使用hash属性，
// 该语句的意义为跳转到id为top的文档元素位置， 如果没有该元素则跳转到文档顶部
```
