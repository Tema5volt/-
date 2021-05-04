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
back1.onclick = function(){
	alert("впвыарпв")
	all.style.left = 100+"%";
}
left1.onclick = function(){
	all.style.left = 100+"%";
}

// fn = function(){
	// var a=document.getElementById("id").value
	// console.log(a)
// }
// fn();