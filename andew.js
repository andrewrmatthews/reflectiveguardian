function send(){
	var pullInput = document.getElementById('i').value + "<br>";
	userInput.push(pullInput);
	document.getElementById("chatbox").innerHTML = userInput;
	document.getElementById("i").value = "";
}

 function keyEnter(){
 	document.addEventListener("keydown", (event) => {
 		if (event.keyCode == 13) {
 			if (document.getElementById('i').innerHTML !== ""){
 				document.getElementById('i').blur();
 				event.preventDefault();
 				send();
 			}
 		}
 	});
}


var userInput = [];