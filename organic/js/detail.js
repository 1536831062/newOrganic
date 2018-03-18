/**
 * Created by Administrator on 2017/8/22.
 */
//product img switch
$(".products-img-small li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".products-img-main ul").animate({left: -$(".products-img-main li").outerWidth(true) * ($(this).index())})
});

//count operation
$(".icon-subtract").click(function () {
    var oCount = $(".count");
    if (oCount.val() > 0) {
        oCount.val(parseInt(oCount.val()) - 1);
    }
});
$(".icon-add").click(function () {
    var oCount = $(".count");
    oCount.val(parseInt(oCount.val()) + 1);
});

//domain switch
$(".detail-right-descriptions li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".descriptions-item").eq($(this).index()).addClass("active").siblings().removeClass("active");
});

//review
$(".review-container .icon-star").hover(function(){
    $(this).addClass("active").prevAll().addClass("active")
},function(){
    $(this).removeClass("active").siblings().removeClass("active");
});