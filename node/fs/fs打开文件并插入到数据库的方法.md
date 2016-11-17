## js有一些异步操作api, 调用的时候会使用非常多得回调函数, 如果多重嵌套调用代码会一塌糊涂, 所以将回调函数作为一个独立的函数处理会将代码的语义化提高很多, 另外异步api调用时最好不要使用有副作用(会改变, 如for循环的循环值)的参数:
```javascript
// index.js

var fs = require('fs');
var db = require('monk')('localhost:27017/other');

function updataBase(collection) {
	var content;
	
	for (var i = 1; i < arguments.length; i++) {
		content = fs.readFileSync(filename);					// 使用同步执行打开文件
		labor_collection(collection, arguments[i], content);	// 使用函数操作数据库
	}
}

// 关键点在于用函数传递获取到的值, 在调用函数的时候会将参数赋值给形参,
// 注意不要使用对象作为参数, 对象作为参数时是引用调用, 在异步执行前该对象可能已经被修改
// 如果必须使用对象的时候可以将对象转换成JSON格式, 或将数组复制一份
function labor_collection(collection, filename, content) {
	collection.insert({'str': filename, 'content': content}, function (err) {
		if (err) throw new Error('insert content in mongodb error');
		
		console.log('insert content in mongodb');
	}
}

// 调用函数, 传递仓库以及文件名
updataBase(db.get('node'), '/home/star/git/other/node/fs.md', '/home/star/git/other/node/mongodb.md');
```


## 如果一个函数需要获取数据库的值并并返回, 可以给这个函数传递一个对象参数, 获取值的时候给对象的添加属性, 如下:
```javascript
function getdataBase() {
  var box = {};
  for (var i = 0; i < arguments.length; i++) {
    getCollection(arguments[i], box);
  }
  return box;
}

// get collection data
function getCollection(collection, box) {
  collection.find({}, function (err, data) {
    if (err) throw new Error('open collection error');
    box[collection.name] = data;
  });
}

getdataBase(node, question);
```
