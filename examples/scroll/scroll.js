/**
 * Created by 100833 on 2015/8/11.
 */
window.onload=function(){
    var oScroll=document.getElementById("scroll");
    var oUl=oScroll.getElementsByTagName("ul")[0];
    var aLi=oUl.getElementsByTagName("li");

    //设置两个ul的宽度
    oUl.innerHTML+=oUl.innerHTML;
    //ul多宽，是所有li的总和
    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
    //设置定时器
    setInterval(function(){
        //向左移动的速度为5
        oUl.style.left=oUl.offsetLeft-5+'px';
        //如果ul的靠左的偏移量小于整个ul的宽度时，ul的左边距为0
        if(oUl.offsetLeft