// standard shim
window.requestAnimFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
})();

// helper functions	输入最大值，随机生成一个向下取整的函数
function randomMax(max) {
	return Math.floor(Math.random() * max);
}

//获取离子的颜色	 RGB的值是从100-255之间
function getParticleColor() {
	var r = (100 + randomMax(155));
	var g = (100 + randomMax(155));
	var b = (100 + randomMax(155));
	console.log('rgb(' + r + ',' + g + ',' + b + ')');
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}
//刷新颜色
function refreshColor() {
	console.log(defaultColor);
	for(var i = 0; i < particleSystem.particles.length; i++) {
		particleSystem.particles[i].color = singlecolor ? defaultColor : getParticleColor();
	}
}

// dom stuff and fps counter
var canvas = document.getElementById('mainCanvas');	//获取画布的ID
var fpsOut = document.getElementById('fps');		//获取P的ID显示帧数
canvas.width = window.innerWidth;					//设置画布的宽度和高度
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');					//生成画布的绘图环境为2D
var fps = 0,										//声明变量fps,now,lastUpdate初始时间,fpsFilter
	now, lastUpdate = (new Date()) * 1 - 1,
	fpsFilter = 50;

// globals
var numParticles = 180,								//声明变量numParticles离子数量
	angleSpeed = 0.1,								//角度速度
	particleSize = 1,								//离子大小
	verticalSpeed = 2,								//垂直
	widthFactor = 5,								//宽度
	singlecolor = true,								//是否是单一颜色
	defaultColor = '#73F0DF';						//默认颜色

var Particle = function() {							//参数，h,angle,color
	//改变粒子位置
	this.h = Math.floor(canvas.height * Math.random());				//高度是在画布高度的随机高度
	this.angle = Math.random() * Math.PI * 2;						//角度，是两倍圆周率内的随机角度
	
	this.color = singlecolor ? defaultColor : getParticleColor();	//颜色，
};

Particle.prototype.draw = function(id) {			//为Particle的原型添加变量draw添加匿名函数
	this.angle += angleSpeed;						//离子角度等于离子角度加角度速度
	this.h -= verticalSpeed;						//离子高度等于离子高度-垂直高度
	
	//如果粒子在画布之外，使其显示回随机位置
	if(this.h < 0 || this.h > canvas.height) {		
		this.h = Math.floor(canvas.height * Math.random());
	}

	ctx.beginPath();											//beginPath() 方法开始一条路径，或重置当前的路径
	ctx.fillStyle = singlecolor ? defaultColor : this.color;	//fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
	//单行代码使它看起来像3d
	var sizeFactor = 0.5 + (Math.sin(this.angle) + 1) / 2;		
	ctx.arc(canvas.width / 2 + Math.cos(this.angle) * (canvas.height - this.h) / widthFactor, this.h, particleSize * sizeFactor, 0, Math.PI *2);//ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)画圆（弧）,画圆或者圆弧。x,y为圆心坐标，radius为半径，startAngle,endAngle为开始/结束划圆的角度，anticlockwise为是否逆时针画圆（True为逆时针，False为顺时针）。
	ctx.fill();													//fill() 方法填充当前的图像（路径）。
};

var ParticleSystem = function() {								//离子系统
	this.particles = [];
	for(var i = 0; i < numParticles; i++) {
		this.particles.push(new Particle(canvas.height * Math.random()));
	}
};
ParticleSystem.prototype.draw = function() {					//离子系统，原型属性draw
	for(var i = 0; i < this.particles.length; i++) {
		this.particles[i].draw();
	}
};

var gui = new dat.GUI();
gui.add(window, 'numParticles').min(1).max(1000).step(1).name('Num. Particles').onFinishChange(function() {
	particleSystem = new ParticleSystem();
});
gui.add(window, 'angleSpeed').min(-0.9).max(0.9).step(0.005).name('Angle Speed');
gui.add(window, 'particleSize').min(1).max(10).step(1).name('Particle size');
gui.add(window, 'verticalSpeed').min(-20).max(20).step(0.5).name('VerticalSpeed');
gui.add(window, 'widthFactor').min(2).max(10).step(1).name('Width Factor');
gui.add(window, 'singlecolor').name('Single Color').onFinishChange(refreshColor);
gui.addColor(window, 'defaultColor').name('Default Color').onFinishChange(refreshColor);

var particleSystem = new ParticleSystem();



window.onresize = function() {				//角度
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	particleSystem = new ParticleSystem();
};

(function animloop() {						//动作循环
	requestAnimFrame(animloop);				//需要执行animloop动画
	ctx.clearRect(0, 0, canvas.width, canvas.height);	//clearRect()Canvas 2D API 的方法将由起点（x，y）  和大小（宽度，高度）定义的矩形中的所有像素设置   为透明黑色，擦除任何先前绘制的内容
	particleSystem.draw();
	var thisFrameFPS = 1000 / ((now = new Date()) - lastUpdate);
	fps += (thisFrameFPS - fps) / fpsFilter;
	lastUpdate = now;
})();

setInterval(function() {
	fpsOut.innerHTML = fps.toFixed(1) + " fps";		//保留一位小数，循环调用
}, 1000);