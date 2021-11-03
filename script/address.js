$(function () {
    var $province = $("#province");
    var $city = $("#city");
    var $district = $("#district");
    var $btnSave = $(".address_button .button_save");
    var $information = $("#information");
    var $username = $("#name");
    var $telephone = $("#telephone");
    var $checked = $(".address_checkbox input");

    var cookie = new Cookie();
    var token = cookie.get("token");
    var cId = cookie.get("cid")
    var name_ = "黑龙江省";

    //  省级联动
    $.get("http://1.14.68.137:8000/areas/", function (response) {
        data = response.data;
        getOtherElements($province, data);
        // var datas = data.find(function (item) {
        //     if (item.name == name_) {
        //         return item
        //     }
        // })
        // console.log(datas);
        // var options = $province.children();
        // options.each(function (index, item) {
        //     console.log($(item).val());
        //     console.log(datas.id);
        //     if ($(item).val() === datas.id) {
        //         $(item).attr("selected", "selected");
        //     }
        // })
    })


    //  选择省
    $province.change(function () {
        var province = data.find(function (item, index) {
            if (item.id === $province.val()) {
                return item;
            }
        })
        // console.log(province);
        getOtherElements($city, province.children)
    })

    //  选择市
    $city.change(function () {
        var province = data.find(function (item, index) {
            if (item.id === $province.val()) {
                return item;
            }
        })
        var city = province.children.find(function (item) {
            if (item.id === $city.val()) {
                return item;
            }
        })
        getOtherElements($district, city.children, false);
    })


    // 因为需要重复遍历  所以将其封装成一个函数  每次选择都要将前一个给清空
    function getOtherElements(el, data, Empty = true) {
        if (Empty) {
            emptyOption(city, $district)
        } else {
            emptyOption($district)
        }
        data.some(function (item) {
            var option = (`<option value=${item.id}>${item.name}</option>`);
            el.append(option);
        });
    }

    function emptyOption(...values) {
        values.some(function (item) {
            $("<option>--请选择--</option>").prependTo($(item).empty());
        })
    }


    //  添加新地址
    // $btnSave.click(function () {
    //     var data = {
    //         province_id: $province.val(),
    //         city_id: $city.val(),
    //         county_id: $district.val(),
    //         detail: $information.val(),
    //         name: $username.val(),
    //         phone: $telephone.val(),
    //     }
    //     if ($checked.prop("checked")) {
    //         data.default = 1
    //     }
    //     $.ajax({
    //         type: "post",
    //         url: "http://1.14.68.137:8000/address/",
    //         data: data,
    //         beforeSend: function (res) {
    //             res.setRequestHeader("token", token);
    //         },
    //         success: function (response) {
    //             if (response.code === 0) {
    //                 setInterval(function () {
    //                     location.href = "http://127.0.0.1/First-Electricity-project/page/consignee.html"
    //                 }, 3000)
    //             }
    //         }
    //     });
    // })

    // 修改地址
    if (cId) {
        $btnSave.click(function () {
            var datas = {
                id: cId,
                province_id: $province.val(),
                city_id: $city.val(),
                county_id: $district.val(),
                detail: $information.val(),
                name: $username.val(),
                phone: $telephone.val()
            }
            $.ajax({
                type: "put",
                url: "http://1.14.68.137:8000/address/",
                datatype: "json",
                data: datas,
                headers: {
                    token: token
                },
                success: function (response) {
                    console.log(response);
                    // if (response.code === 0) {
                        setInterval(function () {
                            location.href = "http://127.0.0.1/First-Electricity-project/page/consignee.html"
                                cookie.clear("id");
                        }, 3000)
                    // }
                }
            });
        })

    } else {
        $btnSave.click(function () {
            var data = {
                province_id: $province.val(),
                city_id: $city.val(),
                county_id: $district.val(),
                detail: $information.val(),
                name: $username.val(),
                phone: $telephone.val(),
            }
            if ($checked.prop("checked")) {
                data.default = 1
            }
            $.ajax({
                type: "post",
                url: "http://1.14.68.137:8000/address/",
                data: data,
                headers: {
                    token: token
                },
                success: function (response) {
                    console.log(response);
                    if (response.code === 0) {
                        setInterval(function () {
                            location.href = "http://127.0.0.1/First-Electricity-project/page/consignee.html";
                        }, 3000)
                    }
                }
            });
        })
    }





})