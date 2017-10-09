## express可以使用ejs模板来渲染html, 渲染的时候可以使用layout来作为框架, 如下:
```javascript
// app.js
var express = require('express');				// 引入express脚手架
var routes = require('./routes');				// 引入路由
var partials = require('express-partials');		// 引入express的插件, 
												//	引入之后才能使用layout和partila()
var app = module.exports = express();			// 获得express的接口

app.configure(function() {						// 默认设置
	app.set('views', __dirname + '/views');		// 设置views, 也就是html文件的位置
	app.set('view engine', 'ejs');				// 设置模板
	
	app.use(partials());						// 使用express-partials中间件(也就是一系列函数)
	app.use(app.router);						// 使用express的路由中间件
});

app.get('/', routes.index);						// 路由的调用

app.listen(3000, function () {					// 开启服务器, 设置端口为3000
	console.log('OK, localhost: 3000');
}
```

## 渲染
```javascript
// routes/index.js

exports.index = function (req, res) {
	res.render('index', {
		title: 'express'
	});
};

// 渲染时, 使用默认的layout来渲染, 在layout.html中寻找<%- body %>, 然后使用这里的第一个参数'index'来替换
```

## partial()是在模板文件内调用渲染的方法, 第一个参数是文件位置, 第二个参数是option选项, 如下:

```javascript
// layout.ejs
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
  <!-- style -->
  <%- Loader('')
    .css('/public/stylesheets/style.css')
    .done(assets, '', false)
  %>
</head>
<body>
  <%- body %>				<!-- layout的应用 -->
  <box class="main">
  </box>
  <%- partial('./index', {'title': title}) %>		<!-- 和res.render()是一样的功能 -->
  <script type="text/javascript">
    console.log('hello');
  </script>
</body>
</html>

// index.ejs
<h1> <%= title %></h1>
```
