/*1. 导入提供web服务的模块：http*/
var http = require("http");
var url = require("url");

var server = http.createServer();
server.on("request", function (request, response) {

    /*
     request.url:浏览器请求的原始url
     true ： 表示把查询请求也进行解析为
     query ：得到解析后的查询参数组成的js对象  { arg0=xxx , arg1=yyy}
     num :得到具体的参数的值
     */
    var num = url.parse(request.url, true).query.num  // num=200
    var randomNum = parseInt(Math.random() * num);
    response.write("尊敬的用户，你需要的随机数是：" + randomNum);
    response.end();  //结束这次响应，node会把数据响应给浏览器
})
server.listen(8888);   // 0 - 65535

//Express