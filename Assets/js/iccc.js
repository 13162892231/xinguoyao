$(function () {

    $(".newright_choose_main div span").mouseover(function () {
        $(this).addClass("newright_choose_main_span1").siblings("span").removeClass("newright_choose_main_span1");
    }).mouseout(function () {
        $(this).removeClass("newright_choose_main_span1").siblings("span");
    })


    var index = 0;
    Swidth = 1200;
    timer = null;
    len = $(".newright_choose_title span a").length;

    function NextPage() {
        if (index > 3) {
            index = 0;
        }
        $(".newright_choose_title span a").removeClass("newright_choose_title_a1").eq(index).addClass("newright_choose_title_a1");
        $(".newright_choose_main").stop(true, false).animate({ left: -index * Swidth + "px" }, 600)
    }

    function PrevPage() {
        if (index < 0) {
            index = 3;
        }
        $(".newright_choose_title span a").removeClass("newright_choose_title_a1").eq(index).addClass("newright_choose_title_a1");
        $(".newright_choose_main").stop(true, false).animate({ left: -index * Swidth + "px" }, 600)
    }

    $(".newright_choose_title span a").each(function (a) {
        $(this).mouseover(function () {
            index = a;
            NextPage();
        });
    });

    $(".newright_choose_next img").click(function () {
        index++;
        NextPage();
    });
  
    $(".newright_choose_prev img").click(function () {
        index--;
        PrevPage();
    });

    var timer = setInterval(function () {
        index++;
        NextPage();
    }, 114000);

    $(".newright_choose_next img , .newright_choose_main , .newright_choose_prev img , .newright_choose_title span").mouseover(function () {
        clearInterval(timer);
    });
    $(".newright_choose_next img , .newright_choose_main , .newright_choose_prev img , .newright_choose_title span").mouseleave(function () {
        timer = setInterval(function () {
            index++;
            NextPage();
        }, 114000);
    });

})