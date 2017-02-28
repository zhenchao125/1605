/**
 * Created by lzc on 2017/2/28.
 */
var ajax = {
    get : function (url, onSuccess, onFail) {
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    if(onSuccess instanceof Function){
                        onSuccess(xhr.responseText);
                    }
                }else{
                    if(onFail instanceof Function){
                        onFail("你的请求失败，请重试");
                    }
                }
            }
        };
        xhr.send(null);
    },
    post : function () {

    }
}
