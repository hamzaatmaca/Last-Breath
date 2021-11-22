//Background Property//
let body = document.body.style;
body.backgroundImage =`url(assets/img/rain.jpg)`;
body.backgroundSize = "cover";
body.backgroundRepeat = "no-repeat";
body.backgroundAttachment= "fixed";
body.backgroundPosition="center";


//Background Property//
class Rain{
	constructor(x,y,c,dx,dy,s){
		this.x = x;
		this.y = y;
		this.c = c;
		this.dx = dx;
		this.dy = dy;
		this.s = s;


		this.rain = document.createElement('div');
		this.rain.style.width = this.x + "px";
		this.rain.style.height = this.y + "px";
		this.rain.style.position = "absolute";
		this.rain.style.boxShadow ="0 0 10px #A3FFE5";
		this.rain.style.zIndex = -5;
		this.rain.style.borderRadius= 10 + "px";
		this.rain.style.backgroundColor = this.c;
		this.rain.style.marginLeft = this.dx + "px";
		this.rain.style.marginTop = this.dy + "px";
		this.rain.style.borderRadius = 50 + 'px';
		let nav = document.getElementById('nav');
		nav.style.position = "absolute";
		nav.insertBefore(this.rain,nav.childNodes[0]);
	}
	move(){
		this.s+=window.innerWidth/40;
		this.rain.style.marginTop = this.dy + this.s +"px";
		this.sepNum = this.rain.style.marginTop.split('p');
		this.firstSepNum = this.sepNum[0];
		this.typeFirstSepNum = Number(this.firstSepNum);
		
		if(this.typeFirstSepNum > (window.innerHeight - window.innerHeight/20)){
			this.s = Math.floor(Math.random() * window.innerHeight/2);
			this.rain.style.marginTop = this.s +"px";

		}
	}
}

let cloud = [];

for (var i = 0;i < window.innerWidth/10; i++) {
	cloud[i] = new Rain(
		1,
		window.innerHeight/90,
		'whitesmoke',
		Math.floor(Math.random() * window.innerWidth),
		Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 1000),
		)
}


function loop(){
	for (var i = 0; i < cloud.length; i++) {
		cloud[i].move();
	}
}

//let rain = new Rain(2,30,'red',500,0,1);



setInterval(()=>{
	loop();
},0.1);

//RAINS FALLING SOUND//
var audio = document.createElement("AUDIO")
audio.src = "./assets/audio/rain.mp3";
audio.preload = "auto";
document.body.appendChild(audio);

document.body.addEventListener("mousemove", function () {
	audio.play();

});
//RAINS FALLING SOUND//