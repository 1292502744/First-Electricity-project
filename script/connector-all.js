//  获取按钮元素
var btn = $(".Enter")
var registerBtn = document.getElementsByClassName("skip");
var emailVal = document.getElementsByClassName("Email");
var warnE = document.getElementsByClassName("warn_E");
var user = document.getElementsByClassName("User");
var pwd = document.getElementsByClassName("Pass");
var code = document.getElementsByClassName("Code");



// 当用户名失去焦点是 判断用户名是否可用
$(user).on("blur", function () {
    $.post("http://1.14.68.137:8000/verify_username/", {
        username: $(user).val()
    },
        function (data) {
            console.log(data);
        } 
    )
})

//  点击了发送按钮之后设置一个定时器
var serialNumber = ""; 
btn.on("click", function () {
    $(this).attr("disabled", "disabled");
    var timer = 60;
    var timekeep = setInterval( function () {
        if (timer == 0) {
            clearInterval(timekeep);
            $(btn).text("发送验证码");
            timer = 60;
        } else {
            timer--;
            $(btn).text("还剩下" + timer + "秒");
        }
    }, 1000)

    //  点击了发送验证码按钮之后，发送邮箱验证码请求
    $.post("http://1.14.68.137:8000/email/", {
        email: $(emailVal).val()
    },
        function (data) {
            console.log(data);
            if (data.code == 0) {
                serialNumber = data.no;
                $(warnE).css("display", "block");
                $(warnE).text(data.msg);
                disappear();
            } else {
                $(warnE).css("display", "block");
                $(warnE).text(data.errmsg);
                disappear();
            }
        }
    )
})



function disappear() {
    setTimeout(function () {
        $(warnE).css("display", "none");
    }, 3000)
}

// 注册事件
$(registerBtn).on("click", function () {
    $.post("http://1.14.68.137:8000/register/", {
        username: $(user).val(),
        password: $(pwd).val(),
        no: serialNumber,
        text: $(code).val()
    },
        function (data) {
            console.log(data);
        }
    )
})
