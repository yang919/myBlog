var express = require('express');
var router = express.Router();

var MySql = require("./../md/MySql.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render("articles",{title:"我的博客--articles"})
});

router.post("/addArticle", function(req, res, next) {
   var obj = req.body;
   console.log(obj)
   
   MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"articles",{},{},(result) => {
      obj.articleID = result.length;
      MySql.insert(db, "articles", obj ,(results) => {
        res.send("1") 
        db.close();
      })
      db.close();
     })
   })
    
});

router.get("/articleList", (req, res, next) =>{
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"articles",{},{_id:0},(result1) => {
       res.send(JSON.stringify(result1))
      db.close();
     })
   })
})

router.post("/articleDetail", (req, res, next) =>{
  var obj = req.body;
  obj.articleID =  obj.articleID * 1;
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"articles",obj,{_id:0},(result2) => {
       res.send(JSON.stringify(result2))
      db.close();
     })
   })
})

router.post("/techArticle", function(req, res, next) {
   var obj = req.body;
   console.log(obj)
   
   MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"detailList",{},{},(result) => {
      obj.listID = result.length;
      MySql.insert(db, "detailList", obj ,(results) => {
        res.send("1") 
        db.close();
      })
      db.close();
     })
   })
    
});

router.get("/techList", (req, res, next) =>{
	var num = (req.url).split("=")[1];
	num*=1;
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findPagingData(db,"articles",{},{_id:0},num-1,2,(result3) => {
       res.send(JSON.stringify(result3))
      db.close();
     })
   })
})

//router.get("/techList", (req, res, next) =>{
//	var num = (req.url).split("=")[1];
//	num*=1;
//MySql.connect((err)=>{
//   console.log(err)
// },(db)=>{
//   MySql.findPagingData(db,"detailList",{},{_id:0},num-1,4,(result3) => {
//     res.send(JSON.stringify(result3))
//    db.close();
//   })
// })
//})

router.post("/techDetail", (req, res, next) =>{
  var obj = req.body;
  obj.listID =  obj.listID * 1;
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"detailList",obj,{_id:0},(result4) => {
       res.send(JSON.stringify(result4))
      db.close();
     })
   })
})

router.post("/addLinkArticle", function(req, res, next) {
   var obj = req.body;
   console.log(obj)
   
   MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"linkArticles",{},{},(result) => {
      obj.listID = result.length;
      MySql.insert(db, "linkArticles", obj ,(results) => {
        res.send("1") 
        db.close();
      })
      db.close();
     })
   })
    
});

router.get("/linkArticleList", (req, res, next) =>{
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"linkArticles",{},{_id:0},(result5) => {
       res.send(JSON.stringify(result5))
      db.close();
     })
   })
})

router.post("/linkArticleDetail", (req, res, next) =>{
  var obj = req.body;
  obj.articleId =  obj.articleId * 1;
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"linkArticles",obj,{_id:0},(result6) => {
       res.send(JSON.stringify(result6))
      db.close();
     })
   })
})


router.post("/newArticle", function(req, res, next) {
   var obj = req.body;
   console.log(obj)
   
   MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"newArticle",{},{},(result) => {
      obj.newID = result.length;
      MySql.insert(db, "newArticle", obj ,(results) => {
        res.send("1") 
        db.close();
      })
      db.close();
     })
   })
    
});

router.get("/newArticleList", (req, res, next) =>{
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"newArticle",{},{_id:0},(result7) => {
       res.send(JSON.stringify(result7))
      db.close();
     })
   })
})

router.post("/newArticleDetail", (req, res, next) =>{
  var obj = req.body;
  obj.newID =  obj.newID * 1;
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"newArticle",obj,{_id:0},(result8) => {
       res.send(JSON.stringify(result8))
      db.close();
     })
   })
})


router.post("/goodArticle", function(req, res, next) {
   var obj = req.body;
   console.log(obj)
   
   MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"goodArticle",{},{},(result) => {
      obj.goodID = result.length;
      MySql.insert(db, "goodArticle", obj ,(results) => {
        res.send("1") 
        db.close();
      })
      db.close();
     })
   })
    
});

router.get("/goodArticleList", (req, res, next) =>{
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"goodArticle",{},{_id:0},(result9) => {
       res.send(JSON.stringify(result9))
      db.close();
     })
   })
})

router.post("/goodArticleDetail", (req, res, next) =>{
  var obj = req.body;
  obj.goodID =  obj.goodID * 1;
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"goodArticle",obj,{_id:0},(result10) => {
       res.send(JSON.stringify(result10))
      db.close();
     })
   })
})


router.post("/hotArticle", function(req, res, next) {
   var obj = req.body;
   console.log(obj)
   
   MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"hotArticle",{},{},(result) => {
      obj.hotID = result.length;
      MySql.insert(db, "hotArticle", obj ,(results) => {
        res.send("1") 
        db.close();
      })
      db.close();
     })
   })
    
});

router.get("/hotArticleList", (req, res, next) =>{
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"hotArticle",{},{_id:0},(result11) => {
       res.send(JSON.stringify(result11))
      db.close();
     })
   })
})

router.post("/hotArticleDetail", (req, res, next) =>{
  var obj = req.body;
  obj.hotID =  obj.hotID * 1;
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"hotArticle",obj,{_id:0},(result12) => {
       res.send(JSON.stringify(result12))
      db.close();
     })
   })
})



router.post("/addPersonDiary", function(req, res, next) {
   var obj = req.body;
   console.log(obj)
   
   MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"personDiary",{},{},(result) => {
      obj.personDiaryID = result.length;
      MySql.insert(db, "personDiary", obj ,(results) => {
        res.send("1") 
        db.close();
      })
      db.close();
     })
   })
    
});

router.get("/personDiaryList", (req, res, next) =>{
  MySql.connect((err)=>{
     console.log(err)
   },(db)=>{
     MySql.findData(db,"personDiary",{},{_id:0},(result) => {
       res.send(JSON.stringify(result))
      db.close();
     })
   })
})

module.exports = router;
