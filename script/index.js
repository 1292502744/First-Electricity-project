$(function () {
    var $username = $("#username");
    var $loginIn = $("#login_in");
    var $register = $("#register");
    var $myMagic = $("ul").find(".my_magic")
    var cookie = new Cookie();
    var token = cookie.get("token");

    // 点击登录按钮跳转到登录页面
    $loginIn.click(function () {
        jumpTo("http://127.0.0.1/First-Electricity-project/page/record.html");
    })
    //  点击注册按钮跳转到注册页面
    $register.click(function () {
        jumpTo("http://127.0.0.1/First-Electricity-project/page/register.html");
    })

    //  点击我的美妆之后跳转到收货信息页面
    $myMagic.click(function () {
        jumpTo("http://127.0.0.1/First-Electricity-project/page/consignee.html");
    })






    $.ajax({
        type: "get",
        url: "http://1.14.68.137:8000/userinfo/",
        beforeSend: function (res) {
            res.setRequestHeader("token", token);
        },
        success: function (response) {
            if (response.code == 0) {
                var username = response.data.username;
                $username.text(`您好，${username}欢迎来到美妆商城!`)
                $loginIn.css("display", "none");
                $register.text(`退出登录`);
            } else {
                $username.css("display", "none");
                $loginIn.css("display", "block");
                $register.text(`免费注册`);
            }
            $register.on("click", function () {
                cookie.clear("token")
                location.reload(true);
            })
        }
    });

    function jumpTo(url) {
        location.href = url
    }
})