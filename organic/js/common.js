/**
 * Created by Administrator on 2017/8/21.
 */
//simulate toggleClass
function toggleClass(obj) {
    if (obj.hasClass("active")) {
        obj.removeClass("active");
    } else {
        obj.addClass("active");
    }
}

//fix the header
var oHeader = $("header");
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        oHeader.addClass("fixed");
    } else {
        oHeader.removeClass("fixed");
    }
});

//mycart
function getTotal() {
    var aPriceCurrents = $(".mycart-desc .price-current");
    var oSubtotal = $(".subtotal .price-current");
    var tmp = 0;
    for (var i = 0; i < aPriceCurrents.length; i++) {
        tmp += parseFloat(aPriceCurrents.eq(i).text().substring(1));
    }
    oSubtotal.text("$" + tmp.toFixed(2));
}
getTotal();
$(".mycart-popup .icon-close").click(function () {
    var oBadge = $(".badge");
    $(this).parent().remove();
    oBadge.text(parseInt(oBadge.text()) - 1)
    getTotal();
});

//toggle the gallery
$(".icon-collapse").click(function () {
    $(".gallery-container").addClass("active");
});
$(".gallery-container .icon-close").click(function () {
    $(".gallery-container").removeClass("active");
});

//to top
$(".icon-up").click(function () {
    $("body,html").animate({scrollTop: 0}, 800);
});

//add to my favorite
$(".icon-like").click(function () {
    toggleClass($(this));
});
//add to cart
$(".icon-basket").click(function () {
    toggleClass($(this));
});