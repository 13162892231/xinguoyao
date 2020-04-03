//商品展示点击小图片更换大图
$(function () {
    $(".ulSmallPic li img").click(function () {
        $(".ulSmallPic li img").removeClass("cur");
        $(this).addClass("cur");
    });


//商品详细整箱拆零点击效果

//加箭头
    $(".goodsDetail .tabs li").click(function () {
        $(".goodsDetail .tabs li").removeClass("cur")
        $(this).addClass("cur");
    });

    //拆零与整箱
    $(".dismountle").click(function () {
        $(this).parent().find("a").removeClass("cur");
        $(this).addClass("cur");
        $(this).parent().parent().parent().children().find(".quantity").html("1");
    });
    $(".batch").click(function () {
        $(this).parent().find("a").removeClass("cur");
        $(this).addClass("cur");
        $(this).parent().parent().parent().children().find(".quantity").html("24");
    });
    //加
    $("#jia").click(function () {
        var types = $(this).parent().parent().children().find("li.types a.cur").html();
        var quantity = Number($(this).parent().find(".quantity").html());
        if (types == "拆零") {
            quantity++;
            $(this).parent().find(".quantity").html(quantity);
        }
        else
        {
            quantity+=24;
            $(this).parent().find(".quantity").html(quantity);
        }
    });
    //减
    $("#jian").click(function () {
        var types = $(this).parent().parent().children().find("li.types a.cur").html();
        var quantity = Number($(this).parent().find(".quantity").html());
        if (quantity == 1) { }
        else if (types == "拆零") {
            quantity--;
            $(this).parent().find(".quantity").html(quantity);
        }
        else if (quantity <= 24 && types == "整箱") {
        }
        else {
            quantity -= 24;
            $(this).parent().find(".quantity").html(quantity);
        }





    });


});

    
    
    $(function () {
        jQuery.jqtab = function (tabtit, tab_conbox, shijian) {
            $(tab_conbox).find("li").hide();
            $(tabtit).find("li:first").addClass("thistab").show();
            $(tab_conbox).find("li:first").show();
            $(tabtit).find("li").bind(shijian, function () {
                document.body.scrollTop = 962;
                $(this).addClass("thistab").siblings("li").removeClass("thistab");
                var activeindex = $(tabtit).find("li").index(this);
                $(tab_conbox).children().eq(activeindex).show().siblings().hide();
                return false;
            });
        };
        /*调用方法如下：*/
        $.jqtab("#tabs", "#tab_conbox", "click");
        $.jqtab("#tabs2", "#tab_conbox2", "mouseenter");
        $("#tabs").smartFloat(962);
    });

    ///js页面滚动浮动层智能定位(jQuery)实现  
    ///调用：$("#popfloat").smartFloat($("#mainInfo").width() + 21);  
    $.fn.smartFloat = function (width_p) {
        var position = function (element) {
            var top = element.position().top, pos = element.css("position");
            $(window).scroll(function () {
                var scrolls = $(this).scrollTop();
                if (scrolls > top) {
                    if (window.XMLHttpRequest) {
                        element.css({
                            position: "fixed",
                            width: width_p,
                            top: 0
                        });
                    } else {
                        element.css({
                            top: scrolls
                        });
                    }
                } else {
                    element.css({
                        position: "", //absolute  
                        top: top
                    });
                }
            });
        };
        return $(this).each(function () {
            position($(this));
        });
    };
