$(function () {
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

