## css3可以使用@keyframes设置动画效果，并在选择器中设置动画效果及时长，如下：
```html
<style>
	/* 动画效果 */
	/* 效果名myanimate */
	@keyframes myanimate {
		form { width: 200px; }
		to { width: 300px; }
	}
	/* 元素选择器 */
	/* 绑定myanimate动画效果，该效果在5秒中完成 */
	.box {
		width: 200px;
		height: 200px;
		background-color: red;
		animation: myanimate 5s;
	}
	/* 需要注意的是在动画form中设置了初始样式，但在选择器中依然需要设置相同的初始样式 */
</style>
<div class="box"></div>
```

## 可以使用百分比设置动画效果在合适的时候需要的动画效果，如下：
```html
<style type="text/css">
    @keyframes myanimate {
	/* form和to分别为0% 和100%，表示动画的程度 */    
	    0% {
          width: 100px;
        }
        50% {
          width: 200px;
        }
        100% {
          width: 100px;
        }
      }
    
    .box {
      width: 100px;
      height: 200px;
      background-color: red;
		/* 动画的属性设置 */
		/* 动画效果名称，动画时长（必选）
			速度曲线，开始之前的延迟，播放次数，是否反向播放（可选）
		*/
		/* animation: myanimate 5s esse-out infinite alternate 
			前三个选项默认， 无限播放，反向播放
		*/
      animation: myanimate 5s;
	  
	  /* 在动画完成时保存动画所修改的样式 */
		/* none(默认），forwards(动画完成时保存当前样式），backwards(动画开始时应用样式），both(前两个选项都使用）*/
	  animation-fill-mode: forwards;
    }
  </style>
<div class="box"></div>
```

## 常用的方式是配合css3的其他特性，比如:focus, 如下：
```html
<style type="text/css">
@keyframes myanimate {
    0% {
      width: 100px;
    }
    50% {
      width: 200px;
    }
    100% {
      width: 100px;
    }
  }

.box {
  width: 100px;
  height: 200px;
  background-color: red;
}
/* 鼠标指针移动到元素上触发该样式 */
.box:hover {
  animation: myanimate 5s;
}
</style>
<div class="box"></div>
```
