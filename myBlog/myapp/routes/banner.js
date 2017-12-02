var express = require('express');
var router = express.Router();
var multer = require("multer");
var fs = require("fs");
var url = require("url");
var MySql = require("./../md/MySql.js")
var bannerUpload = multer({
  dest:"public/uploads/"
})
var bannerUploads = multer({
  dest:"public/uploads/"
})
/* GET banner listing. */
router.get('/', function(req, res, next) {
  MySql.connect((err) => {
    console.log(err)
  }, (db) => {
     console.log("数据库连接成功")
     MySql.findData(db, "banner", {}, {}, (result) => {
       res.render('banner', {title:"我的博客--banner", list: result });
       db.close();
     })
  })
//res.render("banner",{title:"我的博客--banner"})
});
router.post("/addBanners", bannerUploads.array('bannerImgs',12) , (req, res, next) => {
  console.log(req.files)
 /* [
  {},
  {}
  ]*/
 
 for(var item of req.files){
   var type = item.mimetype.split("/")[1];
    var oldPath = item.destination + item.filename;
    var newPath = oldPath + "." + type;
    
    
    fs.rename(oldPath, newPath, (err, result) => {
      if(err){
        console.log(err)
        res.send("0")
      }else{
  
        MySql.connect((err) => {
          console.log(err)
        }, (db) => {
           console.log("数据库连接成功")
           MySql.findData(db, "banner", {}, {}, (result) => {
             console.log("result:" + result.length)
             var obj = {
               bannerID: result.length,
               src: newPath,
               isUse: 1
             }
             console.log("obj:" + obj)
             MySql.insert(db, "banner", obj, (results) => {
                console.log("results:" + results)
                db.close();
                
             })
            db.close();
           })
           
        })
  
      }
    })
 }
 res.send("<script>window.location.href='/banner';</script>")
//res.send("1")
})
router.post("/addBanner", bannerUpload.single('bannerImg') , (req, res, next) => {
  //图片从req.file中获取
  //数据从req.body中获取
  /*
   * { fieldname: 'bannerImg',
  originalname: '1.bmp',
  encoding: '7bit',
  mimetype: 'image/bmp',
  destination: '/uploads/',
  filename: '522d3640eda0dfa916fe4551903026e3',
  path: '\\uploads\\522d3640eda0dfa916fe4551903026e3',
  size: 2389736 }
   */
  
  
  var type = req.file.mimetype.split("/")[1];
  var oldPath = req.file.destination + req.file.filename;
  var newPath = oldPath + "." + type;
  
  
  fs.rename(oldPath, newPath, (err, result) => {
    if(err){
      console.log(err)
      res.send("0")
    }else{

      MySql.connect((err) => {
        console.log(err)
      }, (db) => {
         console.log("数据库连接成功")
         MySql.findData(db, "banner", {}, {}, (result) => {
           console.log("result:" + result.length)
           var obj = {
             bannerID: result.length,
             src: newPath,
             isUse: 1
           }
           console.log("obj:" + obj)
           MySql.insert(db, "banner", obj, (results) => {
              console.log("results:" + results)
              db.close();
              res.send("<script>window.location.href='/banner';</script>")
           })
          db.close();
         })
         
      })

    }
  })
})
router.post("/bannerList", function(req, res, next) {
    MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"banner",{},{_id:0},(result) => {
       res.send(JSON.stringify(result))
      db.close();
     })
   })
    
});
router.get("/delete", (req, res, next) =>{
  console.log(req.url)
  var obj = url.parse(req.url, true).query;
  obj.bannerID  = obj.bannerID * 1;
   console.log(obj)
  MySql.connect((err) => {
    console.log(err)
  }, (db) => {
     console.log("数据库连接成功")
     MySql.deleteOneData(db, "banner", obj, (result) => {
       db.close();
       res.send("<script>window.location.href='/banner';</script>")
     })
  })
//res.send("1")
})
module.exports = router;
