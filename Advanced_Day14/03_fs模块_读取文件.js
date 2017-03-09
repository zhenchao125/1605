var fs = require("fs");  //导入file system模块，专门去处理文件io
//异步写法
/*fs.readFile("hello.js", "utf8",function (err, data) {
    if(err){
        console.log("文件读取错误");
    }else{
        console.log(data);
    }
})*/
//同步写法：文件读取完成之前，不会向下执行，会一直阻塞。
var data = fs.readFileSync("hello.js", "utf-8");
console.log(data)
console.log("==========")