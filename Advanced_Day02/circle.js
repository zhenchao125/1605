/**
 * Created by lzc on 2017/2/22.
 */
/*
 分析封装什么样的对象？
 circle
 属性：
 element
 半径
 left
 top
 ...
 changeToCircle（）
 changeToRectangle()
 moveX
 moveY

 * */
function Circle(element) {
    /*封装的表示的dom元素*/
    this.element = element;
    /*变成圆形之后的班级*/
    this.r = this.element.offsetWidth / 2;
    /*表示这个圆形的位置的初始值*/
    this.left = this.element.offsetLeft;
    this.top = this.element.offsetTop;
    /*把元素变成圆形，带有动画效果*/
    if(!Circle.prototype.changeToCircle){
        Circle.prototype.changeToCircle = function () {

            var ele = this.element;
            var i = 1;
            var r = this.r;  //先用一个变量接受圆形的半径
            setTimeout(function temp() {
                if(i == 101){
                    return;
                }
                ele.style.borderRadius = r / 100 * (i++) + "px" ;
                setTimeout(temp, 20);
            }, 0)
        }

    }
    if(!Circle.prototype.changeToRectangle){
        Circle.prototype.changeToRectangle = function () {
            var ele = this.element;
            var i = 100;
            var r = this.r;  //先用一个变量接受圆形的半径
            setTimeout(function temp() {
                if(i == -1){
                    return;
                }
                ele.style.borderRadius = r / 100 * (i--) + "px" ;
                setTimeout(temp, 20);
            }, 0)
        }
    }
    if(!Circle.prototype.moveX){
        Circle.prototype.moveX = function () {
            var ele = this.element;
            var i = 1;

            setTimeout(function temp() {
                if(i === 500){
                    return;
                }
                ele.style.left = 2 * i++  + "px";
                setTimeout(temp, 1);
            }, 0)
        }
    }


}
    
