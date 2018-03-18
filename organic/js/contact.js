/**
 * Created by Administrator on 2017/8/20.
 */
//function to handle map
function mapHandler() {
    var map = new BMap.Map("map");
    map.centerAndZoom("成都", 15);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("成都");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
        }
        else {
            alert('failed' + this.getStatus());
        }
    }, {enableHighAccuracy: true});
}
mapHandler();

//function to handle sending message
function sendMessage() {
    var patternEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    var patternPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    var oUserName = $("#username");
    var oEmail = $("#email");
    var oPhone = $("#phone");
    var oMessage = $("#message");
    var flag1 = false;//for username
    var flag2 = false;//for email
    var flag3 = false;//for phone
    var flag4 = false;//for message

    function checkNull(target) {
        if (!target.val()) {
            target.addClass("error");
            return false;
        } else {
            target.removeClass("error");
            return true;
        }
    }

    function checkFormat(target, pattern) {
        if (!target.val()) {
            target.addClass("error");
            return false;
        } else {
            if (pattern.test(target.val())) {
                target.removeClass("error");
                return true;
            } else {
                target.addClass("error");
                return false;
            }
        }
    }

    oUserName.blur(function () {
        flag1 = checkNull($(this), flag1)
    });
    oEmail.blur(function () {
        flag2 = checkFormat($(this), patternEmail, flag2)
    });
    oPhone.blur(function () {
        flag3 = checkFormat($(this), patternPhone, flag3)
    });
    oMessage.blur(function () {
        flag4 = checkNull($(this), flag4)
    });
    $("#send").click(function () {
        if (flag1 && flag2 && flag3 && flag4) {
            oUserName.val("");
            oEmail.val("");
            oPhone.val("");
            oMessage.val("");
        }
    })
}
sendMessage();
