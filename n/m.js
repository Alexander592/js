let students=[
	{'id':1,'name':'Данила','surname':'Алферов'},
	{'id':2,'name':'Данил','surname':'Алферо'},
	{'id':3,'name':'Дани','surname':'Алфера'}
]

let current=0
function load_student(id){
	document.getElementById('name').value=students[id].name
	document.getElementById('surname').value=students[id].surname
}

function next(){
	if(current < students.length){
		load_student(current)
		current++
	}
	else{
		document.getElementById('f').disamble=true

	}
}

function ret(){
	current=0
	return next()
}
function backk(){
	if(current!=0){
		console.log(current)
		load_student(current)
		current--
	}

}