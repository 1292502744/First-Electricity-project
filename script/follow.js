$(function () {
    //左边竖选项卡
    $('.left_cont').click(function(){
        $('.left_cont').removeClass('left_settled');
        $(this).addClass('left_settled');
        
        $('.left_arrow').addClass('arrow_none');
        $(this).find('span').removeClass('arrow_none');
    })
    
    //删除
    var that
    $('.neck_delete').click(function(){
        $('.hide_box').show()
        that = this
    })
    $('.hide_confirm').click(function(){
        $(that).parent().parent().parent().remove();
        $('.hide_box').hide()
    })
    $('.hide_cancel').click(function(){
        $('.hide_box').hide()
    })
    
    $('.neck_big').css({width:$('.box_neck').width()*$('.page_num').length});
    
    
    //选项卡 右点击
    var i = 0;
    $('.icon_right').click(function(){
        i++;
        if(i == 4){
            i = 0;
            $('.neck_big').css({marginLeft:-$('.box_neck').width()*i});
        } else {
            $('.neck_big').css({marginLeft:-$('.box_neck').width()*i});
        }
        
        if( i == 0 ){
            $('.page_num').eq(0).addClass('page_red').siblings().removeClass('page_red');
        } else if( i == 1 ){
            $('.page_num').eq(1).addClass('page_red').siblings().removeClass('page_red');
        } else if( i == 2 ){
            $('.page_num').eq(2).addClass('page_red').siblings().removeClass('page_red');
        } else if( i == 3 ){
            $('.page_num').eq(3).addClass('page_red').siblings().removeClass('page_red');
        }
        
        console.log( $('.page_num').eq(0));
        console.log(i);
    })
    
    //选项卡 左点击
    $('.icon_left').click(function(){
        i--;
        if(i == -1){
            i = 3;
            $('.neck_big').css({marginLeft:-$('.box_neck').width()*i});
        } else {
            $('.neck_big').css({marginLeft:-$('.box_neck').width()*i});
        }
    
        if( i == 0 ){
            $('.page_num').eq(0).addClass('page_red').siblings().removeClass('page_red');
        } else if( i == 1 ){
            $('.page_num').eq(1).addClass('page_red').siblings().removeClass('page_red');
        } else if( i == 2 ){
            $('.page_num').eq(2).addClass('page_red').siblings().removeClass('page_red');
        } else if( i == 3 ){
            $('.page_num').eq(3).addClass('page_red').siblings().removeClass('page_red');
        }
    })
    //选项卡 数字页码点击
    $('.page_num').click(function(){
        $(this).addClass('page_red').siblings().removeClass('page_red');
        $('.neck_big').css({marginLeft:-$('.box_neck').width()*$(this).attr('data-sum')});
        i = $(this).attr('data-sum');
    })
    
    
    
    $('.neck_input').focus(function(){
        $('.neck_placeholder').css('opacity','0')
        console.log(1);
    })
    
    $('.neck_input').blur(function(){
        console.log(2);
        if(!$('.neck_input').val()){
            $('.neck_placeholder').css('opacity','1');
        } else {
            $('.neck_placeholder').css('opacity','0')
        }
    })

    $('.hide_box').css({height:$(window).height()})
    console.log($(window).height());
})
