var a=0,like=10,likef=0,mem=0,sti=0,det=0,sk=0,rom=0,si1=0,si2=0,si3=0,si4=0,ge=0
sn1.onclick = function(){
	if(ge==0){
		si1=1;
		this.style.border="3px solid black";
	}else
	if(ge==1){
		si1=0;
		this.style.border="0px solid black";
	}
}
sn2.onclick = function(){
	if(ge==0){
		si2=1;
		this.style.border="3px solid black";
	}else
	if(ge==1){
		si2=0;
		this.style.border="0px solid black";
	}
}
sn3.onclick = function(){
	if(ge==0){
		si3=1;
		this.style.border="3px solid black";
	}else
	if(ge==1){
		si3=0;
		this.style.border="0px solid black";
	}
}
sn4.onclick = function(){
	if(ge==0){
		si4=1;
		this.style.border="3px solid black";
	}else
	if(ge==1){
		si4=0;
		this.style.border="0px solid black";
	}
}
sr1.onclick = function(){
	if(mem==0){
		mem=1
		sr1.style.border="3px solid black";
	}else
	if(mem==1){
		mem=0
		sr1.style.border="0px solid black";
		console.log("sfasdf")
	}
	console.log(mem)
}
sr2.onclick = function(){
	if(sti==0){
		sti=1;
		this.style.border="3px solid black";
	}else
	if(sti==1){
		sti=0;
		this.style.border="0px solid black";
	}
	console.log(sti)
}
sr3.onclick = function(){
	if(det==0){
		det=1;
		this.style.border="3px solid black";
	}else
	if(det==1){
		det=0;
		this.style.border="0px solid black";
	}
	console.log(det)
}
sr4.onclick = function(){
	if(sk==0){
		sk=1;
		this.style.border="3px solid black";
	}else
	if(sk==1){
		sk=0;
		this.style.border="0px solid black";
	}
	console.log(sk)
}
sr5.onclick = function(){
	if(rom==0){
		rom=1;
		this.style.border="3px solid black";
	}else
	if(rom==1){
		rom=0;
		this.style.border="0px solid black";
	}
	console.log(rom)
}
accept1.onclick = function(){
	if(mem==0 && sti==0 && det==0 && sk==0 && rom==0){
		alert("Выбирите один из жанров")
	}else
	if(mem==1 || sti==1 || det==1 || sk==1 || rom==1){
		if(si1==1){
			ag=document.getElementById("textik").value
			field1.innerHTML='<h5>'+ag+'</h5>';
			alert("Ваше произведение было опубликовано!")
		}else
		if(si2==1){
			ag=document.getElementById("textik").value
			field1.innerHTML='<h5><i>'+ag+'</i></h5>';
			alert("Ваше произведение было опубликовано!")
		}else
		if(si3==1){
			ag=document.getElementById("textik").value
			field1.innerHTML='<h5><u>'+ag+'</u></h5>';
			alert("Ваше произведение было опубликовано!")
		}else
		if(si4==1){
			ag=document.getElementById("textik").value
			field1.innerHTML='<h5><s>'+ag+'</s></h5>';
			alert("Ваше произведение было опубликовано!")
		}
		// ag=document.getElementById("textik").value
		// field1.innerHTML='<h5>'+ag+'</h5>';
		// alert("Ваше произведение было опубликовано!")
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
log7.onclick = function(){
	login1.style.height = 0+"%";
}
log8.onclick = function(){
	field3.style.left = -100+"%";
	field4.style.left = 0+"%";
}
back3.onclick = function(){
	field3.style.left = 0+"%";
	field4.style.left = 100+"%";
}
acceptik.onclick = function(){
	field3.style.left = 0+"%";
	field4.style.left = 100+"%";
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
}
sr1.onmouseout = function(){
	this.style.boxShadow = ""
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
RU.onclick = function(){
	in1.innerHTML='<h1>Наш проект MyStory с возможностью публиковать свои лит. работы(мемуары, стихи, рассказы) в аудио или текстовом формате, помогает людям 50+, которые хотят раскрыть писательский потенциал или продать свои работы</h1>';
	in2.innerHTML='<h1>Наш проект решает проблему незамеченного таланта, недостатка аудитории и сложности издать своё произведение в тираже у данного сегмента</h1';
	in3.innerHTML='<h1>Помогает получить поддержку от единомышленников, продвинуть свои работы  с помощью оценивания работ другими участниками, чата и премиум подписки.</h1>';
	right1.innerHTML='<h1><p align = "center">Добавить работу</p></h1>';
	left1.innerHTML='<h1><p align = "center">Читать</p></h1>';
	up_panel.innerHTML='<h1>Комментарии</h1>';
	back1.innerHTML='<h1>Назад</h1>';
	buy1.innerHTML='<p align="center"><h1>Купить</h1></p>';
	sha1.innerHTML='<h1>Жанр:</h1>';
	sha2.innerHTML='<h1>Текст:</h1>';
	sr1.innerHTML='<h1>Мемуар</h1>';
	sr2.innerHTML='<h1>Стих</h1>';
	sr3.innerHTML='<h1>Детектив</h1>';
	sr4.innerHTML='<h1>Сказка</h1>';
	sr5.innerHTML='<h1>Роман</h1>';
	sn1.innerHTML='<h1>Жирный</h1>';
	sn2.innerHTML='<i>Курсив</i>';
	sn3.innerHTML='<u>Подчёркнутый</u>';
	sn4.innerHTML='<s>Зачёркнутый</s>';
	back2.innerHTML='<h1>Назад</h1>';
	accept1.innerHTML='<h1>Опубликовать</h1>';
	sev.innerHTML='<pre><h1> Язык</h1></pre>';
	log2.innerHTML='<h1>ВХОД</h1>';
	log3.innerHTML='<h2>ЛОГИН</h2>';
	log5.innerHTML='<h2>ПАРОЛЬ</h2>';
	log7.innerHTML='<h3>ВОЙТИ</h3>';
	log8.innerHTML='<h5>Еще не зарегестрировались?</h5>';
	name1.innerHTML='<h1>Регистрация</h1>';
	name2.innerHTML='<h3>Ф.И.О.</h3>';
	name3.innerHTML='<h3>Электронная почта</h3>';
	name4.innerHTML='<h3>Логин</h3>';
	name5.innerHTML='<h3>Пароль</h3>';
	back3.innerHTML='<h1><-</h1>';
}
fRU.onclick = function(){
	in1.innerHTML='<h1>Наш проект MyStory с возможностью публиковать свои лит. работы(мемуары, стихи, рассказы) в аудио или текстовом формате, помогает людям 50+, которые хотят раскрыть писательский потенциал или продать свои работы</h1>';
	in2.innerHTML='<h1>Наш проект решает проблему незамеченного таланта, недостатка аудитории и сложности издать своё произведение в тираже у данного сегмента</h1';
	in3.innerHTML='<h1>Помогает получить поддержку от единомышленников, продвинуть свои работы  с помощью оценивания работ другими участниками, чата и премиум подписки.</h1>';
	right1.innerHTML='<h1><p align = "center">Добавить работу</p></h1>';
	left1.innerHTML='<h1><p align = "center">Читать</p></h1>';
	up_panel.innerHTML='<h1>Комментарии</h1>';
	back1.innerHTML='<h1>Назад</h1>';
	buy1.innerHTML='<p align="center"><h1>Купить</h1></p>';
	sha1.innerHTML='<h1>Жанр:</h1>';
	sha2.innerHTML='<h1>Текст:</h1>';
	sr1.innerHTML='<h1>Мемуар</h1>';
	sr2.innerHTML='<h1>Стих</h1>';
	sr3.innerHTML='<h1>Детектив</h1>';
	sr4.innerHTML='<h1>Сказка</h1>';
	sr5.innerHTML='<h1>Роман</h1>';
	sn1.innerHTML='<h1>Жирный</h1>';
	sn2.innerHTML='<i>Курсив</i>';
	sn3.innerHTML='<u>Подчёркнутый</u>';
	sn4.innerHTML='<s>Зачёркнутый</s>';
	back2.innerHTML='<h1>Назад</h1>';
	accept1.innerHTML='<h1>Опубликовать</h1>';
	sev.innerHTML='<pre><h1> Язык</h1></pre>';
	log2.innerHTML='<h1>ВХОД</h1>';
	log3.innerHTML='<h2>ЛОГИН</h2>';
	log5.innerHTML='<h2>ПАРОЛЬ</h2>';
	log7.innerHTML='<h3>ВОЙТИ</h3>';
	log8.innerHTML='<h5>Еще не зарегестрировались?</h5>';
	name1.innerHTML='<h1>Регистрация</h1>';
	name2.innerHTML='<h3>Ф.И.О.</h3>';
	name3.innerHTML='<h3>Электронная почта</h3>';
	name4.innerHTML='<h3>Логин</h3>';
	name5.innerHTML='<h3>Пароль</h3>';
	back3.innerHTML='<h1><-</h1>';
}
EN.onclick = function(){
	in1.innerHTML='<h1>Our project MyStory using publish your lit. works (memoirs, poems, stories) in audio or text format, helps 50+ people who want to unleash their writing potential or sell their works</h1>';
	in2.innerHTML='<h1>Our project solves the problem of unnoticed talent, lack of audience and the difficulty of publishing your work in circulation in this segment</h1';
	in3.innerHTML='<h1>Helps to get support from like-minded people, to promote your work through the evaluation of work by other members, chat and premium subscriptions</h1>';
	right1.innerHTML='<h1><p align = "center">Add work</p></h1>';
	left1.innerHTML='<h1><p align = "center">To read</p></h1>';
	up_panel.innerHTML='<h1>Comments</h1>';
	back1.innerHTML='<h1>Back</h1>';
	buy1.innerHTML='<p align="center"><h1>Buy</h1></p>';
	sha1.innerHTML='<h1>Genre:</h1>';
	sha2.innerHTML='<h1>Text:</h1>';
	sr1.innerHTML='<h1>Memoir</h1>';
	sr2.innerHTML='<h1>Verse</h1>';
	sr3.innerHTML='<h1>Detective</h1>';
	sr4.innerHTML='<h1>Story</h1>';
	sr5.innerHTML='<h1>Novel</h1>';
	sn1.innerHTML='<h1>Fatty</h1>';
	sn2.innerHTML='<i>Italics</i>';
	sn3.innerHTML='<u>Underlined</u>';
	sn4.innerHTML='<s>Strikethrough</s>';
	back2.innerHTML='<h1>Back</h1>';
	accept1.innerHTML='<h1>Publish</h1>';
	sev.innerHTML='<pre><h1> Lang</h1></pre>';
	log2.innerHTML='<h1>ENTRANCE</h1>';
	log3.innerHTML='<h2>LOGIN</h2>';
	log5.innerHTML='<h2>PASSWORD</h2>';
	log7.innerHTML='<h3>COME IN</h3>';
	log8.innerHTML='<h5>Not registered yet?</h5>';
	name1.innerHTML='<h1>check in</h1>';
	name2.innerHTML='<h3>S.N.P.</h3>';
	name3.innerHTML='<h3>Email</h3>';
	name4.innerHTML='<h3>Login</h3>';
	name5.innerHTML='<h3>Password</h3>';
	back3.innerHTML='<h1><-</h1>';
}
fEN.onclick = function(){
	in1.innerHTML='<h1>Our project MyStory using publish your lit. works (memoirs, poems, stories) in audio or text format, helps 50+ people who want to unleash their writing potential or sell their works</h1>';
	in2.innerHTML='<h1>Our project solves the problem of unnoticed talent, lack of audience and the difficulty of publishing your work in circulation in this segment</h1';
	in3.innerHTML='<h1>Helps to get support from like-minded people, to promote your work through the evaluation of work by other members, chat and premium subscriptions</h1>';
	right1.innerHTML='<h1><p align = "center">Add work</p></h1>';
	left1.innerHTML='<h1><p align = "center">To read</p></h1>';
	up_panel.innerHTML='<h1>Comments</h1>';
	back1.innerHTML='<h1>Back</h1>';
	buy1.innerHTML='<p align="center"><h1>Buy</h1></p>';
	sha1.innerHTML='<h1>Genre:</h1>';
	sha2.innerHTML='<h1>Text:</h1>';
	sr1.innerHTML='<h1>Memoir</h1>';
	sr2.innerHTML='<h1>Verse</h1>';
	sr3.innerHTML='<h1>Detective</h1>';
	sr4.innerHTML='<h1>Story</h1>';
	sr5.innerHTML='<h1>Novel</h1>';
	sn1.innerHTML='<h1>Fatty</h1>';
	sn2.innerHTML='<i>Italics</i>';
	sn3.innerHTML='<u>Underlined</u>';
	sn4.innerHTML='<s>Strikethrough</s>';
	back2.innerHTML='<h1>Back</h1>';
	accept1.innerHTML='<h1>Publish</h1>';
	sev.innerHTML='<pre><h1> Lang</h1></pre>';
	log2.innerHTML='<h1>ENTRANCE</h1>';
	log3.innerHTML='<h2>LOGIN</h2>';
	log5.innerHTML='<h2>PASSWORD</h2>';
	log7.innerHTML='<h3>COME IN</h3>';
	log8.innerHTML='<h5>Not registered yet?</h5>';
	name1.innerHTML='<h1>check in</h1>';
	name2.innerHTML='<h3>S.N.P.</h3>';
	name3.innerHTML='<h3>Email</h3>';
	name4.innerHTML='<h3>Login</h3>';
	name5.innerHTML='<h3>Password</h3>';
	back3.innerHTML='<h1><-</h1>';
}
//		.innerHTML='';
//#000000bd     t=44% l=55% | t=42 l=56 | t=41 l=55 | t=40

// fn = function(){
	// var a=document.getElementById("id").value
	// console.log(a)
// }
// fn();