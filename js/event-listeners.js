
var container = document.getElementById("messagesContainer");
var input = document.getElementById("messageInput");

// EDIT MODAL

var editMessageButton = document.getElementById("editMessageButton");
editMessageButton.addEventListener("click", Chatty.editMessageButtonPressed);

var editMessageSubmitButton = document.getElementById("editSubmit");
editMessageSubmitButton.addEventListener("click", Chatty.editSubmitButtonPressed);

// Get selected message
document.body.addEventListener("click", Chatty.messageSelected);


//Listener for delete all messages
var deleteMessages = document.getElementById("deleteAllButton");
deleteMessages.addEventListener("click", function(e) {
	//if no messages, delete button is disabled
	if (container.hasChildNodes() === false){
		deleteMessages.disabled = true;
	} else {
		while (container.firstChild) {
  		container.removeChild(container.firstChild);
		}
	}

	Chatty.idCounter = 0;
});

//Listener for checkboxes
var darkBox = document.getElementById("dark-box").addEventListener("click", function(e) {
	container.classList.toggle("darkTheme");
});

var largeBox = document.getElementById("large-box").addEventListener("click", function(e) {
	// document.querySelector("p").classList.toggle("largeText");
	container.classList.toggle("largeText");
});
s
