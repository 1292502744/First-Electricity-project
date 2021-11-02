$(function () {
    var $province = $("#province");
    var $city = $("#city");
    var $district = $("#district");
    var cookie = new Cookie();
    var token = cookie.get("token");

    $.get("http://1.14.68.137:8000/areas/", function (response) {
        // console.log(data);
        data = response.data;
        data.some(function (e) {
            $province.append(`<option value=${e.id}>${e.name}</option>`);
        });
    })

    $province.change(function () {
        data.find(function (item, index) {
            if (item.id === this.value) {
                return item;
            }
        })
    })






})