//导航栏的切换

$(".nav-left li").hover(function(){
	$(this).addClass("active").siblings().removeClass("active");
},function(){
	
})


//轮播图动画
var index  = 0;
var timer = setInterval(autoPlay,4000);
function autoPlay(){
    index++;
    if(index == $("#bannerContent ul li").length ){
		index = 0;
	}
	$("#bannerContent ul li").eq(index).animate({"z-index":44,"opacity":1},2000).siblings().animate({"z-index":1,"opacity":0},2000)
	$(".hover-bg").animate({"top":(index)*60},2000);
}

$("#switchBtn").on("mouseenter","li",function(){
	clearInterval(timer);
	var i = $(this).index();
	$("#bannerContent ul li").eq(i).animate({"z-index":44,"opacity":1}).siblings().animate({"z-index":1,"opacity":0})
	$(".hover-bg").animate({"top":(i)*60});
})
$("#switchBtn").on("mouseleave","li",function(){
	index = $(this).index();
	timer = setInterval(autoPlay,4000);
})
//侧边栏的顶部和底部
$("#goTop").click(function(){
	$("body,html").animate({"scrollTop":0},1000);
})
$("#goBottom").click(function(){
	$("body,html").animate({"scrollTop":document.body.clientHeight},1000);
})

//登录注册表头更换
   
   
	var str = "";
	if(getCookie("userInfo")){
		str = `<li><a href="javascript:;">欢迎${getCookie("userInfo")[0]["uname"]}用户</a></li>
	        <li><a href="javascript:;" id="logOut">退出</a></li>`;
	   $(".navbar-right").html(str);
	}
	
$("#logOut").click(function(){
	removeCookie("userInfo");
	str = `<li><a href="regist.html">注册</a></li>
		         <li><a href="login.html">登录</a></li>`;
    $(".navbar-right").html(str);
//	location.reload();
})