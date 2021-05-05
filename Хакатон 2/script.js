var a=0
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

// fn = function(){
	// var a=document.getElementById("id").value
	// console.log(a)
// }
// fn();