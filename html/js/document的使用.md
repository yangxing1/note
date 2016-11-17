## 浏览器提供window对象, 该对象可以调用通用api来对网页进行修改, 如下:
```javascript
// html <script>
window.location = 'www.baidu.com';
// 跳转到链接baidu.com
//window对象可以省略
location = 'www.baidu.com';
```

## window对象拥有一个document属性, 该属性引用到Document(文档对象), 可以使用该对象对网页上的文档元素进行修改, 如下:
```javascript
// html <script>
document.getElementsByClassName('relad');
// 注意使用类名获取元素的时候记得Element后面加上s代表返回一个数组
document.getElementById('relad');
// 使用id获取元素的时候没有s, 返回元素对象
```

## 可以操作Document对象达到修改元素内容的效果, 如下:
```javascript
var relad = document.getElementsByClassName('relad');
relad.className = 'hello';
relad.style.backgrundColor = 'red';
```
