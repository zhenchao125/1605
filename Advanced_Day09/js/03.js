/**
 * Created by lzc on 2017/3/3.
 */
window.onload = function () {
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var slide = document.getElementById("slide");
    var lis = slide.getElementsByTagName("li");
    wrap.onmouseenter = function () {
        new Animator(500, Easing.linear, function (easing) {
            arrow.style.opacity = easing;
        }).start(false);
    }
    wrap.onmouseleave = function () {
        new Animator(500, Easing.linear, function (easing) {
            arrow.style.opacity = 1 - easing;
        }).start(false);
    }
    /*存储每张图片的位置信息的数组*/
    var imgsInfo = [
        {
            left : 50,
            top : 0,
            width : 400,
            height: 300,
            opacity : 0.2,
            zIndex : 1
        },
        {
            left : 0,
            top : 50,
            width : 600,
            height: 400,
            opacity : 0.6,
            zIndex : 2
        },
        {
            left : 200,
            top : 80,
            width : 800,
            height: 500,
            opacity : 1,
            zIndex : 3
        },
        {
            left : 600,
            top : 50,
            width : 600,
            height: 400,
            opacity : 0.6,
            zIndex : 2
        },
        {
            left : 750,
            top : 0,
            width : 400,
            height: 300,
            opacity : 0.2,
            zIndex : 1
        }
    ];

    for(let i = 0; i < lis.length; i++){
        new Animator(10000, Easing.linear, function (easing) {
            var style = lis[i].style;
            var info = imgsInfo[i];
            style.width = lis[i].offsetWidth + (info.width - lis[i].offsetWidth) * easing + "px";
            style.height = lis[i].offsetHeight + (info.height - lis[i].offsetHeight) * easing + "px";
            style.left = lis[i].offsetLeft + (info.left - lis[i].offsetLeft) * easing + "px";
            style.top = lis[i].offsetTop + (info.top - lis[i].offsetTop) * easing + "px";
            style.zIndex = info.zIndex;
            style.opacity = info.opacity;

        }).start();
    }


}