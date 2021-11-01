$(function(){
    // 用户名获取
    $('.User').blur(function () {
        var str = $('.User').val();
        var ret = /^[A-z][0-9]{6,8}/;
       if (str){
            if (!ret.test(str)){
             $(".warn").css({
                    display: "block"
                })
            }else{
                $(".warn").css({
                    display: "none"
                })
            }
       }
    })

    $('.User').focus(function () {
        $(".warn").css({
            display: "none"
        })
    })

    // 密码获取
    $('.Pass').blur(function () {
        var str = $('.Pass').val();
        var ret = /[A-z0-9]{6,8}/;
        if (str){
            if (!ret.test(str)){
                $(".warn_P").css({
                    display: "block"
                })
            }else{
                $(".warn_P").css({
                    display: "none"
                })
            }
       }
    })

    $('.Pass').focus(function () {
        $(".warn_P").css({
            display: "none"
        })
    })

    // 确认密码获取
    $('.Affirm').blur(function () {
        if($('.Affirm').val() == $('.Pass').val()){
             $(".warn_A").css({
                display: "none"
            })
        }else{
            $(".warn_A").css({
                display: "block"
            })
        }
    })

    $('.Affirm').focus(function () {
        $(".warn_A").css({
            display: "none"
        })
    })

    // 电子邮箱获取
    $('.Email').blur(function () {
        var str = $('.Email').val();
        var ret = /^[0-9A-z_]{5,16}@(qq)(\.com)$/;
        if (str){
            if (!ret.test(str)){
                $(".warn_E").css({
                    display: "block"
                })
            }else{
                $(".warn_E").css({
                    display: "none"
                })
            }
       }
    })

    $('.Email').focus(function () {
        $(".warn_E").css({
            display: "none"
        })
    })

    // 验证码获取
    $('.Code').focus(function () {
        $('.paste_C').css({
            display : "none"
        })
        var thisVal = $(this).val();
        if (thisVal != ""){
            $(this).siblings("paste_C").hide();
        }
    })

    $('.Code').blur(function () {
        var thisVal = $(this).val(); 
        if (thisVal != ""){
            $(this).siblings($(".paste_C")).hide();
        }else{
            $(this).siblings($(".paste_C")).show();
        }
    }) 
    
    var uid = 1;
    $('.Num').click(function(){
        uid++;
        $('.Num').attr('src','http://1.14.68.137:8000/image_code/?uuid='+uid);
    })

    // 设置点击事件
    $('.skip').eq(0).click(function(){
       $.ajax({
        //url
        url:'http://1.14.68.137:8000/image_code',
        // 参数
        data:{
            username:$('.User')
        }
       });
    });
})