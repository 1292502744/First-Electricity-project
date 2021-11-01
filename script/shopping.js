$(function () {
    //全选 全不选
    $('#checkall').change(function () {
        $('.shopping_check').prop('checked', $(this).prop('checked'));
    })

    //全选框跟着单元复选框全选时变动
    $('.shopping_check').change(function () {
        if ($('.shopping_check:checked').length === $('.shopping_check').length) {
            $('#checkall').prop('checked', true);
        } else {
            $('#checkall').prop('checked', false);
        }
    })

    //点击按钮改变商品数量
    //增加按钮
    $('.shopping_add').click(function () {
        var add = $(this).siblings('.shopping_quantity').val();
        add++;
        $(this).siblings('.shopping_quantity').val(add);

        //改变商品总金额 当前商品单价 * 数量
        var price = $(this).parent().siblings('.shopping_price').text();
        $(this).parent().siblings('.shopping_total').text((price * add).toFixed(2));
    })
    //减少按钮
    $('.shopping_reduce').click(function () {
        var reduce = $(this).siblings('.shopping_quantity').val();
        if (reduce == 1) {
            return false;
        }
        reduce--;
        $(this).siblings('.shopping_quantity').val(reduce);

        var price = $(this).parent().siblings('.shopping_price').text();
        $(this).parent().siblings('.shopping_total').text((price * reduce).toFixed(2));
    })

    //修改文本框的值改变商品总金额
    $('.shopping_quantity').change(function () {
        //获取当前文本框的值
        var now = $(this).val();
        //获取商品的单价
        var price = $(this).parent().siblings('.shopping_price').text();
        if (now <= 0) {
            $(this).val(1);
        } else {
            //计算总金额
            $(this).parent().siblings('.shopping_total').text((price * now).toFixed(2));
        }
    })

    // 计算总数和总金额
    // 计算总金额
    // $('.shopping_check').change(function () {
    //     if ($(this).prop('checked') == true) {
    //         var money = 0;
    //         money += parseFloat($(this).parent().siblings('.shopping_total').text());
    //         $('.shopping_close h1 span').text(money.toFixed(2));
    //     } else {
    //         $('.shopping_close h1 span').text(0);
    //     }
    // })

    // //计算总数
    // $('.shopping_check').change(function () {
    //     if ($(this).prop('checked') == true) {
    //         var count = 0;
    //         count += parseInt($(this).parent().siblings('.shopping_val').children('.shopping_quantity').val());
    //         console.log(count);
    //         $('.shopping_close h3 span').text(count);
    //     } else {
    //         $('.shopping_close h3 span').text(0);
    //     }
    // })

    $('.shopping_check').change(function () {
        if ($(this).prop('checked') == true) {
            var money = 0;
            var count = 0;

            money += parseFloat($(this).parent().siblings('.shopping_total').text());
            count += parseInt($(this).parent().siblings('.shopping_val').children('.shopping_quantity').val());
            $('.shopping_close h1 span').text(money.toFixed(2));
            $('.shopping_close h3 span').text(count);
        } else {
            $('.shopping_close h1 span').text(0);
            $('.shopping_close h3 span').text(0);
        }
    })


    //删除操作
    $('.shopping_delete span').click(function () {
        $(this).parents('tr').remove();
    })
})