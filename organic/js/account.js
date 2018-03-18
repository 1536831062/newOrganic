/**
 * Created by Administrator on 2017/8/20.
 */

//panel switch
$(".account-panel-item li").click(function () {
    var arrAccountListItems = $(".account-list-item");
    var nIndexParent = $(this).parents(".account-panel-item").index();
    var nIndexThis = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(this).parents(".account-panel-item").siblings().children("ul").children("li").removeClass("active");
    arrAccountListItems.children("ul").children("li").removeClass("active");
    arrAccountListItems.eq(nIndexParent).children("ul").children("li").eq(nIndexThis).addClass("active");
});
$(".account-panel-item h2").click(function(){
    $(this).siblings("ul").slideToggle();
});

//charts
var dataAnnual = {
    "consumption": {
        "type": "bar",
        "title": "2016年消费总额",
        "label": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        "data": [6599, 8498.8, 3469, 5366, 4251.65, 9556, 2387, 7152.15, 1568.03, 12564.89, 15668, 10265],
        "unitX": "单位：月份",
        "unitY": "单位：元"
    },
    "ratio": {
        "type": "line",
        "title": "较2015年同比变化",
        "label": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        "data": [12.32, 6.59, 2.15, 9.88, 5.51, 6.67, 15.6, 10.01, 9.59, 4.43, 1.15, 7.78],
        "unitX": "单位：月份",
        "unitY": "单位：百分比"
    },
    "catalog": {
        "type": "pie",
        "title": "分类占比",
        "label": ["有机蔬菜", "有机水果", "有机面包", "有机饮料"],
        "data": [7596.58, 26985.14, 24957.62, 35402.76],
        "unitX": "单位：类",
        "unitY": "单位：元"
    }
};
var chartConcumption = new Chart($("#consumption"), {
    type: dataAnnual.consumption.type,
    data: {
        labels: dataAnnual.consumption.label,
        datasets: [
            {
                label: "消费金额",
                data: dataAnnual.consumption.data,
                backgroundColor: ["#7fba00", "#7fba00", "#7fba00", "#7fba00", "#7fba00", "#7fba00", "#7fba00", "#7fba00", "#7fba00", "#7fba00", "#7fba00", "#7fba00"]
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            fonSize: 40,
            fontWeight: "bold",
            text: dataAnnual.consumption.title
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: dataAnnual.consumption.unitX
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: dataAnnual.consumption.unitY
                }
            }]
        }
    }
});
var chartRatio = new Chart($("#ratio"), {
    type: dataAnnual.ratio.type,
    data: {
        labels: dataAnnual.ratio.label,
        datasets: [
            {
                label: "比例",
                data: dataAnnual.ratio.data,
                backgroundColor: "rgba(117,209,215,0.5)"
            }
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            fonSize: 40,
            fontWeight: "bold",
            text: dataAnnual.ratio.title
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: dataAnnual.ratio.unitX
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: dataAnnual.ratio.unitY
                }
            }]
        }
    }
});
var chartCatalog = new Chart($("#catalog"), {
    type: dataAnnual.catalog.type,
    data: {
        labels: dataAnnual.catalog.label,
        datasets: [{
            data: dataAnnual.catalog.data,
            backgroundColor: ["#f6ae16", "#f67b1d", "#f64f1b", "#f64717"]
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            fonSize: 40,
            fontWeight: "bold",
            text: dataAnnual.catalog.title
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: dataAnnual.catalog.unitX
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: dataAnnual.catalog.unitY
                }
            }]
        }
    }
});

