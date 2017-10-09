## canvas是html5的特性，canvas标签作为画布，使用getContext('2d')方法获取画布对象在该对象上进行操作，如下：
```html
<canvas width="200" height="200" id="canvas"></canvas>
<!-- 需要注意的是这个标签不能直接使用css样式设置大小，设置属性会自动设置宽高度 -->

<script>
	var canvas = document.getElementById('canvas');
	var c = canvas.getContext('2d');
	c.fillStyle = '0ff';							// 填充的颜色
	c.fillRect(0, 0, 100, 100);						// 填充一个方块，x, y, 宽度, 高度
</script>
```

## 使用beginPath()方法开始书写路径，使用moveTo()方法调整路径起始点，使用lineTo()方法书写路径，使用closePath()关闭路径，使用arc()方法书写弧线路径，如下：
```javascript
c.beginPath();
c.moveTo(50, 50);		// x, y
c.lineTo(50, 150);		// x, y
c.lineTo(150, 50);
c.closePath();			// 从当前点书写一条路径到初始点
c.fillStyle = '#f00';	// 填充颜色
c.fill();				// 填充
c.strokeStyle = '#0ff';	// 线段的颜色
c.stroke();				// 绘制线段，将路径绘制出来

c.beginPath();
c.moveTo(0, 0);
c.arc(0, 0, 50, 0 * Math.PI/ 180, 90 * Math.PI/ 180, false);
// x, y， 半径， 初始角度， 结尾角度， 是否逆时针
c.fill();
```

## 使用arc()方法渲染一个饼状图， 如下：
```javascript
function round(canvas, data, points) {
  /* 需要参数canvas对象
   * 需要参数data数据
   * data内需要一个总量
    * data内需要一个数组数据
    * 需要一个提示对象数组 */
  var width = canvas.getAttribute('width');
  var height = canvas.getAttribute('height');
  var c = canvas.getContext('2d');
  var angleStar = 0;
  var radius = height / 2;

  for (var i = 0; i < data.array.length; i++) {
    var angle = data.array[i]/ data.count * 360;
    angleStar = round.render(c, angle + angleStar, angleStar, radius, width/ 2, height/ 2, points[i]);
  }
}

round.render = function (c, angle, angleStar, radius, x, y, point) {
  /* 渲染一个扇形
   * 需要getContext对象
    * 初始角度
    * 结束角度
    * 半径
    * 中心点
    * 和扇形相关的一个说明对象 */
  if (!c || !angle) {
    console.log('error context or angle is null');
    return undefined;
  }
  radius = radius? radius: 100;
  x = x? x: 200;
  y = y? y: 200;

  c.beginPath();
  c.arc(x, y, radius, round.rads(angleStar), round.rads(angle), false);
  c.lineTo(x, y);
  round.colorRandom(c, point);
  c.fill();
  c.save();

  return angle;
};


round.rads = function (x) { return Math.PI*x/180; };

round.colorRandom = function (c, point) {
  /* 随即颜色
   * 以及设置相关提示的颜色 */
  do {
    var r = parseInt(Math.random() * 255) + 1;
    var g = parseInt(Math.random() * 255) + 1;
    var b = parseInt(Math.random() * 255) + 1;
    var rgb = 'rgb('+ r+ ','+ g+ ','+ b+ ')';
  } while(rgb === c.fillStyle);
  c.fillStyle = rgb;
  point.style.backgroundColor = rgb;
};
```
