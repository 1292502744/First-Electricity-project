$(function () {
    var cookie = new Cookie();
    var token = cookie.get("token");
    var $address = $("#address");
    var $addAddress = $(".consignee_table_last .add_address")
    //删除操作
    $('.consigness_delete').click(function () {
        $(this).parents('tr').remove();
    })


    $.ajax({
        type: "get",
        url: "http://1.14.68.137:8000/address/",
        beforeSend: function (res) {
            res.setRequestHeader("token", token);
        },
        success: function (response) {
            var data = response.data;
            console.log(data);
            data.some(function (item) {
                console.log(item);
                var newAddress = $address.clone(true).removeAttr("id");
                newAddress.children().eq(0).text(item.name);
                newAddress.children().eq(1).text(item.phone);
                newAddress.children().eq(2).text(item.province + item.city + item.county + item.detail);
                $("table tr").eq(0).after(newAddress)
            })
        }
    });

    $addAddress.click(function () {
        location.href = "http://127.0.0.1/First-Electricity-project/page/address.html";
    })

})