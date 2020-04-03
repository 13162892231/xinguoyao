$(function () {
    //下一页
    $("a.nextbtn").on('click', function () {
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
    $(" a.prevbtn").on('click', function () {
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
    //上全选
    $(".title input[type='checkbox']").click(function () {
        if ($(this).prop("checked")) {
            $(this).parent().parent().parent().parent().parent().find("input[type='checkbox']").prop("checked", true);
        }
        else {
            $(this).parent().parent().parent().parent().parent().find("input[type='checkbox']").prop("checked", false);
        }

    });
    //下全选
    $(".parent_choose input[type='checkbox']").click(function () {
        if ($(this).prop("checked")) {
            $(this).parent().parent().parent().children().find("input[type='checkbox']").prop("checked", true);
        }
        else {
            $(this).parent().parent().parent().children().find("input[type='checkbox']").prop("checked", false);
        }

    });
    //今日订单
    isopen = true;
    $(".condition .order").click(function () {
        $(".fast_time").toggle();
        if (isopen) {
            $(this).css({ "background": "url('Assets/images/up_down.png')  no-repeat 100px 6px", "background-color": "#f7f7f7" });
            isopen = false;
        }
        else {
            $(this).css({ "background": "url('Assets/images/up_down.png')  no-repeat 100px -12px", "background-color": "#f7f7f7" });
            isopen = true;
        }
    });
    
    $(".condition .fast_time li").click(function () {
        $(this).html();
        $(this).parent().parent().parent().find(".order").html($(this).html());
        $(".condition .fast_time").hide();
        $(this).parent().parent().parent().find(".order").css({ "background": "url('Assets/images/up_down.png')  no-repeat 100px -12px", "background-color": "#f7f7f7" })
        isopen = true;
    });
    isclose = true;
    $(".searchMore").click(function () {
        $(".search").toggle();
        if (isclose) {
            $(this).css({ "background": "url('Assets/images/up_down.png')  no-repeat 82px 8px"});
            isclose = false;
        }
        else {
            $(this).css({ "background": "url('Assets/images/up_down.png')  no-repeat 82px -11px" });
            isclose = true;
        }

    });

    //已购买的商品
    $(".buide").click(function () {
        $(".buide_goods").show();
        $(".allshop_title").hide();
        $(".buide").css({ "color": "#ff4f51", "border-bottom": "3px solid #ff4f51" });
        $(".curs").css({ "color": "#333", "border-bottom-color": "#e7e7e7" });
    });

    //收藏过的商品
    $(".clect").click(function () {
        $(".allshop_title").show();
        $(".buide_goods").hide();
        $(".buide").css({ "color": "#333", "border-bottom-color": "#e7e7e7" });
        $(".curs").css({ "color": "#ff4f51", "border-bottom": "3px solid #ff4f51" });
    });
    //商品删除
    $(".delete").click(function () {
        $(this).parent().parent().hide();
    });
    





});