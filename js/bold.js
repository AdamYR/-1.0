function RandomNum(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1) + num1);

}
//构造小球函数
function Ball(w, h, src,left,top) {
    this.ball = document.createElement("div");
    var randomNum = RandomNum(20, 50);
    this.width = w
    this.height = h
    //如果元素有id名，我们可以直接使用，不用document.get....获取
    if(left){
        this.left = left;
        this.top = top;
    }
    this.left = RandomNum(0, con.offsetWidth - 166);
    this.top = RandomNum(0, con.offsetHeight - 166);
    // 传参确定背景图
    this.backgroundImage = "url('../img/" + src + "')";
    this.tempX = this.left;
    this.tempY = this.top;
    this.speedx = RandomNum(10, 20) - 15.5;//后面的小数是保证随机产生的方向有正有负
    this.speedy = RandomNum(10, 20) - 15.5;
}
//画小球的方法
Ball.prototype.draw = function () {
    this.ball.style.width = this.width + "px";
    this.ball.style.height = this.height + "px";
    this.ball.className = "ball";
    this.ball.style.left = this.tempX + "px";
    this.ball.style.top = this.tempY + "px";
    this.ball.style.backgroundImage = this.backgroundImage;
    con.appendChild(this.ball);
}


//运动函数
Ball.prototype.move = function (x,y) {
    // console.log(this.tempX)
    if(x){
        this.tempX = x;
        this.tempY = y;
    }
    this.tempX = this.tempX + this.speedx;
    this.tempY = this.tempY + this.speedy;
    // 判断临界值
    var content = document.querySelector('.content');
    if (this.tempX + this.width >= content.clientWidth || this.tempX <= 0) {
        this.speedx = -this.speedx;//改变方向
    }
    if (this.tempY + this.height >= content.clientHeight || this.tempY <= 0) {
        this.speedy = -this.speedy;
    }
    this.draw();
}
//产生小球
var balls = [];
var ball = new Ball(90, 90, "video_img1.png");
balls.push(ball);//生成的小球对象放进数组
for (var i = 2; i <= 5; i++) {
    var ball = new Ball(90, 90, "video_img" + i + ".png");
    balls.push(ball);//生成的小球对象放进数组
}
for (var i = 6; i <= 11; i++) {
    var ball = new Ball(90, 90, "video_img" + i + ".png");
    balls.push(ball);//生成的小球对象放进数组
}
function start() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].move();
    }
}
function starts(){
    balls[0].move(333,190);
    balls[1].move(622,38);
    balls[2].move(622,350);
    balls[3].move(70,38);
    balls[4].move(70,350);
    balls[5].move(326,8);
    balls[6].move(344,372);
    balls[7].move(194,113);
    balls[8].move(194,278);
    balls[9].move(496,113);
    balls[10].move(496,278);
}
window.onload = function () {
    var time=setInterval(start, 40);//设置定时器
    var fake =document.querySelector('#fake');
    
    fake.onmouseover = function (){
        clearInterval(time)
        var boxs=document.querySelectorAll('.ball');
        boxs[0].style.left='333px'
        boxs[0].style.top='190px'
        boxs[1].style.left='622px'
        boxs[1].style.top='38px'
        boxs[2].style.left='622px'
        boxs[2].style.top='350px'
        boxs[3].style.left='70px'
        boxs[3].style.top='38px'
        boxs[4].style.left='70px'
        boxs[4].style.top='350px'
        boxs[5].style.left='326px'
        boxs[5].style.top='8px'
        boxs[6].style.left='344px'
        boxs[6].style.top='372px'
        boxs[7].style.left='194px'
        boxs[7].style.top='113px'
        boxs[8].style.left='194px'
        boxs[8].style.top='278px'
        boxs[9].style.left='496px'
        boxs[9].style.top='113px'
        boxs[10].style.left='496px'
        boxs[10].style.top='278px'
    }
    fake.onmouseout =function(){
        starts()
        time=setInterval(start,40);//设置定时器
    }
}