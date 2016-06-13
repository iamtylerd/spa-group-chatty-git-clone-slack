
//Listener for enter/return in the message field
var messageReturn = document.getElementById("").addEventListener("keypress", function(e) {
	if (e.code === 13) {
		//load message code
	}
});

//Listener for delete all messages
var deleteMessages = document.getElementById("").addEventListener("click", function(e) {
	//if no messages - document.getElementById("").setAttribute("disabled", true);
	// else - delete all current messages
});

//Listener for checkboxes
var darkBox = document.getElementById("").addEventListener("toggle", function(e) {
	//toggle to darkgray background/white text
});

var largeBox = document.getElementById("").addEventListener("toggle", function(e) {
	//toggle to larger font size
});

//Listener for delete last message
var deleteButton = document.getElementById("").addEventListener("click", function(e) {
	//var to store parent element
	//var lastChild = parent.lastElementChild;
	//parent.removeChild(lastChild);
});



