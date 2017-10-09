## else if居然不算是真正的语句,而是两条语句的结合....

```javascript
// 正常 if else 语句
var i = 1;
var j = 2;

if (i === j) 
	console.log('i euqal to j');
else 
	console.log('i do`t equal j');

// else if 语句
if (i === j) {
	console.log('i euqal to j');
}
else if (i > j) {
	console.log('i large to j');
}

// 真正的else if 语句
if (i === j) {
	// 省略
}
else {
	if (i > j) {
		// 省略
	}
}
```

## 简直颠覆人生观, 一直以来都以为else if和if, else是一样的语句,,没想到
