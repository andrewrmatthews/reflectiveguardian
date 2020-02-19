function send(){
	var somgo = " " + document.getElementById('i').value;
	userInput.push(somgo);
	document.getElementById('chatbox').innerHTML = userInput;
	document.getElementById('i').value = "";
}

document.addEventListener('keydown', (event) => {
	if (event.keyCode == 13) {
		send();
	}
});

var userInput = [];