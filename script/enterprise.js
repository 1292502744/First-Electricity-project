//左边竖选项卡
$('.left_cont').click(function(){
    $('.left_cont').removeClass('left_settled');
    $(this).addClass('left_settled');
    
    
    $('.left_arrow').addClass('arrow_none');
    $(this).find('span').removeClass('arrow_none');
})
//跳转页面
$('.right_but').click(function(){
    $(location).attr('href','examine.html');
})

//省级联动
//省
    $.get('http://1.14.68.137:8000/areas/',function(data,were){
        var res = data
        // console.log(res);
        $.each(res.data,function(type,i){
            $('.province').append('<option id='+i.id+'>'+ i.name +'</option>')
            // console.log(this.id);
        })
    })
    
//城市    
$('.province').click(function(){
    $(".citys").remove();
    $('.regions').remove();
    $.get('http://1.14.68.137:8000/areas/',function(data,were){
        var res = data
        console.log();
        $.each(res.data,function(type,i){
            var childs =  i.children
            $.each(childs,function(j,k){
                if (k.pid_id == $('.province option:selected').attr("id")) {
                    $('.city').append('<option class="citys" id='+ k.id +'>'+ k.name +'</option>');
                }
            })
        })
    })
})
//区
$('.city').click(function(){
    $('.regions').remove();
    $.get('http://1.14.68.137:8000/areas/',function(data,were){
        var res = data
        $.each(res.data,function(type,i){
            var childs =  i.children
            $.each(childs,function(val,k){$.each(k.children,function(val,item){
                    if( item.pid_id == $('.city option:selected').attr("id")){
                        $('.region').append('<option class="regions">'+ item.name +'</option>');
                    }
                })
            })
        })
    })
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