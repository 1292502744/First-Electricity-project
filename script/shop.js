$(function () {
    // 商家中心li的点击事件，tab栏切换
    $(".business_main_title").on("click", "li", function () {
        $(this).addClass("change_color").siblings().removeClass("change_color");
        $(".business_main").eq($(this).index()).css("display", "block").siblings().css("display", "none");
    })

    // 上传图片
    $(".upLoad").each(function (i, e) {
        $(".upLoad").eq(i).change(function(e){
            //  考虑兼容问题  IE9 this.files 的值为undefined
            if (this.files === undefined) {
                var src = this.value;
                $(".preview").eq(i).css("display", "block");
                $(".preview").eq(i).attr('src', src);
				console.log(this.files)
            } else {
                var file = this.files[0];
                // console.log(file.size); 
                // 判断大小是否超过2M
                if (file.size > 2097152) {
                    alert("文件太大，撑不住~~~");
                } else if (window.FileReader) {
                        var reader = new FileReader();   
                        reader.readAsDataURL(file);  
                        //监听文件读取结束后事件    
						console.log(reader)
                        reader.onload = function (e) {
                            if (reader.readyState === 2) {
                                $(".preview").eq(i).attr("src",e.target.result);    //e.target.result就是最后的路径地址
                                $(".preview").eq(i).css("display", "block");
                            }
                        }
                    }
                }
        })
    })

    //  分页器的切换效果
    var count = 0;
    $(".show_page ul").on("click", "li", function () {
        $(this).addClass("change_page_color").siblings().removeClass("change_page_color");
        count = $(this).index();
    })

    $(".onsell .show_page .prev").on("click", function () {
        if (count == 0) {
            return false;
        }
        count--;
        $(".show_page ul li").eq(count).addClass("change_page_color").siblings().removeClass("change_page_color");
    })
    $(".onsell .show_page .next").on("click", function () {
        if (count == $(".show_page ul li").length) {
            return false;
        }
        count++;
        $(".show_page ul li").eq(count).addClass("change_page_color").siblings().removeClass("change_page_color");
    })


})