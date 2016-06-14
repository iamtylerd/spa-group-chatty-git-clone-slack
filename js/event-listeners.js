

//variable declarations
var container = document.getElementById("messagesContainer");
var input = document.getElementById("messageInput");

//Listener for delete all messages
var deleteMessages = document.getElementById("deleteAllButton");

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

	Chatty.idCounter = 0;
	Chatty.messages = [];
});

//Listener for checkboxes
var darkBox = document.getElementById("dark-box").addEventListener("click", function(e) {
	container.classList.toggle("darkTheme");
});

var largeBox = document.getElementById("large-box").addEventListener("click", function(e) {
	// document.querySelector("p").classList.toggle("largeText");
	container.classList.toggle("largeText");
});




