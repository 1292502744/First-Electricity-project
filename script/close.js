$(function () {
    //点击按钮增加减少商品数量
    $('.close_add').click(function () {
        var add = $(this).siblings('.close_quantity').val();
        add++;
        $(this).siblings('.close_quantity').val(add);

        //增加单位总金额
        var price = $(this).parent().siblings('.close_price').text();
        $(this).parent().siblings('.close_total').text((price * add).toFixed(2));
        getSum();
    })

    //减少商品数量
    $('.close_reduce').click(function () {
        var reduce = $(this).siblings('.close_quantity').val();
        if (reduce == 1) {
            return false;
        }
        reduce--;
        $(this).siblings('.close_quantity').val(reduce);

        //减少单位总金额
        var price = $(this).parent().siblings('.close_price').text();
        $(this).parent().siblings('.close_total').text((price * reduce).toFixed(2));
        getSum();
    })

    //input编辑数量后改变总金额
    $('.close_quantity').change(function () {
        //获取当前文本框的值
        var now = $(this).val();

        //获取商品单价
        var price = $(this).parent().siblings('.close_price').text();

        //单位商品的总金额 = 商品单价 * 文本框的值；
        if (now <= 0) {
            $(this).val(1);
        } else {
            $(this).parent().siblings('.close_total').text((price * now).toFixed(2));
        }
        getSum();
    })

    //计算总额
    function getSum() {
        //声明一个放总额的变量
        var money = 0;

        //把每一个小计的值拿到并相加
        $('.close_total').each(function (item, obj) {
            money += parseFloat($(obj).text());
        })
        $('#close_sum').text(money);
    }
})