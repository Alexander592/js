function show(){
	let age=parseInt(document.getElementById('age').value)
	let div=document.getElementById('enner')


	if(age<17){
		div.innerHTML='<b>Вы подросток</b>'
	}
	else if (age<10){
		div.innerHTML='<b>Вы ребенок</b>'
	}
	else if (age>60){
		div.innerHTML='<b>вы пожилой</b>'
	}
	else {
		div.innerHTML='<b>вы взрослый</b>'

	}
}