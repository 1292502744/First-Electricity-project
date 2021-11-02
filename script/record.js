$(function () {

    var $loginBtn = $(".record .skip");
    var $code = $("#Code");
    var $num = $('.Num');
    var cookie = new Cookie();

    // 点击切换验证码
    var uid = 1;
    $('.Num').click(function(){
        uid++;
        $('.Num').attr('src','http://1.14.68.137:8000/image_code/?uuid=' + uid);
    })

    // 验证码一分钟后过期  所以设个定时器 让验证码一分钟换一次
    var codeTime = setInterval(function () {
        $('.Num').click();
    }, 60000)

    // 当验证码的input框获取倒焦点时  停止定时器
    $code.on("focus", function () {
        clearInterval(codeTime)
    })

    $loginBtn.on("click", function () {
        $.ajax({
            type: "post",
            url: "http://1.14.68.137:8000/login/",
            data: {
                username: $("#User").val(),
                password: $("#Pass").val(),
                uuid: uid,
                code: $code.val()
            },
            success: function (response) {
                if (response.code == 0) {
                    var token = response.token;
                    cookie.set("token", token, 43200000);
                    location.href = "http://127.0.0.1/First-Electricity-project/index.html";
                }
            },
        });
    })


})