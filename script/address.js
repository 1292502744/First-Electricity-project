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

    $.get("http://1.14.68.137:8000/areas/", function (response) {
        // console.log(data);
        data = response.data;
        getOtherElements($province, data);
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
            beforeSend: function (res) {
                res.setRequestHeader("token", token);
            },
            success: function (response) {
                if (response.code === 0) {
                    setInterval(function () {
                        location.href = "http://127.0.0.1/First-Electricity-project/page/consignee.html"
                    }, 3000)
                }
            }
        });
    })






})