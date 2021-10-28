$(function () {
    // 商家中心li的点击事件，tab栏切换
    
    $(".business_main_title").on("click", "li", function () {
        $(this).addClass("change_color").siblings().removeClass("change_color");
        $(".business_main").eq($(this).index()).css("display", "block").siblings().css("display", "none");
    })


    $(".upLoad").each(function (i, e) {
        $(".upLoad").eq(i).change(function(e){
            if (this.files === undefined) {
                var src = this.value;
                $(".preview").eq(i).css("display", "block");
                // $("p").css("display", "none");
                $(".preview").eq(i).attr('src', src);
            } else {
                var file = this.files[0];
                // console.log(file.size); 
                if (file.size > 2097152) {
                    alert("文件太大，撑不住~~~");
                } else if (window.FileReader) {
                        var reader = new FileReader();   
                        reader.readAsDataURL(file);   
                        //监听文件读取结束后事件    
                        reader.onload = function (e) {
                            if (reader.readyState === 2) {
                                $(".preview").eq(i).attr("src",e.target.result);    //e.target.result就是最后的路径地址
                                // $("p").css("display", "none");
                                $(".preview").eq(i).css("display", "block");
                            }
                    }
                }
            }
        })
    })

})