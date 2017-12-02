//分页效果
var index=1;
$("#u").on("click","li",function(){
	$(this).find("a").addClass("actives").end().siblings().find("a").removeClass("actives");
	index = $(this).index()+1;
	$.ajax({
		type:"get",
		url:"http://localhost:3000/articles/techList",
		data:{
			index:index
		},
		success:function(data){
		 var arr = JSON.parse(data);
		  console.log(JSON.parse(data))
		  showData(arr);
		  
		}
	});
})
$(".pro").click(function(){
	index--;
	if(index <= 1){
		index = 1;
	}
	$.ajax({
		type:"get",
		url:"http://localhost:3000/articles/techList",
		data:{
			index:index
		},
		success:function(data){
		 var arr = JSON.parse(data);
		  console.log(JSON.parse(data))
		  showData(arr);
		  
		}
	});
})
$(".next").click(function(){
	index++;
	 if(index >= 3){
	 	index =3;
	 }
	 $.ajax({
		type:"get",
		url:"http://localhost:3000/articles/techList",
		data:{
			index:index
		},
		success:function(data){
		 var arr = JSON.parse(data);
		  console.log(JSON.parse(data))
		  showData(arr);
		  
		}
	});
})
$(".first").click(function(){
	$("#u .one").find("a").addClass("actives").end().siblings().find("a").removeClass("actives");
	index = 1;
	$.ajax({
		type:"get",
		url:"http://localhost:3000/articles/techList",
		data:{
			index:index
		},
		success:function(data){
		 var arr = JSON.parse(data);
		  console.log(JSON.parse(data))
		  showData(arr);
		  
		}
	});
})
$(".last").click(function(){
	$("#u  .four").find("a").addClass("actives").end().siblings().find("a").removeClass("actives");
	index = 4;
	$.ajax({
		type:"get",
		url:"http://localhost:3000/articles/techList",
		data:{
			index:index
		},
		success:function(data){
		 var arr = JSON.parse(data);
		  console.log(JSON.parse(data))
		  showData(arr);
		  
		}
	});
})
	
	$.ajax({
		type:"get",
		url:"http://localhost:3000/articles/articleList",
		data:{
			index:1
		},
		success:function(data){
		 var arr = JSON.parse(data);
		  console.log(JSON.parse(data))
		  showData(arr);
		  
		}
	});
function showData(brr){
	  var str = "";
	  function getzf(num){  
	        if(parseInt(num) < 10){  
	            num = '0'+num;  
	        }  
	        return num;  
	    }  
	    function getMoth(str){  
	        var oDate = new Date(Number(str));
	        oYear = oDate.getFullYear(); 
	        oMonth = oDate.getMonth()+1; 
	        oDay = oDate.getDate();
	        oTime =getzf(oYear)+"-"+ getzf(oMonth) +'-'+ getzf(oDay);
	        return oTime;  
	    }
	  for(var i in brr){
//	  	console.log( typeof item.date);
	  	var time = getMoth(brr[i].date);
	  	var num = brr[i].articleID*1+20;
	  	str +=`
		  	<div class="newlist">
					<p class="ptit"><b><a href="#">${brr[i].title}</a></b></p>
					<p class="ptime"><span>${time}</span><span>作者：${brr[i].author}</span><span>分类：  <a href="#">${brr[i].place}</a> </span></p>
					<div class="pcon">
						<div class="pcon-left fl"><a href="#"><img src="images/${num}.jpg"/></a></div>
						<div class="pcon-right fl">
							<p class="txt">${brr[i].summary}</p>
							<a href="detail.html?articleID=${brr[i].articleID}">详细信息</a>
						</div>
					</div>
				</div>`;
	   
	  }
	    $(".article-center").html(str);
}

$.ajax({
			type:"get",
			url:"http://localhost:3000/articles/articleList",
			success:function(data){
			  console.log(JSON.parse(data))
			  for(var item of JSON.parse(data)){
			    $(".new-article ul").append(`
			    	<li><a href="detail.html?articleID=${item.articleID}" title="${item.title}">${item.title}</a></li>
			    `)
			     $(".good-article ul").append(`
			    	<li><a href="detail.html?articleID=${item.articleID}" title="${item.title}">${item.title}</a></li>
			    `)
			     $(".hot-article ul").append(`
			    	<li><a href="detail.html?articleID=${item.articleID}" title="${item.title}">${item.title}</a></li>
			    `)
			  }
			}
		});
		
		
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/articles/goodArticleList",
//			success:function(data){
//			  console.log(JSON.parse(data))
//			  for(var item of JSON.parse(data)){
//			    $(".good-article ul").append(`
//			    	<li><a href="detail.html?goodID=${item.goodID}" title="${item.title}">${item.title}</a></li>
//			    `)
//			  }
//			}
//		});
//		
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/articles/hotArticleList",
//			success:function(data){
//			  console.log(JSON.parse(data))
//			  for(var item of JSON.parse(data)){
//			    $(".hot-article ul").append(`
//			    	<li><a href="detail.html?hotID=${item.hotID}" title="${item.title}">${item.title}</a></li>
//			    `)
//			  }
//			}
//		});



