//跳转页面
$('.right_button').click(function(){
    $(location).attr('href','enterprise.html');
})
//左边竖选项卡
$('.left_cont').click(function(){
    $('.left_cont').removeClass('left_settled');
    $(this).addClass('left_settled');
    
    
    $('.left_arrow').addClass('arrow_none');
    $(this).find('span').removeClass('arrow_none');
})

$('.right_input').focus(function(){
    $('.right_placeholder').css('opacity','0')
})

$('.right_input').blur(function(){
    if(!$('.right_input').val()){
        $('.right_placeholder').css('opacity','1');
    } else {
        $('.right_placeholder').css('opacity','0')
    }
})

$('.neck_input').focus(function(){
    $('.neck_placeholder').css('opacity','0')
})

$('.neck_input').blur(function(){
    if(!$('.neck_input').val()){
        $('.neck_placeholder').css('opacity','1');
    } else {
        $('.neck_placeholder').css('opacity','0')
    }
})


