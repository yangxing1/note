## tab切换指在同一个位置使用按钮点击的方式切换显示的内容， 一般使用js，如下：
```html
<!-- html部分 -->
<a id="item1">hello</a>
<a id="item2">world</a>
<p class="item1">hello</p>
<p class="item2" style="display:none;">world</p>

<script>
  // 获取按钮对象
  var btn = document.getElementsByTagName('a');
  for (var i = 0; i < btn.length; i++) {
    // 添加点击事件
    btn[i].onclick = function () {
      var str = this.id;
      // 获取消息元素
      var texts = document.getElementsByTagName('p');
      for(var j = 0; j < texts.length; j++) {
        // 检查和点击的按钮相关的消息
        if(texts[j].className == str) {
          texts[j].style.display = 'block';
        }
        else {
          texts[j].style.display = 'none';
        }
      }
    }
  };
</script>
```

## 使用纯css实现tab切换， 该方法的核心是css3的新特性:checked 以及兄弟选择器 + ，如下：
```html
<style>
  input, p {
    display: none;
  }
  input[name="radio"]:checked + p {
    display: block;
  }
</style>
<!-- html部分 -->
<div>
  <label for="item1">btn_1</label>
  <!-- 默认显示 -->
  <input type="radio" name="radio" id="item1" checked="checked">
  <p class="item1">hello</p>
</div>
<div>
  <label for="item2">btn_2</label>
  <input type="radio" name="radio" id="item2">
  <p class="item2">world</p>
</div>
```
