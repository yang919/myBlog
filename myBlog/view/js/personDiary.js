
	$.ajax({
			type:"get",
			url:"http://localhost:3000/articles/personDiaryList",
			success:function(data){
			  console.log(JSON.parse(data))
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
			  for(var item of JSON.parse(data)){
			  	var time = getMoth(item.date);
			  	var num = item.personDiaryID*1+35;
			    $("#say").append(`
			    	<li class="list-li">
						<div class="pic-box">
							<img src="images/${num}.jpg" alt="" />
						</div>
						<div class="text-box">
							<p class="info">${item.title}<span class="date-time">${time}</span></p>
						</div>
					</li>
			    `)
			  }
			}
		});