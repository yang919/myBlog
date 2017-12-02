//var userflag,pwdflag;
	//登陆页验证手机号
	$(".login-content-right ul li #uname").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
	})
//	$(".login-content-right ul li #uname").blur(function(){
//		userflag = checkTel( $("#uname").val() );
//		if(!userflag){
//			$(this).css({"border":"1px solid #e60000"})
//			$(this).parent().find(".message").css({"display":"block"});
//			$(this).parent().find("p").removeClass("mess");
//			$(this).parent().find(".message").find("img").attr({"src":"images/1.gif"});
//			$(this).parent().find(".message").find("span").html("用户名不正确！");
//		}else{
//			$(this).css({"border":"1px solid #59a358"})
//			$(this).parent().find(".message").css({"display":"block"});
//			$(this).parent().find("p").addClass("mess");
//			$(this).parent().find(".message").find("img").attr({"src":"images/2.gif"});
//			$(this).parent().find(".message").find("span").html("");
//		}
//	})
	$(".login-content-right ul li #uname").blur(function(){
			$(this).css({"border":"1px solid #d3d3d3"})
//			$(this).parent().find(".message").css({"display":"block"});
//			$(this).parent().find("p").removeClass("mess");
//			$(this).parent().find(".message").find("img").attr({"src":"images/1.gif"});
//			$(this).parent().find(".message").find("span").html("用户名不正确！");
		
	})


//登陆页验证密码
	$(".login-content-right ul li #upwd").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
	})
	$(".login-content-right ul li #upwd").blur(function(){
			$(this).css({"border":"1px solid #d3d3d3"})
	})
	
//	$(".login-content-right ul li #upwd").blur(function(){
//		pwdflag = checkPwd( $("#upwd").val() );
//		if(!pwdflag){
//			$(this).css({"border":"1px solid #e60000"})
//			$(this).parent().find(".message").css({"display":"block"});
//			$(this).parent().find("p").removeClass("mess");
//			$(this).parent().find(".message").find("img").attr({"src":"images/1.gif"});
//			$(this).parent().find(".message").find("span").html("密码不正确");
//		}else{
//			$(this).css({"border":"1px solid #59a358"})
//			$(this).parent().find(".message").css({"display":"block"});
//			$(this).parent().find("p").addClass("mess");
//			$(this).parent().find(".message").find("img").attr({"src":"images/2.gif"});
//			$(this).parent().find(".message").find("span").html("");
//		}
//	})
//var arr = getCookie("userInfo");
//function checkTel(str){
//	for(var i = 0 ; i < arr.length ; i++){
//		if(str == arr[i]["ptel"]){
//			return true;
//		}else{
//			return false;
//		}
//	}
//}
//function checkPwd(str){
//	for(var i = 0 ; i < arr.length ; i++){
//		if(str == arr[i]["pwd"]){
//			return true;
//		}else{
//			return false;
//		}
//	}
//}


//$("form").submit(function(){
//	if(userflag && pwdflag){
//		return true;
//	}
//	return false;
//	
//})
