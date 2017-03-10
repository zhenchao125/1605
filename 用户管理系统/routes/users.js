var express = require('express');
var fs = require("fs");
var router = express.Router();
var num = 1;
/*用户注册*/
router.post('/register', function (req, res, next) {
    //处理用户的请求数据：    zs=aaa
    var user = req.param("user");
    var pwd = req.param("pwd");
    fs.appendFile("users.txt", user + "=" + pwd + "\n", function (err) {
        if(err){
            res.send("注册失败，请重试");
        }else{
            // res.send("注册成功，请登录");
            res.render("registerSucc", {user : user, num : num++});
        }
    })
    
});

/*用户登录*/
router.post('/login', function (req, res, next) {
    res.send("你登录成功")
});

module.exports = router;
