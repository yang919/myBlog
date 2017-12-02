/*
 * 名称：setCookie
 * 功能：创建cookie
 * 参数：
 * 		_name	cookie名称
 * 		_value	cookie值
 * 		_date	cookie过期时间（单位天）
 * 返回值：空
 * 示例：
 * 		1，setCookie("a", "张三abc123", 1);	设置一个cookie，名称为a，值为...，过期时间为1天后
 * 		2，setCookie("b", "123");	设置的这个cookie的过期时间为会话（浏览器打开到关闭的这段时间）
 */
function setCookie( _name, _value, _date){
	// 存储cookie时，把_value放到对象中
	var obj = {
		tmp : _value
	};
	//console.log("obj : ", obj);
	// 将对象，转为字符串
	var str = JSON.stringify(obj);
	//console.log("str : ", str);
	str = encodeURIComponent(str);	// 中文编码
	//console.log("str : ", str);
	// 将字符串存入cookie中
	if( _date ){
		var d = new Date();
		d.setDate( d.getDate()+_date );
		document.cookie = _name+"="+str+"; path=/; expires="+d.toGMTString();
	}else{
		document.cookie = _name+"="+str+"; path=/";		
	}
}


/*
 * 名称：getCookie
 * 功能：获取cookie
 * 参数：
 * 		_name	指cookie名称
 * 返回值：
 * 		cookie的值
*/
function getCookie( _name ){
	// 获取当前页面所能够获取的所有的cookie
	var str = document.cookie;	// str="a=1; b=2; c=3"
	// 字符串转为数组
	var arr = str.split("; ");	// 分号后面有空格  arr=["a=1", "b=2", "c=3"]
	// 循环
	for( var i=0,l=arr.length; i<l; i++){
		var col = arr[i].split("=");	//arr[i]="a=1",	col=["a", "1"]
		// col[0]表示cookie名称，col[1]表示cookie值
		if( col[0] == _name ){
			//return decodeURIComponent(col[1]);	// 对中文进行解码
			// 对中文进行解码
			var str = decodeURIComponent(col[1]);
			// 字符串转为对象
			var obj = JSON.parse(str);
			// 最终的返回值
			return obj.tmp;	// 因为最初设置cookie时，我们将数据存到了tmp中，所以返回时，输出tmp
		}
	}
	// 如果循环执行完，没有返回值，表示cookie中找不到_name
	return "";	// 不如这行不写，返回值为undefined
}








// 获取网站中所有的商品cookie
function getAllGoodsCookie( fn ){
	var num = 0;	// 存储商品cookie中每一个商品累加后的总数量
	var str = document.cookie;
	var arr = str.split("; ");
	for( var i=0,l=arr.length; i<l; i++ ){
		var col = arr[i].split("=");
		// col[0]指cookie名称，网站中有很多种cookie，我们希望把商品这一类的cookie取出
		if( /^g\d+$/.test( col[0] ) ){
			// cookie值之前在存储时，有一系列的处理
			// 对中文进行解码
			var str = decodeURIComponent(col[1]);
			// 字符串转为对象
			var obj = JSON.parse(str);
			// 最终的返回值
			var v = obj.tmp;	// 因为最初设置cookie时，我们将数据存到了tmp中，所以返回时，输出tmp
			fn( col[0], v );
			// 商品数量累加
			num += v.num;
		}		
	}
	return num;
}