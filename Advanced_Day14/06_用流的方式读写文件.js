/**
 * Created by lzc on 2017/3/9.
 */
var fs = require("fs");
//读大文件
var read = fs.createReadStream("图片.zip");
var write = fs.createWriteStream("b.zip");
read.on("data", function (data) {
    write.write(data);
});
