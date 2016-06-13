
var container = document.getElementById("message-container");
var input = document.getElementById("message-input");

//Listener for enter/return in the message field
var messageReturn = document.getElementById("message-input").addEventListener("keypress", function(e) {
	if (e.code === 13) {
		var newMessage = document.createElement("p");
		newMessage.innerHTML = input.value;
		container.appendChild(newMessage);
	}
});

//Listener for submit button
var submitButton = document.getElementById("submit-button").addEventListener("click", function(e) {
	var newMessage = document.createElement("p");
	newMessage.innerHTML = input.value;
	container.appendChild(newMessage);
	//clear input after submitting
	input.value = "";
});

//Listener for delete all messages
var deleteMessages = document.getElementById("delete-messages");
deleteMessages.addEventListener("click", function(e) {
	//if no messages, delete button is disabled
	if (container.hasChildNodes() === false){
		deleteMessages.setAttribute("disabled", true);
	}
	else {
		while (container.firstChild) {
  		container.removeChild(container.firstChild);
		}
	}
});

//Listener for checkboxes
var darkBox = document.getElementById("dark-box").addEventListener("click", function(e) {
	container.classList.toggle("darkTheme");
});

var largeBox = document.getElementById("large-box").addEventListener("click", function(e) {
	// document.querySelector("p").classList.toggle("largeText");
	container.classList.toggle("largeText");
});

// //Listener for delete last message
// var deleteButton = document.getElementById("delete-button").addEventListener("click", function(e) {
// 	//var to store parent element
// 	//var lastChild = parent.lastElementChild;
// 	//parent.removeChild(lastChild);
// });



