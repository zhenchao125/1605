/**
 * Created by lzc on 2017/3/1.
 */
/*参数1：周期序列  参数2：动画算子序列  参数3：回调函数序列*/
function Animator(durations, easings, pros) {
    this.durations = durations || [];
    this.easings = easings || [];
    this.pros = pros || [];
}

Animator.prototype.start = function (loop) {
    var startTime = new Date();
    /*记录正在执行的动画的序列的下标*/
    var index = 0;
    var duration, p, pro, easing;
    var self = this;
        self.id = requestAnimationFrame(function step() {
            duration = self.durations[index];
            pro = self.pros[index];
            easing = self.easings[index];
            p = Math.min(1, (new Date() - startTime) / duration);
            pro(easing(p), p);
            if(p == 1){
                if(index == self.durations.length - 1){
                    if(loop){
                        index = -1;
                    }else{
                        return;
                    }
                }
                index++;
                startTime = new Date;
            }
            self.id = requestAnimationFrame(step);
        });


}
Animator.prototype.stop = function () {
    cancelAnimationFrame(this.id);
}
