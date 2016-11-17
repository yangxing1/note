## 使用ejs模板的时候, 默认模板文件后缀名为ejs, 设置模板的方法为:
```javascript
// app.js

var express = require('express');

var app = express();

app.set('views', __dirname + '/views');		// 设置模板文件夹的位置, __dirname是现在位置
app.set('view engine', 'ejs');				// 设置模板引擎
```

## 可以调用express的app.engine()方法来显示设置模板文件的后缀名:
```javascript
// app.js

var express = require('express');

var app = express();

app.set('views, __dirname + '/views');

app.engine('html', require('ejs').renderFile);		// 调用ejs里的renderFile()方法将ejs返回的引擎名修改为'html'

app.set('view engine', 'ejs');						// 设置引擎
