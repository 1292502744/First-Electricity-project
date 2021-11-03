$(function () {
    var cookie = new Cookie();
    var token = cookie.get("token");
    var $address = $("#address");
    var $tr = $("table tr");
    var $delete = $('.consigness_delete');
    var $compile = $(".compile");
    var baseurl = "http://1.14.68.137:8000/address/";
    var goUrl = "http://127.0.0.1/First-Electricity-project/page/address.html";
    var $addAddress = $(".consignee_table_last .add_address")
    

    // 获取地址并且添加进去
    $.ajax({
        type: "get",
        url: baseurl,
        headers: {
            token: token
        },
        success: function (response) {
            data = response.data;
            data.some(function (item, index) {
                console.log(item, index);
                $delete.attr("data-index", item.id);
                $compile.attr("data-index", index);
                var newAddress = $address.clone(true).removeAttr("id");
                newAddress.children().eq(0).text(item.name);
                newAddress.children().eq(1).text(item.phone);
                newAddress.children().eq(2).text(item.province + item.city + item.county + item.detail);
                if (item.default == 1) {
                    newAddress.children().eq(3).text("是");
                } else {
                    newAddress.children().eq(3).text("否");
                }
                $tr.eq(0).after(newAddress);
            })
        }
    });

    
    //删除操作
    $delete.click(function () {
        var dId = $delete.attr("data-index");
        console.log(dId);
        $.ajax({
            type: "delete",
            url: baseurl,
            data: {
                id: dId
            },
            headers: {
                token: token
            },
            success: function (response) {
                console.log(response);
            }
        });
        $(this).parents('tr').remove();
    })


    // 编辑操作
    $compile.on("click", function () {
        var cId = $(this).attr("data-index");
        // cookie.set("id", cId, 300000);
        var datas = data.find(function (item, index) {
            if (index == cId) {
                return item;
            }
        })
        console.log(datas);
        cookie.set("cid", datas.id);
        // cookie.set("province", window.btoa(encodeURIComponent(datas.province)));
        // cookie.set("city", datas.city);
        // cookie.set("county", datas.county);
        // cookie.set("detail", datas.detail);
        // cookie.set("name", datas.name);
        // cookie.set("phone", datas.phone);
        // cookie.set("default", datas.default);
        
        location.href = goUrl;
    })





    $addAddress.click(function () {
        location.href = goUrl;
    })

})