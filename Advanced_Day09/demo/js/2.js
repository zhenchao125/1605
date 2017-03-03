/**
 * Created by lzc on 2017/3/2.
 */
var wrap = document.getElementById("wrap");
var slide = document.getElementById("slide");
var arrow = document.getElementById("arrow");
var lis = slide.getElementsByTagName("li");
wrap.onmouseenter = function () {
    var animator = new Animator(500, Easing.linear, function (easing) {
        arrow.style.opacity = easing;
    })
    animator.start(false);
    window.clearTimeout(autoId);
}
wrap.onmouseleave = function () {
    var animator = new Animator(500, Easing.linear, function (easing) {
        arrow.style.opacity = 1 - easing;
    })
    animator.start(false);
    autoPlay();
}
var imgsInfo = [
    {//第一张图片
        width: 400,
        top: 20,
        left: 50,
        opacity: .2,
        z: 2
    },
    {
        width: 600,
        top: 70,
        left: 0,
        opacity: .8,
        z: 3
    },
    {
        width: 800,
        top: 100,
        left: 200,
        opacity: 2,
        z: 4
    },
    {
        width: 600,
        top: 70,
        left: 600,
        opacity: .8,
        z: 3
    },
    {
        width: 400,
        top: 20,
        left: 750,
        opacity: .2,
        z: 2
    }
];
var flag = true;
change();
function change() {
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.opacity = imgsInfo[i].opacity
        lis[i].style.zIndex = imgsInfo[i].z;
        new Animator(1000, Easing.linear, function (easing) {
            lis[i].style.width = lis[i].offsetWidth - (lis[i].offsetWidth - imgsInfo[i].width) * easing + "px";
            lis[i].style.left = lis[i].offsetLeft - (lis[i].offsetLeft - imgsInfo[i].left) * easing + "px";
            lis[i].style.top = lis[i].offsetTop - (lis[i].offsetTop - imgsInfo[i].top) * easing + "px";
            if (easing == 1) {
                flag = true;
            } else {
                flag = false;
            }
        }).start(false);
    }
}
arrow.onclick = function (event) {
    if (!flag) return;
    var className = event.target.className;
    switch (className) {
        case "next":
            imgsInfo.unshift(imgsInfo.pop())
            change();
            break;
        case "prev":
            imgsInfo.push(imgsInfo.shift())
            change();
            break;
        default:
            break;
    }
}
var autoId;
autoPlay();
function autoPlay() {
    autoId = setTimeout(function step() {
        imgsInfo.unshift(imgsInfo.pop())
        change();
        autoId = setTimeout(step, 2000)
    }, 2000);
}


