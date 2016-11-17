## fs是nodejs的一个内置模块, 作用是操作文件, 拥有一系列操作方法, 先引入才能使用:
```javascript
var fs = require('fs');			// require()是nodejs引入模块的方法
```

## 一般用作读写文件, 也可以操作文件夹, 所有的方法都是异步执行的, 如下:
```javascript
var fs = require('fs');

// 读取文件的方法, 第一个参数是文件的位置及名称, 第二个参数是操作文件的函数, 
fs.readFile('/home/star/git/other/question/base.md', function (err, data) {
	if (err) throw new Error('open file error');
	console.log(data);
}

// 打开文件夹的方法, 同上
fs.readdir('/home/star/git/other/node', function (err, data) {
	if (err) throw new Error('open files error');
	console.log(data);			// ['**', '***']
}
// 注意打开文件夹会将里面的文件名作为数组的元素返回, 
```

## 所有的操作方法都可以在方法名后添加Sync同步调用, readdir()->readdirSync(), 同步调用时没有回调函数, 可选参数是设置文件格式等, 如下:
```javascript
var fs = require('fs');

var data = fs.readFileSync('/home/star/git/other/question/base.md');
```
