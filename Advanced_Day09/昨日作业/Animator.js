/**
 * Created by lzc on 2017/3/1.
 */
function Animator(duatrion, easing, process) {
    /*动画周期*/
    this.duration = duatrion || 1000;
    /*动画使用到的算子*/
    this.easing = easing;
    /*动画执行期间需要执行的回调函数*/
    this.process = process;

    if(!(this.easing instanceof Function)){
        this.easing = function (p) {
            return p;
        }
    }
}
/*启动动画，  参数：表示是否循环*/
Animator.prototype.start = function (loop) {
    if(!(this.process instanceof Function)){
        return ;
    }
    var startTime = new Date();
    var p;
    var self = this;
    this.animatorId = requestAnimationFrame(function step() {
        p = Math.min(1, (new Date() - startTime) / self.duration);
        self.process(self.easing(p), p);
        if (p == 1) {
            if (loop) {
                startTime = new Date();
            }else{
                return;
            }
        }
        self.animatorId = requestAnimationFrame(step);
    })
}
Animator.prototype.stop = function () {
    cancelAnimationFrame(this.animatorId);
}
