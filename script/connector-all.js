//  获取元素
var $btn = $(".overall .Enter");
var $warnE = $(".overall .warn_E");
var $warn = $(".overall .warn");
var $userVal = $('#User').val();
var $pwdVal = $('#Pass').val();
var $codeVal = $('#Code').val();


/* 
 * 当用户名失去焦点是 判断用户名是否可用 
 */

$("#User").on("blur", function () {
    var str = $('#User').val();
    var ret = /^[A-z][0-9A-z]{6,8}$/;
    if (str) {
        if (!str.match(ret)) {
            $(".warn").text("用户名格式不正确")
                $(".warn").css({
                    display: "block"
                })
        } else {
            $.post("http://1.14.68.137:8000/verify_username/", {
                username: $("#User").val()
            },
                function (data) {
                    switch (data.code) {
                        case 0:
                            $warn.text(data.msg);
                            $warn.css("display", "block");
                            break;
                        case -1: 
                            $warn.text(data.errmsg);
                            $warn.css("display", "block");
                            break;
                    }
                } 
            )
        }
    }
    setTimeout(function () {
        $warn.css("display", "none");
    }, 3000)
})

//  点击了发送按钮之后设置一个定时器
var serialNumber = ""; 
$btn.on("click", function () {
    $(this).attr("disabled", "disabled");
    var timer = 60;
    var timekeep = setInterval( function () {
        if (timer == 0) {
            clearInterval(timekeep);
            $btn.text("发送验证码");
            timer = 60;
        } else {
            timer--;
            $btn.text("还剩下" + timer + "秒");
        }
    }, 1000)

    //  点击了发送验证码按钮之后，发送邮箱验证码请求
    $.post("http://1.14.68.137:8000/email/", {
        email: $("#Email").val()
    },
        function (data) {
            console.log(data);
            if (data.code == 0) {
                serialNumber = data.no;
                $warnE.css("display", "block");
                $warnE.text(data.msg);
            } else {
                $warnE.css("display", "block");
                $warnE.text(data.errmsg);
            }
            setTimeout(function () {
                $warnE.css("display", "none");
            }, 3000)
        }
    )
})



    

// 注册事件
// $(registerBtn).on("click", function () {
//     $.post("http://1.14.68.137:8000/register/", {
//         username: $(user).val(),
//         password: $(pwd).val(),
//         no: serialNumber,
//         text: $(code).val()
//     },
//         function (data) {
//             console.log(data);
//         }
//     )
// })
