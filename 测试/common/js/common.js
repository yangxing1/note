/**
 * Created by Administrator on 2017/10/9.
 */
function resize(n){
    var dpi = 0;
    var width = n || 750;
    dpi = window.screen.width / width * 100;
    document.documentElement.style.cssText = 'font-size:' + dpi + 'px!important';
}
window.onresize = resize;
resize();