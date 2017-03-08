/**
 * Created by Administrator on 2017/3/6.
 */
$(function () {
    initData();
    function initData() {
        //初始化价格
        $("td.cart_td_7").each(function (index) {
            $(this).html($(this).siblings("td.cart_td_5").html() * ($(this).siblings(".cart_td_6")
                    .find("input.num_input").val()));
        });
        initTotalPriceAndIntergral();
    }

    //初始化总价和积分
    function initTotalPriceAndIntergral() {
        var total = 0;
        var integral = 0;
        $("td.cart_td_1 input[type=checkbox]:checked").each(function (index,ele) {
            // if ($(this).is(":checked")) {
                total += parseFloat($(this).parents(".cart_td_1").siblings(".cart_td_7").html());
                var mInter = $(this).parents(".cart_td_1").siblings(".cart_td_4").html() *
                    $(this).parents(".cart_td_1").siblings(".cart_td_6").find("input.num_input").val();
                integral += parseInt(mInter);
            // }
        });
        $("label#total").html(total);
        $("label#integral").html(integral);
    }

    //单选
    $("td.cart_td_1 input[type=checkbox]").click(function () {
        initTotalPriceAndIntergral();
        if ($("td.cart_td_1 input[type=checkbox]:checked").length ==
            $("td.cart_td_1 input[type=checkbox]").length) {
            $("#allCheckBox").prop("checked", true);
        } else {
            $("#allCheckBox").prop("checked", false);
        }
    });

    //全选
    $("#allCheckBox").click(function () {
        $(".cart_td_1>input").prop("checked", $(this).is(":checked"))
        initTotalPriceAndIntergral();
    });

    //+
    $("img[alt=add]").click(function () {
        var value = parseInt($(this).siblings("input.num_input").val()) + 1;
        $(this).siblings("input.num_input").val(value);
        changePrices($(this).parent("td"), value)
        initTotalPriceAndIntergral();
    });
    //-
    $("img[alt=minus]").click(function () {
        var value = parseInt($(this).siblings("input.num_input").val()) - 1;
        value = value <= 1 ? 1 : value;
        $(this).siblings("input.num_input").val(value);
        changePrices($(this).parent("td"), value);
        initTotalPriceAndIntergral();
    });

    //改变每一项的价格总数
    function changePrices(parnet, number) {
        parnet.siblings(".cart_td_7").html(number * parnet.siblings(".cart_td_5").html())
    }

    //删除
    $(".cart_td_8 a").click(function () {
        //.end 第一次选择
        $(this).parents("tr").prev().remove().end().remove();
        initTotalPriceAndIntergral();
    });

    //删除所选
    $("#deleteAll").click(function () {
        // $("td.cart_td_1 input[type=checkbox]").each(function () {
        //     if ($(this).is(":checked")) {
        //         $(this).parents("tr").prev().remove().end().remove();
        //     }
        // });
        $("td.cart_td_1 input[type=checkbox]:checked").parents("tr").prev().remove().end().remove();
        if ($("#allCheckBox").is(":checked")) ($("#allCheckBox").prop("checked", false));
        initTotalPriceAndIntergral();
    });

});