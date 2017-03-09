//process是全局的，所以在任何的地方都可以直接使用  i/o input/output
//data事件
/*process.stdin.on("data", function(msg){
	console.log("你刚才输入的是：" + msg);
});
console.log("abc");
*/
var i = 1;
setTimeout(function step(){
	console.log(i++);
	setTimeout(step, 100)
}, 0);
/*
var http = require("http");
var fs = require("fs");
*/