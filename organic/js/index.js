/**
 * Created by Administrator on 2017/8/21.
 */

//banner
function banner() {
    var aBannerItems = $(".banner-item");
    var aBtns = aBannerItems.find(".btn");
    var aDots = $(".banner-dots");
    var timer;
    var index = 0;

    function autoPlay() {
        if (index >= aBannerItems.length) {
            index = 0;
        }
        changeClass(aBannerItems.eq(index));
        changeClass(aDots.eq(index));
        index++;
    }

    timer = setInterval(autoPlay, 3000);
    function changeClass(obj) {
        obj.addClass("active").siblings().removeClass("active");
    }

    aBtns.hover(function () {
        clearInterval(timer);
    }, function () {
        clearInterval(timer);
        timer = setInterval(autoPlay, 3000);
    });
    aDots.hover(function () {
        clearInterval(timer);
        changeClass($(this));
        changeClass(aBannerItems.eq($(this).index()));
    }, function () {
        clearInterval(timer);
        index = $(this).index() + 1;
        timer = setInterval(autoPlay, 3000);
    });


    autoPlay();
}
banner();

//all
$(".all-title .btn").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".all-tab").eq($(this).index()).addClass("active").siblings().removeClass("active");
});
$(".all-tab .slider-bar li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).parent().siblings(".all-tab-container").animate({left: -$(".all-container").width() * $(this).index()}, 800);
});

//goods
$(".goods-tab-container .slider-bar li").click(function () {
    var aGoodsTabWraps = $(this).parent().siblings(".goods-tab-wrap");
    $(this).addClass("active").siblings().removeClass("active");
    aGoodsTabWraps.eq($(this).index()).addClass("scaleIn").siblings().removeClass("scaleIn");
});

//promotion-goods
$(".production-goods-control li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".promotion-goods-wrap").animate({
        left: -$(this).index() * $(".promotion-goods-item").outerWidth(true) * 2
    }, 800)
});

//promotion-countdown
function countdown() {
    var aItems = $(".promotion-countdown-item");
    //get the date whenever open the page
    var nToday = new Date();
    var nYear = nToday.getFullYear();
    var nMonth = nToday.getMonth();
    var nDate = nToday.getDate();

    //main function
    function countHandler(year, month, date) {
        //define the deadline
        var nDeadline = new Date(year, month, date, 24, 0, 0).getTime();
        var nNow = new Date().getTime();
        var nDifference = nDeadline - nNow;

        //hours to deadline
        var nHours = Math.floor(nDifference / (60 * 60 * 1000));
        //milliseconds left
        var nLeave1 = nDifference % (60 * 60 * 1000);
        //minutes to deadline
        var nMinutes = Math.floor(nLeave1 / (60 * 1000));
        //milliseconds left
        var nLeave2 = nLeave1 % (60 * 1000);
        //seconds to deadline
        var nSeconds = Math.floor(nLeave2 / 1000);
        //show time
        aItems.eq(0).text(checkHandle(nHours));
        aItems.eq(1).text(checkHandle(nMinutes));
        aItems.eq(2).text(checkHandle(nSeconds));
    }

    //check format
    function checkHandle(num) {
        if (num < 10) {
            return "0" + num;
        } else {
            return num;
        }
    }

    //make the main function can accept arguments by using an anonymous function to wrap it
    setInterval(function () {
        countHandler(nYear, nMonth, nDate)
    }, 1000)
}
countdown();

//recommendation
function recommendationHandler(obj) {
    var oPanelBox = obj.find(".recommendation-panel-box");
    var aBoxInner = oPanelBox.children();
    var nLength = aBoxInner.length;
    oPanelBox.prepend(aBoxInner.last().clone()).append(aBoxInner.first().clone()).css({left: -aBoxInner.width()});
    var index = 1;
    //prev panel box
    obj.find(".prev").click(function () {
        index--;
        var tmpPanelBox = $(this).parents(".recommendation-panel-title").siblings();
        if (!tmpPanelBox.is(":animated")) {
            tmpPanelBox.animate({
                left: -aBoxInner.width() * index
            }, 800, function () {
                if (index < 1) {
                    index = nLength;
                    $(this).css({left: -aBoxInner.width() * (index)})
                }
            });
        }
    });
    //next panel box
    obj.find(".next").click(function () {
        index++;
        var tmpPanelBox = $(this).parents(".recommendation-panel-title").siblings();
        if (!tmpPanelBox.is(":animated")) {
            tmpPanelBox.animate({
                left: -aBoxInner.width() * index
            }, 800, function () {
                if (index >= nLength + 1) {
                    index = 1;
                    $(this).css({left: -aBoxInner.width()})
                }
            });
        }
    })
}
recommendationHandler($("#arrival"));//new arrival
recommendationHandler($("#best"));//best seller
recommendationHandler($("#random"));//random recommendation