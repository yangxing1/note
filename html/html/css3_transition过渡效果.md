## css3特性：transition（过渡），使用该特性实现简单动画，这个特性非常好用，可以使用js修改文档元素样式进行动画, 如下：
```html
<style type="text/css">
.box {
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: #ccc;
  tansition: all 1s;
}
</style>

<div class="box"></div>

<script type="text/javascript">
  window.onload = function () {
	// 延时一秒之后修改样式
    setTimeout(function () {
      var $box = document.getElementsByClassName('box')[0];
      $box.style.width = 200 + 'px';
    }, 1000);
  }
  // 这个属性简直变态，直接就可以进行动画。没有一点防备
  // 不管是触发:hover, 还是修改了className都会进行动画
</script>
```
