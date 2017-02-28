/**
 * Created by lzc on 2017/2/28.
 */
var ajax = {
    get : function (url, onSuccess) {
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    if(onSuccess instanceof Function){
                        onSuccess(xhr.responseText);
                    }
                }
            }
        };
        xhr.send(null);
    },
    post : function () {

    }
}
