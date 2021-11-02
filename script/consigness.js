$(function () {
    var cookie = new Cookie();
    var token = cookie.get("token");
    var $address = $("#address");
    var $addAddress = $(".consignee_table_last .add_address")
    //删除操作
    $('.consigness_delete').click(function () {
        $(this).parents('tr').remove();
    })

    $address.css("display", "none").clone(true).removeAttr("id");

    $.ajax({
        type: "get",
        url: "http://1.14.68.137:8000/address/",
        beforeSend: function (res) {
            res.setRequestHeader("token", token);
        },
        success: function (response) {
            console.log(response);
        }
    });

    $addAddress.click(function () {
        location.href = "http://127.0.0.1/First-Electricity-project/page/address.html";
    })

})