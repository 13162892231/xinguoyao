$(function () {

    //首页左导航
    $.selectcat();


    //下一页
    $(".title_right a.nextbtn").on('click', function () {
        var curpage = $(this).parent().children().find(".current").html();
        curpage++;
        var maxpage = $(this).parent().children().find(".maxpage").html();
        $(this).parent().find(".prevbtn img").attr("src", "Assets/images/prev.png");
        if (curpage < maxpage) {
            $(this).parent().children().find(".current").html("" + curpage);
        }
        else if (curpage = maxpage) {
            $(this).parent().children().find(".current").html("" + curpage);
            $(this).find("img").attr("src", "Assets/images/next_1.png");
        }
        else { }
    });
    //上一页
    $(".title_right a.prevbtn").on('click', function () {
        var curpage = $(this).parent().children().find(".current").html();
        curpage--;
        $(this).parent().find(".nextbtn img").attr("src", "Assets/images/next.png");
        if (curpage > 1) {
            $(this).parent().children().find(".current").html("" + curpage);
        }
        else if (curpage = 1) {
            $(this).parent().children().find(".current").html("" + curpage);
            $(this).find("img").attr("src", "Assets/images/prev_1.png");
        }
        else { }
    });


});



//鼠标移动显示内容
jQuery.selectcat = function () {
    //参数
    var args = {
        timeout: 500, //关闭时间
        closetimer: 0,
        ddmenuitem: 0,
        ddmenuitemtwo: 0
    };
    //打开页面
    var ddmOpen = function () {
        ddmCloseTimer(); //关闭Timeout
        ddmClose(); //关闭页面
        args.ddmenuitem = $(".commoditype").show();
        //console.log(args);
    };
    //打开二级页面
    var ddmOpenTwo = function () {
        //ddmCanceltimer(); //关闭Timeout
        ddmCloseTwo(); //关闭页面
        args.ddmenuitemtwo = $(this).find(".type_detail").show();
        //console.log(args);
    };
    //关闭页面
    var ddmClose = function () {
        if (args.ddmenuitem) args.ddmenuitem.hide();
        //console.log(args);
    };
    //关闭二级页面
    var ddmCloseTwo = function () {
        if (args.ddmenuitemtwo) args.ddmenuitemtwo.hide();
        //console.log(args);
    };
    //加上Timeout
    var ddmTimer = function () {
        args.closetimer = window.setTimeout(ddmClose, args.timeout);
        //console.log(this);
    };
    var ddmSelect = function () {

    };
    //清除Timeout
    var ddmCloseTimer = function () {
        if (args.closetimer) {
            //关闭存在的Timeout
            window.clearTimeout(args.closetimer);
            args.closetimer = null;
        }
    };

    $(".menubar h2").bind('mouseover', ddmOpen);
    $(".commoditype>div").bind('mouseover', ddmOpenTwo);
    $(".commoditype").bind('mouseleave', ddmTimer);
    document.onclick = ddmClose;
};


