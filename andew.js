function send(){
	var pullInput = " " + document.getElementById('i').value;
	userInput.push(pullInput);
	// document.getElementById("chatbox").innerHTML = userInput;
	document.getElementById("i").value = "";
}

function keyEnter(){
	document.addEventListener("keydown", (event) => {
		if (event.keyCode == 13) {
			userInput.push(" " + document.getElementById('i').value);
		}
	});
}

var userInput = [];
