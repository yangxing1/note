## 使用collection.insert()等操作数据库的方法的时候, 可选一个回调函数作为参数, 一般使用函数表达式作为参数, 如下:
```javascript
collection.update(find_item, update_item, function (err, doc) {});	// 第三个参数就是回调函数,
// 在执行操作完成后调用回调函数, 
```

## 但是如果大量的重复操作就没有必要使用函数表达式, 而是使用函数变量, 如下:
```javascript
function callback(err, doc){}

collection.update(find_item, update_item, callback);			// 注意传递的是函数变量, 而不是函数调用表达式

// 其内部的调用方式是callback.apply()或callback.call()
```
