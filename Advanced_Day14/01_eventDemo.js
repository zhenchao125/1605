/**
 * Created by lzc on 2017/3/9.
 */
var events = require("events");
var emitter = new events.EventEmitter();
//参数1：事件类型  参数2：事件触发的时候的回调函数
emitter.on("click", function (a, b) {
    console.log("自定义事件：" + a + "  "  + b);
})
//发射事件
emitter.emit("click", undefined, 3);
var i = 1;
process.stdin.on("data", function (data){
    if(data.toString().trim() == "click"){
        emitter.emit("click", undefined, i++);
    }
})