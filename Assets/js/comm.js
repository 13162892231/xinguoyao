$(function () {
    $(".exhibitionbar .shopping").click(function () {
        $(".all").toggleClass("allanminal");
        $(".shopquick").toggleClass("shopquickanminal");
        $(".exhibitionbar").toggleClass("exhibitionbar_cur");
        var jian = $(".divNumber ");
        var jia = $(".divNumber");
        jian.delegate(".reduction", "click", function () {
            if ($(this).next("label").text() != "1") {
                $(this).addClass("cur");
                $(this).next("label").text(parseInt($(this).next("label").text()) - 1);
                if ($(this).next("label").text() == "1")
                { $(this).removeClass("cur"); }
            }
        });
        jia.delegate(".add", "click", function () {
            $(this).parent().find(".reduction").removeClass("cur");
            $(this).prev("label").text(parseInt($(this).prev("label").text()) + 1);
        });
        $(".shopquickanminal").css({"overflow": "auto"});
        $(".shopquick").css({"overflow": "auto"});
    });
    if ($(".divNumber p lable").text == "1")
    { $(this).parent().find(".reduction").addClass("cur"); }
    //城市列表
    $.selectcountry(".country","#sitename");
    //商品下拉选择搜索
    $(".logo_right a.sreachtype").click(function () {
        $(".logo_right ul").toggle();
    });
    $(".logo_right ul li").click(function () {
        var name = $(this).html();
        $(".logo_right ul li").removeClass("cur");
        $(this).addClass("cur");
        $(this).parent().parent().children().find("span.type").html("" + name);
        $(this).parent().hide();
    });

    //右购物车全选
    $(".top input[type='checkbox']").click(function () {  
        if ($(this).prop("checked")) {
            $(this).parent().parent().children().find("input[type='checkbox']").prop("checked", true);
        }
        else {
            $(this).parent().parent().children().find("input[type='checkbox']").prop("checked", false);
        }
    });
    //右购物车复选框父级
    $(".check_parent input[type='checkbox']").click(function () { 
        if ($(this).prop("checked")) {
            $(this).parent().parent().parent().children().children().find("input[type='checkbox']").prop("checked", true);
        }
        else {
            $(this).parent().parent().parent().children().children().find("input[type='checkbox']").prop("checked", false);
        }
    });
    //右购物车删除商品
    $(".context_moeny p img").click(function () {
        var length = $(this).parent().parent().parent().parent().find(".content").length;
        if (length == 1) {
            $(this).parent().parent().parent().parent().remove();
        }
        else {
            $(this).parent().parent().parent().remove();
        }
    });

    //顶部购物车全选
    $(".main_choose input[type='checkbox']").click(function () {
        if ($(this).prop("checked")) {
            $(this).parent().parent().children().find("input[type='checkbox']").prop("checked", true);
        }
        else {
            $(this).parent().parent().children().find("input[type='checkbox']").prop("checked", false);
        }
    });
    //顶部购物车复选框父级
    $(".ill_names input[type='checkbox']").click(function () {
        if ($(this).prop("checked")) {
            $(this).parent().parent().parent().children().children().find("input[type='checkbox']").prop("checked", true);
        }
        else {
            $(this).parent().parent().parent().children().children().find("input[type='checkbox']").prop("checked", false);
        }
    });
    //顶部购物车删除商品
    //$(".ill_main_typelist .delete").click(function () {
    //    var length = $(this).parent().parent().parent().parent().find(".spacing_all").length;
    //    if (length == 1) {
    //        $(this).parent().parent().parent().parent().remove();
    //    }
    //    else {
    //        $(this).parent().parent().parent().remove();
    //    }
    //});


});

//头部购物车$(function () {

    $.selectcar();
})jQuery.selectcar = function () {
    var args = {
        timeout: 500,
        closetimer: 0,
        ddmenuitem: 0
    };
    var ddmOpen = function () {
        ddmCanceltimer();
        ddmClose();
        args.ddmenuitem = $(".spcar_child").show();
    };
    var ddmClose = function () {
        if (args.ddmenuitem) args.ddmenuitem.hide();
    };
    var ddmTimer = function () {
        args.closetimer = window.setTimeout(ddmClose, args.timeout);
    };
    var ddmSelect = function () {

    };
    var ddmCanceltimer = function () {
        if (args.closetimer) {
            window.clearTimeout(args.closetimer);
            args.closetimer = null;
        }
    };

    $(".shop_opera .buyer").on('mouseover', ddmOpen);
    $(".shopcar_dispper").on('mouseleave', ddmTimer);

};









jQuery.selectcountry = function (sitemenu,name) {
    var args = {
        timeout: 500,
        closetimer: 0,
        ddmenuitem: 0
    };
    var ddmOpen = function() {
        ddmCanceltimer();
        ddmClose();
        args.ddmenuitem = $(this).addClass("countrycur");
    };
    var ddmClose = function () {
        if (args.ddmenuitem) args.ddmenuitem.removeClass("countrycur");
    };
    var ddmTimer = function () {
        args.closetimer = window.setTimeout(ddmClose, args.timeout);
    };
    var ddmSelect = function() {
        $(this).parent().find('li a').removeClass("cur");
        $(this).find('a').addClass("cur");
        $(name).html($(this).html());
    };
    var ddmCanceltimer = function () {
        if (args.closetimer) {
            window.clearTimeout(args.closetimer);
            args.closetimer = null;
        }
    };
    
    $(sitemenu).bind('mouseover', ddmOpen);
    $(sitemenu).bind('mouseout', ddmTimer);
    $(sitemenu + ' li a').bind('click', ddmSelect);
    document.onclick = ddmClose;
};
$(function () {
    //首页左导航
    $.selectnav(".commoditype");
});
jQuery.selectnav = function (sitemenu, name) {
    var args = {
        timeout: 500,
        closetimer: 0,
        ddmenuitem: 0
    };
    var ddmOpen = function () {
        ddmCanceltimer();
        ddmClose();
        args.ddmenuitem = $(this).find(".type_detail").show();
    };
    var ddmClose = function () {
        if (args.ddmenuitem) args.ddmenuitem.hide();
    };
    var ddmTimer = function () {
        args.closetimer = window.setTimeout(ddmClose, args.timeout);
    };
    var ddmSelect = function () {

    };
    var ddmCanceltimer = function () {
        if (args.closetimer) {
            window.clearTimeout(args.closetimer);
            args.closetimer = null;
        }
    };
    $(sitemenu + '>div').bind('mouseover', ddmOpen);
    $(sitemenu + '>div').bind('mouseout', ddmTimer);
    document.onclick = ddmClose;
};



