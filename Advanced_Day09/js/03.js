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
        clearInterval(timerId);
    }
    wrap.onmouseleave = function () {
        new Animator(500, Easing.linear, function (easing) {
            arrow.style.opacity = 1 - easing;
        }).start(false);
        autoPlay();
    }
    /*存储每张图片的位置信息的数组*/
    var imgsInfo = [
        {
            left: 50,
            top: 0,
            width: 400,
            height: 300,
            opacity: 0.2,
            zIndex: 1
        },
        {
            left: 0,
            top: 50,
            width: 600,
            height: 400,
            opacity: 0.6,
            zIndex: 2
        },
        {
            left: 200,
            top: 100,
            width: 800,
            height: 500,
            opacity: 1,
            zIndex: 3
        },
        {
            left: 600,
            top: 50,
            width: 600,
            height: 400,
            opacity: 0.6,
            zIndex: 2
        },
        {
            left: 750,
            top: 0,
            width: 400,
            height: 300,
            opacity: 0.2,
            zIndex: 1
        }
    ];
    var isStop = true;
    function change() {
        for (let i = 0; i < lis.length; i++) {
            let offsetWidth = lis[i].offsetWidth;
            let offsetHeight = lis[i].offsetHeight;
            let offsetLeft = lis[i].offsetLeft;
            let offsetTop = lis[i].offsetTop;
            new Animator(500, Easing.bounce, function (easing) {
                var style = lis[i].style;
                var info = imgsInfo[i];
                /*元素宽度的 （最终值 - 最初值） 表示宽度的变化量。*/
                style.width = offsetWidth + (info.width - offsetWidth) * easing + "px";
                style.height = offsetHeight + (info.height - offsetHeight) * easing + "px";
                style.left = offsetLeft + (info.left - offsetLeft) * easing + "px";
                style.top = offsetTop + (info.top - offsetTop) * easing + "px";
                style.zIndex = info.zIndex;
                style.opacity = info.opacity;

                if(easing == 1){
                    isStop = true;
                }else{
                    isStop = false;
                }
            }).start(false);
        }
    }
    change();

    arrow.onclick = function (event) {
        if(!isStop) return;
        var className = event.target.parentNode.className;
        switch (className) {
            case "prev":
                imgsInfo.push(imgsInfo.shift()); //删除数组中的第一个元素，并添加到最后
                break;
            case "next":
                imgsInfo.unshift(imgsInfo.pop()); //删除数组中的第一个元素，并添加到最后
                break;
            default :
                break;
        }
        change();
    }
    var timerId;
    function autoPlay() {
        timerId = setInterval(function () {
            imgsInfo.unshift(imgsInfo.pop());
            change();
        },3000);
    }
    autoPlay();
}