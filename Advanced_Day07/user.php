<?php
    $user = $_POST["user"];
    if($user == "lisi"){  //不允许lisi注册
        echo "false";
    }else{
        echo "true";
    }

?>