let students = [
	{'id': 1, 'name': 'Данила', 'surname': 'Алферов'},
	{'id': 2, 'name': 'Тихон', 'surname': 'Балаганский'},
	{'id': 3, 'name': 'Константин', 'surname': 'Бобровский'},
	{'id': 4, 'name': 'Владимир', 'surname': 'Бурыкин'},
	{'id': 5, 'name': 'Семён', 'surname': 'Велигжанин'}
]

let current = 0


function load_student(id) {
	document.getElementById('name').value = students[id].name
	document.getElementById('surname').value = students[id].surname
}

function next() {
	document.getElementById('button vlevo').disabled = false
	current++
	load_student(current)
	if (current == 4) {
		document.getElementById('button vpravo').disabled = true
	}
}

function back() {
	document.getElementById('button vpravo').disabled = false
	current--
	load_student(current)
	console.log(current)
	if (current == 0) {
		document.getElementById('button vlevo').disabled = true
	}
}



