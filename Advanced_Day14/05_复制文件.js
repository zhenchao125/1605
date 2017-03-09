var fs = require("fs");
fs.readFile("hello.js", function (err, data) {
    if(err) {
        console.log("图片读取失败");
        return;
    }

    fs.appendFile("/Users/lzc/Desktop/a.js", data, function (err) {
        if(err) {
            console.log("写入文件失败");
        }
    })

});