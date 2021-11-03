$(function () {
	var file = $("#file");
	var img = $(".personal_img img");
	var username = $(".username");
	var cookie = new Cookie();
	var token = cookie.get("token");
	
	$.ajax({
		type: "get",
		url: "http://1.14.68.137:8000/userinfo/",
		headers: {
			token: token
		},
		success: function (res) {
			var data = res.data
			img.attr("src", data.imgurl)
			username.text(`用户名：${data.username}`)
		}
	})
	
	$.ajax({
		type: "get",
		url: "http://1.14.68.137:8000/uptoken/",
		headers: {
			token: token
		},
		success: function (res) {
			uptoken = res.uptoken;
		}
	})
	
	file.change(function () {
		console.log($(this).url)
		var file = this.files[0];
		var reader = new FileReader();
		if (file.size > 2097152) {
			alert("文件太大~~~");
		}
		reader.readAsDataURL(file);
		console.log(reader)
		reader.onload = function (e) {
			img.attr("src", e.target.result);
			var imgUrl = window.atob(e.target.result);
			console.log(imgUrl)
			// $.ajax({
			// 	type: "post",
			// 	url: "http://1.14.68.137:8000/upuserimage/",
			// 	headers: {
			// 		token: token
			// 	},
			// 	data: {
			// 		url: e.target.result
			// 	},
			// 	success: function (res) {
			// 		console.log(res);
			// 	}
			// })
		}
		/* var observable = qiniu.upload(file, null, uptoken, {
			useCdnDomain: true,
			region: qiniu.region.z2
		})
		observable.subscribe({
			next (res) {
				console.log(res);
			},
			complete (res) {
				console.log(res);
			}
		}); */
	})
})


/* function base64toFile(dataurl, filename = "file") {
  let arr = dataurl.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split("/")[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime
  });
} */
