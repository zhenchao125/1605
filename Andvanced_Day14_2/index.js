/**
 * Created by lzc on 2017/3/9.
 */
var fs = require("fs");
//导入express模块
var express = require('express');
//获取一个app对象
var app = express();

// http://127.0.0.1:8888/user.html
app.get('/user.html', function (req, res) {
    // res.setHeader("Content-Type", "text/html;charset=utf-8");
    // res.send('<h1>你好，这是我们的第一个nodejs项目</h1>');
    fs.readFile("post_test.html", "utf-8",function (err, data) {
        res.send(data);
    })

});
// http://127.0.0.1:8888/a.jpg
app.get('/xxx.html', function (req, res) {
    fs.readFile("/Users/lzc/Desktop/美女.jpg",function (err, data) {
        res.send(data);
    })
});
app.post("/", function (req, res) {
    res.send('<h1>post你好，这是我们的第一个nodejs项目 post</h1>');
})
app.listen(8888);