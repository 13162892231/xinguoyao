//商品详细整箱拆零点击效果
$(function () {
    //拆零与整箱
    $(".types span").click(function () {
        $(this).parent().find("span").removeClass("cur");
        $(this).addClass("cur");
        var word = $(this).html();
        if (word == "拆零") {
            $(this).parent().parent().children().find(".quantity").html("1");
        }
        else { $(this).parent().parent().children().find(".quantity").html("24"); }
    });
    //数量加
    $(".amount span.addnum").click(function () {
        var quantity = Number($(this).parent().find(".quantity").html());
        var word = $(this).parent().parent().children().find("span.cur").html();
        if (word == "拆零") {
            quantity++;
            $(this).parent().find(".quantity").html(quantity);
        }
        else if (word == "整箱") {
            quantity += 24;
            $(this).parent().find(".quantity").html(quantity);
        }
    });
    //数量减
    $(".amount span.rednum").click(function () {
        var quantity = Number($(this).parent().find(".quantity").html());
        var word = $(this).parent().parent().children().find("span.cur").html();
        if (quantity == 1) { }
        else if (word == "拆零") {
            quantity--;
            $(this).parent().find(".quantity").html(quantity);
        }
        else if (quantity <= 24 && word == "整箱") {
        }
        else {
            quantity -= 24;
            $(this).parent().find(".quantity").html(quantity);
        }
    });
    //全选
    $(".parent_choose input[type='checkbox']").click(function () {
        if ($(this).prop("checked")) {
            $(this).parent().parent().parent().parent().parent().find("input[type='checkbox']").prop("checked", true);
        }
        else {
            $(this).parent().parent().parent().parent().parent().find("input[type='checkbox']").prop("checked", false);
        }
    });


    $(".title input[type='checkbox']").click(function () {
        if ($(this).prop("checked")) {
            $(this).parent().parent().parent().find("input[type='checkbox']").prop("checked", true);
        }
        else
            $(this).parent().parent().parent().find("input[type='checkbox']").prop("checked", false);
    });
    
    //删除
    $(".delete").click(function () {
        if (($(this).parent().parent().parent().find("tr").length) > 2) {
            $(this).parent().parent().remove();
        }
        else {
            $(this).parent().parent().parent().remove();
        }
    });





});