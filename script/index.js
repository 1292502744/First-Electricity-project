$(function () {
    var cookie = new Cookie();
    var token = cookie.get("token");
    $.ajax({
        type: "get",
        url: "http://1.14.68.137:8000/userinfo/",
        beforeSend: function (res) {
            res.setRequestHeader("token", token);
        },
        success: function (response) {
            console.log(response);
        }
    });
})