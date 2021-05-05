var a=0,like=10,likef=0,mem=0,sti=0,det=0,sk=0,rom=0,ag=0
sn1.onclick = function(){
	field1.innerHTML='<h5>'+ag+'</h5>'
}
sn2.onclick = function(){
	field1.innerHTML='<h5><i>'+ag+'<i></h5>'
}
sn3.onclick = function(){
	field1.innerHTML='<h5><u>'+ag+'</u></h5>'
}
sn4.onclick = function(){
	field1.innerHTML='<h5><s>'+ag+'</s></h5>'
}
sr1.onclick = function(){
	if(mem==0){
		mem=1;
	}else
	if(mem==1){
		mem=0;
	}
	console.log(mem)
}
sr2.onclick = function(){
	if(sti==0){
		sti=1;
	}else
	if(sti==1){
		sti=0;
	}
	console.log(sti)
}
sr3.onclick = function(){
	if(det==0){
		det=1;
	}else
	if(det==1){
		det=0;
	}
	console.log(det)
}
sr4.onclick = function(){
	if(sk==0){
		sk=1;
	}else
	if(sk==1){
		sk=0;
	}
	console.log(sk)
}
sr5.onclick = function(){
	if(rom==0){
		rom=1;
	}else
	if(rom==1){
		rom=0;
	}
	console.log(rom)
}
accept1.onclick = function(){
	if(mem==0 && sti==0 && det==0 && sk==0 && rom==0){
		alert("Выбирите один из жанров")
	}else
	if(mem==1 || sti==1 || det==1 || sk==1 || rom==1){
		ag=document.getElementById("textik").value
		field1.innerHTML='<h5>'+ag+'</h5>';
		alert("Ваше произведение было опубликовано!")
	}

}
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
back2.onclick = function(){
	alls.style.left = 0+"%";
}
left1.onclick = function(){
	alls.style.left = 100+"%";
}
right1.onclick = function(){
	alls.style.left = -100+"%";
}
login2.onclick = function(){
	login1.style.height = 100+"%";
}
background1.onclick = function(){
	login1.style.height = 0+"%";
}
like1.onclick = function(){
	if(likef==0){
	likef=1;
	like+=1;
	this.innerHTML='<img src="photo/like.png" width="100%" height="100%">'
	like2.innerHTML='<h1>'+like+'</h1>'
	like3.innerHTML='<font color="green"><h1>+1</h1></font>'
		like3.style.left = 54+"%";
		like3.style.top = -70+"%";
	} else
	if(likef==1){
	likef=0;
	like-=1;
	this.innerHTML='<img src="photo/lk.png" width="100%" height="100%">'
	like2.innerHTML='<h1>'+like+'</h1>'
	like3.innerHTML='<font color="red"><h1>-1</h1></font>'
		like3.style.left = 55+"%";
		like3.style.top = 110+"%";
	}
}
submit1.onclick = function(){
	on3.style.top=40+"%";
	on3.style.left=5+"%";
	texti3.style.top=73+"%";
	texti3.style.left=12+"%";
	an3.style.top=58+"%";
	an3.style.left=83+"%";
	var as = document.getElementById("txt1").value
	texti3.innerHTML='<h5>'+as+'</h5>'
}
sr1.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
	this.innerHTML='<font color="blue"><h1>Мемуар</h1></font>'
}
sr1.onmouseout = function(){
	this.style.boxShadow = ""
	this.innerHTML='<font color=""><h1>Мемуар</h1></font>'
}
sr2.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
}
sr2.onmouseout = function(){
	this.style.boxShadow = ""
}
sr3.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
}
sr3.onmouseout = function(){
	this.style.boxShadow = ""
}
sr4.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
}
sr4.onmouseout = function(){
	this.style.boxShadow = ""
}
sr5.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
}
sr5.onmouseout = function(){
	this.style.boxShadow = ""
}
sn1.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
}
sn1.onmouseout = function(){
	this.style.boxShadow = ""
}
sn2.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
}
sn2.onmouseout = function(){
	this.style.boxShadow = ""
}
sn3.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
}
sn3.onmouseout = function(){
	this.style.boxShadow = ""
}
sn4.onmouseover = function(){
	this.style.boxShadow = "0 0 20px white"
}
sn4.onmouseout = function(){
	this.style.boxShadow = ""
}

//#000000bd     t=44% l=55% | t=42 l=56 | t=41 l=55 | t=40

// fn = function(){
	// var a=document.getElementById("id").value
	// console.log(a)
// }
// fn();