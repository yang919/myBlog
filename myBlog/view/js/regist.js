var userflag,pwdflag,upwdflag;


//注册页验证手机号
	$(".regist-content-left ul li #uname").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
	})
	$(".regist-content-left ul li #uname").blur(function(){
		 userflag = checkTel( $("#uname").val() );
		if(!userflag){
			$(this).css({"border":"1px solid #e60000"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").removeClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"images/1.gif"});
			$(this).parent().find(".message").find("span").html("手机格式不对，请重新输入！");
		}else{
			$(this).css({"border":"1px solid #59a358"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").addClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"images/2.gif"});
			$(this).parent().find(".message").find("span").html("");
		}
	})
	
	//注册页验证密码
	$(".regist-content-left ul li #upwd").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
		$(this).parent().find(".level").css({"display":"block"});
	})
	$(".regist-content-left ul li #upwd").keyup(function(){
		pwdflag = checkPwd( $("#upwd").val() );
		if(pwdflag == 1){
			$("#weak").css({"background":"#ffc353"});
			$("#middle").css({"background":"#b1b1b1"});
			$("#better").css({"background":"#b1b1b1"});
		}else if(pwdflag == 2){
			$("#weak").css({"background":"#ffc353"});
			$("#middle").css({"background":"#b6dc2f"});
			$("#better").css({"background":"#b1b1b1"});
		}else if(pwdflag == 3){
			$("#weak").css({"background":"#ffc353"});
			$("#middle").css({"background":"#b6dc2f"});
			$("#better").css({"background":"#82be0e"});
		}
	})
	$(".regist-content-left ul li #upwd").blur(function(){
		  pwdflag = checkPwd( $("#upwd").val() );
		if(!pwdflag){
			$("#weak").css({"background":"#ffc353"});
			$("#middle").css({"background":"#b1b1b1"});
			$("#better").css({"background":"#b1b1b1"});
			$(this).css({"border":"1px solid ##e60000"});
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").removeClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"images/1.gif"});
			$(this).parent().find(".message").find("span").html("密码长度限制为6-20位字符");
			$(this).parent().find(".message").find("span").removeClass("span");
			$(this).parent().find(".level").css({"display":"none"});
		}else {
			$(this).css({"border":"1px solid #59a358"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find(".level").css({"display":"none"});
			$(this).parent().find("p").addClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"images/2.gif"});
			$(this).parent().find(".message").find("span").addClass("span");
			if(pwdflag == 1){
				$(this).parent().find(".message").find("span").html("密码强度：弱");
			}else if(pwdflag == 2){
				$(this).parent().find(".message").find("span").html("密码强度：中");
			}else if(pwdflag == 3){
				$(this).parent().find(".message").find("span").html("密码强度：强");
			}
		}
	})
	
	//注册页确认密码
	$(".regist-content-left ul li #qpwd").focus(function(){
		$(this).css({"border":"1px solid #ff9900"});
		$(this).parent().find(".message").css({"display":"none"});
	})
	$(".regist-content-left ul li #qpwd").blur(function(){
		 upwdflag = qpwd( $("#upwd").val() , $("#qpwd").val() );
		if(upwdflag==2){
			$(this).css({"border":"1px solid #59a358"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").addClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"images/2.gif"});
			$(this).parent().find(".message").find("span").html("");
			
		}else {
			$(this).css({"border":"1px solid #e60000"})
			$(this).parent().find(".message").css({"display":"block"});
			$(this).parent().find("p").removeClass("mess");
			$(this).parent().find(".message").find("img").attr({"src":"images/1.gif"});
			if(upwdflag == 1){
				$(this).parent().find(".message").find("span").html("重复密码不能为空，请确认");
			}else{
				$(this).parent().find(".message").find("span").html("2次密码不一致，请重新输入");
			}
		}
	})

function checkTel(str){
	var reg = /^(13|15|18)\d{9}$/;
	if( reg.test(str) ){
		return true;
	}else{
		return false;
	}
}

function checkPwd(str){
	var regNum = /^\d+$/;
  	var regLetter = /^[a-z]+$/i;
  	var regOther = /^[!@#$%^&*()]+$/;
  	var _regNum = /\d+/;
  	var _regLetter = /[a-z]+/i;
  	var _regOther = /[!@#$%^&*()]+/;
	if(str.length > 5 && str.length < 21){
		if( regNum.test(str) || regLetter.test(str) || regOther.test(str) ){ //弱
			return 1;
		}else if( _regNum.test(str) && _regLetter.test(str) && _regOther.test(str) ){
			return 3;
		}else{
			return 2;
		}
	}else{
		return false;
	}
}
function qpwd(str1,str2){
	if(str2==""){
		return 1;
	}else{
		if(str1 == str2){
			return 2;
		}else{
			return false;
		}
	} 
}

//var arr=[];


//$("form").submit(function(){
//	if(userflag && pwdflag && upwdflag && upwdflag!= 1 && $("#check").prop("checked")){
//		var _json ={
//			"ptel":$("#uname").val(),
//			"pwd":$("#upwd").val() 
//		}
//		arr.push(_json);
//		setCookie("userInfo",JSON.stringify(arr));
//		$("#uname").val("");
//		$("#upwd").val("");
//		$("#qpwd").val("");
//		return true;
//	}
//	return false;
//})
