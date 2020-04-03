$(function () {
    //筛选条件
    $(".last_type").on('click', function () {
        if ($(this).hasClass("close")) {
            $(this).removeClass("close");
            $(this).addClass("open");
            $(this).html("收起");
            $(this).parent().css("height", "auto");
            $(this).parent().parent().css("background-color", "#f7f7f7");
        } else {
            $(this).removeClass("open");
            $(this).addClass("close");
            $(this).html("更多");
            $(this).parent().css("height", "32px");
            $(this).parent().parent().css("background-color", "#fff");
        }
    });

    $("ul.type li.all").on('click', function () {
        $(this).removeClass("cur");
        $(this).parent().find("li").removeClass("cur");
    });

    $(".item li").on('click', function () {
        $(this).toggleClass("cur");
    });

    //取消筛选条件
    $("ul.type li.item .cancle").on('click', function () {
        $(this).parent().parent().parent().find(".last_type").removeClass("open");
        $(this).parent().parent().parent().find("li").removeClass("cur");
        $(this).parent().parent().parent().css("height", "32px");
        $(this).parent().parent().parent().find(".last_type").addClass("close");
        $(this).parent().parent().parent().find(".last_type").html("更多");
        $(this).parent().parent().parent().parent().css("background-color", "#fff");
    });

    //更多选择
    $(".option").on('click', function () {
        $(".no_display").toggle();
        $(this).html("更多选项（价格,价格）∧");
    });



    //排序
    $(".title_left a").on('click', function () {
        var indexNum = $(".title_left a").index(this);
        //综合
        if (indexNum == 0) {
            $(".title_left a").css({ "background-color": "#fff", "color": "#333" });
            $(this).css({ "background-color": "#ff4f51", "color": "#fff" });
            $(this).parent().children().find("img").attr("src", "Assets/images/reduce.png");
        }
            //最新
        else if (indexNum == 1)
        {
            $(this).parent().find(".comprehensive").removeClass("comprehensivecur");
            $(this).parent().children().find("img").attr("src", "Assets/images/reduce.png");
            $(".title_left a").css({ "background-color": "#fff", "color": "#333" });
            $(this).css({ "background-color": "#ff4f51", "color": "#fff" });
            $(this).find("img").attr("src", "Assets/images/rise2.png");
        }
            //销量
        else if(indexNum == 2)
        {
            $(this).parent().find(".comprehensive").removeClass("comprehensivecur");
            $(this).parent().children().find("img").attr("src", "Assets/images/reduce.png");
            $(".title_left a").css({ "background-color": "#fff", "color": "#333" });
            $(this).css({ "background-color": "#ff4f51", "color": "#fff" });
            $(this).find("img").attr("src", "Assets/images/rise2.png");
        }
            //价格

        else if (indexNum == 3) {
            $(this).parent().find(".comprehensive").removeClass("comprehensivecur");
            var imgcur = $(this).attr("cur");
            $(this).attr("cur", "1");
            $(this).parent().children().find("img").attr("src", "Assets/images/reduce.png");
            $(".title_left a").css({ "background-color": "#fff", "color": "#333" });
            $(this).css({ "background-color": "#ff4f51", "color": "#fff" });
            if (imgcur == 2)
            {
                $(this).find("img").attr("src", "Assets/images/rise2.png");
                $(this).attr("cur", "3");
            }
            else {
                $(this).find("img").attr("src", "Assets/images/rise.png");
                $(this).attr("cur", "2");
            }
        }
    });

    //下一页
    $(".center_title a.nextbtn").on('click', function () {
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
    $(".center_title a.prevbtn").on('click', function () {
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
   $(".retractall").click(function () {
        $(".retract").toggle(300);
   });
    //横竖列表
   $(".liststyle").click(function () {
       $(this).parent().find(".list_style").css("background-color", "#f7f7f7");
       $(this).css("background-color", "#fff");
       $(this).find("img").attr("src", "Assets/images/list_2.png");
       $(this).parent().find("a.list_style img").attr("src", "Assets/images/list_1.png");
       $(".center_body").hide();
       $(".center_boby").show();
   });
   $(".list_style").click(function () {
       $(this).css("background-color", "#fff");
       $(this).find("img").attr("src", "Assets/images/list_3.png");
       $(this).parent().find("a.liststyle img").attr("src", "Assets/images/list_4.png");
       $(this).parent().find("a.liststyle").css("background-color", "#f7f7f7");
       $(".center_boby").hide();
       $(".center_body").show();
   });

   $(".salearea_p").hover(function () {
       $(this).find(".salearea_div").toggle();
   });
   $(".salearea_div ul li").on('click', function () {
       $(".salearea_div ul li").removeClass("cur");
       $(this).addClass("cur");
   });
   
});




