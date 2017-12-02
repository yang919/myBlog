
	var arr = getCookie("userInfo");
	var str = "";
	
	for(var i = 0 ; i < arr.length ; i++){
		if(arr[i]){
		 str = `<li><a href="javascript:;">欢迎${arr[i]["ptel"]}用户</a></li>
		        <li><a href="javascript:;" id="logOut">退出</a></li>`;
		        
		}else{
		  str = `<li><a href="regist.html">注册</a></li>
		         <li><a href="login.html">登录</a></li>`;
		}
		$(".navbar-right").html(str);
	}
	
$("#logOut").click(function(){
	
	
	removeCookie("userInfo");
	
	
	location.reload();
})