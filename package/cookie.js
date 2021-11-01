 function Cookie() {};
         Cookie.prototype.set = function (key,value,time) {
            var date = new Date();
            date.setTime(date.getTime() + time);
            document.cookie = key + '=' + value + '; '+ 'expires=' + date.toUTCString();
         }
         Cookie.prototype.get = function (key) {
            //  首先要获取到cookie的所有的值  将获取到的值赋给cook变量
            var cook = document.cookie;
            //  因为获取到的cookie的值  是带有其他符号的字符串  所以 要先将字符串拆分 
            cook = cook.split('; ');
            //  声明一个空对象来接 cookie转换过来的值
            const params = {};
            //  遍历获取过来的数组  将数组的值赋值给对象
            for (var i = 0; i < cook.length; i++) {
                params[cook[i].split('=')[0]] = cook[i].split('=')[1];
            }
            // 然后将传过来的key 对应的值传过去
            return params[key];
            
         }
         Cookie.prototype.clear = function (key) {
            this.set(key, "", -1000)
         }