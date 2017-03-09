var fs = require("fs");
// var msg = "今天天气不错";
/*
* 参数1：要写入的文件的路径
* */
var msg = Buffer.from([97, 98, 99])
/*fs.writeFile("test.txt", msg, "utf8",function (err) {
 if(err){
 console.log("文件写入失败");
 }else {
 console.log("文件写入成功");
 }
 })*/
fs.writeFileSync("test.txt", msg, "utf-8");
