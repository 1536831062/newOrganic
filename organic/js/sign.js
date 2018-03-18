/**
 * Created by Administrator on 2017/8/22.
 */
//status for sign in
var bEmailIn, bPasswordIn;

//status for sign up
var bUsernameUp, bEmailUp, bPasswordUp1, bPasswordUp2;

//patterns
var patternUsername = /^[a-zA-Z0-9_-]{4,10}$/;
var patternEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var patternPassword = /^[a-zA-Z0-9]{6,18}$/;

//define a check function for common use
function check(val, tip, msg1, msg2, pattern) {
    if (val) {
        if (pattern.test(val)) {
            tip.text("");
            return true;
        } else {
            tip.text(msg1);
            return false;
        }
    } else {
        tip.text(msg2);
        return false;
    }

}

//sign in
$("#email-in").blur(function () {
    bEmailIn = check($(this).val(), $("#tip-email-in"), "请输入正确的邮箱！", "邮箱不能为空！", patternEmail);
});
$("#password-in").blur(function () {
    bPasswordIn = check($(this).val(), $("#tip-password-in"), "请输入正确的密码！", "密码不能为空！", patternPassword);
});
$("#sign-in-btn").click(function () {
    if (bEmailIn && bPasswordIn) {
        window.location.href = "account.html";
    }
});

//sign up
$("#username-up").blur(function () {
    bUsernameUp = check($(this).val(), $("#tip-username-up"), "请输入正确的用户名！", "用户名不能为空！", patternUsername);
});
$("#email-up").blur(function () {
    bEmailUp = check($(this).val(), $("#tip-email-up"), "请输入正确的邮箱！", "邮箱不能为空！", patternEmail);
});
$("#password-up-1").blur(function () {
    bPasswordUp1 = check($(this).val(), $("#tip-password-up-1"), "请输入正确的密码！", "密码不能为空！", patternPassword);
});
$("#password-up-2").blur(function () {
    var val = $(this).val();
    var oTipPasswordUp2 = $("#tip-password-up-2");
    if ($(this).val()) {
        if (val === $("#password-up-1").val()) {
            oTipPasswordUp2.text("");
            bPasswordUp2 = true;
        } else {
            oTipPasswordUp2.text("两次密码应当一致！");
            bPasswordUp2 = false;
        }
    } else {
        oTipPasswordUp2.text("请重复密码！");
        bPasswordUp2 = false;
    }
});
$("#sign-up-btn").click(function () {
    if (bUsernameUp && bEmailUp && bPasswordUp1 && bPasswordUp2) {
        window.location.href = "account.html";
    }
});

//switch
$(".switch").click(function(){
    $(this).parents("form").hide().removeClass("rotateIn").siblings().addClass("rotateIn").show();
});