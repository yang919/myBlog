var express = require('express');
var router = express.Router();
var url = require("url")
var md5 = require('md5')

var MySql = require("./../md/MySql.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/adminLogin", (req,res,next) => {
  var obj = req.body;
  obj.pwd = md5(obj.pwd);
console.log(md5("admin"));
  
  MySql.connect((err)=>{
    console.log(err)
  },(db)=>{
    MySql.findData(db,"admin",obj,{},(result)=>{
      if(result.length == 0){
        res.send("0") //账户密码错误
      }else{
        res.cookie("username",obj.username)
        res.send("1")
//      res.redirect("/")
      }
    })
  })
})

router.get("/adminLogout", (req,res,next) => {
res.clearCookie("username");
res.redirect("/")
//res.send("<script>window.location.href='/'</script>")
})


router.get('/userLogin', function(req, res, next) {
  var obj = url.parse(req.url, true).query;
  obj.upwd = md5(obj.upwd)
  MySql.connect((err) => {
    res.send('-1')
  },(db) => {
    MySql.findData(db, 'user',{uname: obj.uname},{}, (result1) => {
      if(result1.length > 0){
        MySql.findData(db, 'user',obj,{}, (result2) => {
          if(result2.length > 0){
            //后台可以记录登录状态-----cookie
//          res.cookie("username",obj.username)
            res.send('1');
          }else{
            res.send('2')
          }
          db.close();
        })
      }else{
        res.send('0')
      }
      db.close();
    })
  });
  
});

router.post('/userRegist', function(req, res, next) {
	console.log(req);
  var obj = req.body;
  console.log(obj)
  obj.upwd = md5(obj.upwd)
  MySql.connect((err) => {
    res.send('2');
  },(db) => {
    console.log("数据库连接成功")
    MySql.findData(db, "user", {uname: obj.uname}, {_id:0}, (result) => {
      if(result.length == 0){
        MySql.insert(db,'user',obj,(result) => {
          console.log(result);
          res.send('1');
          db.close();
        })
      }else{
        res.send('0');
      }
      
      db.close();
    })
  })
});
module.exports = router;
