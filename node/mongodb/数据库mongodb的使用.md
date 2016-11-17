## 数据库mongodb, 首先创建一个data/db文件夹, 然后运行数据库, 然后连接数据库, 如下:
```javascript
sudo mongod --dbpath /home/star/data/db		// 运行数据库在文件夹/home/star/data/db下

mongo				// 连接数据库
```

## 可以对数据进行操作, 如下:
```javascript
use test				// 创建一个数据库并使用

db.dropDatabase()		// 删除正在使用的数据库

db.mycoll.insert({'ok': 1})		// 在当前数据库创建一个'mycoll'集, 并插入一组数据

db.mycoll.find().pretty()		// 查询集, 格式化输出
```

## 在node里操作数据库
```javascript
var monk = require('monk');		// 引入mongodb插件

var db = monk('localhost:27017/note');		// 连接数据库并创建一个'note'数据库

var collection = db.get('node');			// 获取数据库的'node'集(如没有, 创建)

collection.insert({}, function () {});		// 插入
collection.find({}, function () {});		// 查询
collection.remove({});						// 删除
collection.update({}, {}, function() {});	// 更新
```
