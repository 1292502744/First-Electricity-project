$(function () {
    // 验证码获取
    // $(".Code").focus(function(){
    //     $('.paste_C').css({
    //         display : "none"
    //     })
    //     var thisVal = $(this).val();
    //     if (thisVal != ""){
    //         $(this).siblings("paste_C").hide();
    //     }
    // })

    // $('.Code').blur(function () {
    //     var thisVal = $(this).val(); 
    //     if (thisVal != ""){
    //         $(this).siblings($(".paste_C")).hide();
    //     }else{
    //         $(this).siblings($(".paste_C")).show();
    //     }
    // }) 

    var uid = 1;
    $('.Num').click(function(){
        uid++;
        $('.Num').attr('src','http://1.14.68.137:8000/image_code/?uuid='+uid);
    })
})