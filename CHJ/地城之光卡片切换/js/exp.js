/**
 * Created by Administrator on 2017/3/2.
 */
$(function () {
    $(".secpic .secpiclr").click(function () {
        $(".loadBox").show();
    });
    $(".closeBox").click(function () {
        $(".loadBox").hide();
    });
    var index = $(".pictures img").length;
    //默认向右运动
    var director = 0;
    $(".loadBox .r-arrow").click(function () {
        if (!($(".pictures img").is(":animated"))) {
            if (director == 0) {
                index++;
            }
            index--;
            if (index == -1) {
                index = $(".pictures img").length - 1;
            }
            $(".pictures img").eq(index).stop().animate({"top": "-600px"}, 250, function () {
                $(this).css("z-index", 1).siblings("img").css("z-index", function () {
                    return parseInt($(this).css("z-index")) + 1;
                });
            }).animate({"top": "0px"}, 250);
            director = 1;
        }
    });
    $(".loadBox .l-arrow").click(function () {
        if (!($(".pictures img").is(":animated"))) {
            if (director == 1) {
                index--;
            }
            index++;
            if (index >= $(".pictures img").length) {
                index = 0;
            }
            $(".pictures img").eq(index).animate({"top": "600px"}, 250, function () {
                $(this).css("z-index", $(".pictures img").length).siblings("img").css("z-index", function () {
                    return parseInt($(this).css("z-index")) - 1;
                });
            }).animate({"top": "0px"}, 250);
            director = 0;
        }
    });
});