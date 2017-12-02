var express = require('express');
var router = express.Router();

var url = require('url');
var myTool = require("./../md/myTool.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  /**
   *  req.cookies.username
   * 如果用户已经登录，去index
   * 如果没有登录，去login
   */
  if(req.cookies.username){
    res.render('index', { title: '我的博客' });
  }else{
    res.render('login', { title: '我的博客--登录' });
  }
  
});
function getRandom(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
var num = getRandom(1000,9999);
router.get('/sendMsg', function(req, res, next) {
  var mobile = url.parse(req.url,true).query.mobile;
  console.log(typeof mobile)
  //如果发送成功，则返回1，否则返回0
	myTool.hySendMsg(mobile,num,(msg) => {
	    console.log(msg)
	    res.send("0");
	},() =>{
	    //成功
	    res.send();
	})
});

module.exports = router;





