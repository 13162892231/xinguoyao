$(function () {
    //地址
    $(".consignee_cont .consignee_item").click(function () {
        $(".consignee_cont .consignee_item").removeClass("consignee_select");
        $(".consignee_cont .consignee_item b").removeClass("cur");
        $(this).addClass("consignee_select");
        $(this).find("b").addClass("cur");
    });
    $(".consignee_content .consignee_item").click(function () {
        $(".consignee_content .consignee_item").removeClass("consignee_select");
        $(".consignee_content .consignee_item b").removeClass("cur");
        $(".consignee_content .consignee_item span").removeClass("cur");
        $(this).addClass("consignee_select");
        $(this).find("b").addClass("cur");
        $(this).find("span").addClass("cur");
    });
    $(".addr_switch").click(function () {
        if ($(this).hasClass("switch_off")) {
            $(this).removeClass("switch_off");
            $(this).addClass("switch_on");
            $(this).find("span").html("收起地址");
            $(this).parent().find("ul").css("height", "auto");
        } else {
            $(this).removeClass("switch_on");
            $(this).addClass("switch_off");
            $(this).find("span").html("更多地址");
            $(this).parent().find("ul").css("height", "42px");
        }
    });

    $(".edit").click(function () {
        $("body").attr("style", "overflow:hidden");
        $(".mask").show();
        $(".addr_receipt").fadeIn(300);
    });
    //发票
    $(".added_tax").click(function () {
        if ($(this).find("input[type='checkbox']").prop("checked")) { }
        else {
            $(this).parent().children().find("input[type='checkbox']").prop("checked", false);
            $(this).find("input[type='checkbox']").prop("checked", true);
        }
    });
    $(".unadded_tax").click(function () {
        if ($(this).prop("checked")) {}
        else {
            $(this).parent().children().find("input[type='checkbox']").prop("checked", false);
            $(this).find("input[type='checkbox']").prop("checked", true);
        }
    });
    $(".update").click(function () {
        $("body").attr("style", "overflow:hidden");
        $(".mask").show();
        $(".item").fadeIn(300);
    });
    
    $(".btn_save a").click(function () {
        $("body").attr("style", "");
        $(".mask").hide();
        $(".item").fadeOut(300);
        $(".addr_receipt").fadeOut(300);
    });
    $(".receipt span").click(function () {
        $("body").attr("style", "");
        $(".mask").hide();
        $(".item").fadeOut(300);
        $(".addr_receipt").fadeOut(300);
    });
    $(".mask").click(function () {
        $("body").attr("style", "");
        $(".mask").hide();
        $(".item").fadeOut(300);
        $(".addr_receipt").fadeOut(300);
    });
    //发票完








});