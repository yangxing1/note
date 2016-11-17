## 在html内使用js有四种方式, 分别是: <script>标签内使用; <script>标签内的scr属性引用外部文件夹; 在文档元素添加事件属性; javascript: url(url作为一段能够运行的代码, 返回字符串). 如下:
```javascript
// html
<script>console.log('hello');</script>

<script src="./jquery.min.js"></script>

<div class="click" onclick="console.log('hello');">click</div>

<a href="javascript:new Date().toString();">time</a>
<a href="javascript:alert(new Date());">time</a>
```
