/**
 * Created by Administrator on 2017/3/7.
 */

var projectData = {
    "name": "day04_jQuery",
    "fileData": [
        {
            "name": "css",
            "type": "dir"
        },
        {
            "name": "js",
            "type": "dir"
        },
        {
            "name": "img",
            "type": "dir"
        },
        {
            "name": "index.html",
            "type": "file",
            "content": "<html>\n<head>\n\t<title>index</title>\n</head>\n<body>\n\t<h1>Hello Node JS</h1>\n</body>\n</html>"

        }
    ]
};
var fs = require("fs");
if (projectData.name) {
    fs.mkdirSync(projectData.name); //创建文件夹
    var filedata = projectData.fileData;
    if(filedata && filedata.forEach){
        filedata.forEach(function (f) {
            f.path = projectData.name+"/"+f.name;
            f.content = f.content || "";
            switch (f.type){
                case "dir":
                    fs.mkdirSync(f.path);
                    break;
                case "file":
                    fs.writeFileSync(f.path,f.content,"utf-8"); //创建文件
                    break;
            default:
            break;
        }
        });
    }
}