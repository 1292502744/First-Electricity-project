//左边竖选项卡
$('.left_cont').click(function(){
    $('.left_cont').removeClass('left_settled');
    $(this).addClass('left_settled');
    
    $('.left_arrow').addClass('arrow_none');
    $(this).find('span').removeClass('arrow_none');
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