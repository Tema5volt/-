var a=0,like=10,likef=0
mark1.onclick = function(){
	if(a==0){
	fl.style.height = 160+"%";
	this.style.webkitTransform = "rotate(180deg)"
	a=1;
	}else
	if(a==1){
	fl.style.height = 0+"%";
	this.style.webkitTransform = "rotate(0deg)"
	a=0;
	}
}
kons.onclick=function(){
	kons.style.left = 110+"%"
	kons2.style.left = 75+"%"
}
krest.onclick=function(){
	kons.style.left = 90+"%"
	kons2.style.left = 110+"%"
}
back1.onclick = function(){
	alls.style.left = 0+"%";
}
left1.onclick = function(){
	alls.style.left = 100+"%";
}
like1.onclick = function(){
	if(likef==0){
	likef=1;
	like+=1;
	this.innerHTML='<img src="photo/like.png" width="100%" height="100%">'
	like2.innerHTML='<h1>'+like+'</h1>'
	like3.innerHTML='<font color="green"><h1>'+'+1'+'</h1></font>'
		like3.style.left = 54+"%";
		like3.style.top = 35+"%";
	}else
	if(likef==1){
	likef=0;
	like-=1;
	this.innerHTML='<img src="photo/lk.png" width="100%" height="100%">'
	like2.innerHTML='<h1>'+like+'</h1>'
	like5.innerHTML='<font color="red"><h1>'+'-1'+'</h1></font>'
		like5.style.left = 55+"%";
		like5.style.top = 48+"%";
	}
}
submit1.onclick = function(){
	on3.style.top=40+"%";
	on3.style.left=5+"%";
	texti3.style.top=73+"%";
	texti3.style.left=12+"%";
	an3.style.top=58+"%";
	an3.style.left=83+"%";
	var as=document.getElementById("txt1").value
	texti3.innerHTML='<h5>'+as+'</h5>'
}
//#800800     t=44% l=55% | t=42 l=56 | t=41 l=55 | t=40

// fn = function(){
	// var a=document.getElementById("id").value
	// console.log(a)
// }
// fn();