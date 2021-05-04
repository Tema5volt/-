var a=0
mark1.onclick = function(){
	if(a==0){
	fl.style.height = 160+"%";
	mark1.style.webkitTransform =" rotate (180deg)"
	a=1;
	}else
	if(a==1){
	fl.style.height = 0+"%";
	a=0;
	}
}
// fn = function(){
	// var a=document.getElementById("id").value
	// console.log(a)
// }
// fn();