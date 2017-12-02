		console.log(location.search.split("=")[1])
		$.ajax({
			type:"post",
			url:"http://localhost:3000/articles/articleDetail",
			data:{
			  articleID:location.search.split("=")[1]
			},
			success:function(data){
			  console.log(data)
			  var result = JSON.parse(data)
			  $(".article-center").html(result[0].html);
			}
		});
//		$.ajax({
//			type:"post",
//			url:"http://localhost:3000/articles/linkArticleDetail",
//			data:{
//			  articleId:location.search.split("=")[1]
//			},
//			success:function(data){
//			  console.log(data)
//			  var result = JSON.parse(data)
//			   $(".article-center").html(result[0].html);
//			}
//		});
		$.ajax({
			type:"post",
			url:"http://localhost:3000/articles/techDetail",
			data:{
			  listID:location.search.split("=")[1]
			},
			success:function(data){
			  console.log(data)
			  var result = JSON.parse(data)
			   $(".article-center").html(result[0].html);
			}
		});
//		$.ajax({
//			type:"post",
//			url:"http://localhost:3000/articles/newArticleDetail",
//			data:{
//			  newID:location.search.split("=")[1]
//			},
//			success:function(data){
//			  console.log(data)
//			  var result = JSON.parse(data)
//			   $(".article-center").html(result[0].html);
//			}
//		});
//		$.ajax({
//			type:"post",
//			url:"http://localhost:3000/articles/goodArticleDetail",
//			data:{
//			  goodID:location.search.split("=")[1]
//			},
//			success:function(data){
//			  console.log(data)
//			  var result = JSON.parse(data)
//			   $(".article-center").html(result[0].html);
//			}
//		});
//		$.ajax({
//			type:"post",
//			url:"http://localhost:3000/articles/hotArticleDetail",
//			data:{
//			  hotID:location.search.split("=")[1]
//			},
//			success:function(data){
//			  console.log(data)
//			  var result = JSON.parse(data)
//			   $(".article-center").html(result[0].html);
//			}
//		});
		
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/articles/newArticleList",
//			success:function(data){
//			  console.log(JSON.parse(data))
//			  for(var item of JSON.parse(data)){
//			    $(".new-article ul").append(`
//			    	<li><a href="detail.html?newID=${item.newID}" title="${item.title}">${item.title}</a></li>
//			    `)
//			  }
//			}
//		});
//		
//		
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