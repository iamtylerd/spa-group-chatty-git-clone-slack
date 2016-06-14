

//variable declarations
var container = document.getElementById("messagesContainer");
var input = document.getElementById("messageInput");


// EDIT MODAL

var editMessageButton = document.getElementById("editMessageButton");
editMessageButton.addEventListener("click", Chatty.editMessageButtonPressed);

var editMessageSubmitButton = document.getElementById("editSubmit");
editMessageSubmitButton.addEventListener("click", Chatty.editSubmitButtonPressed);

// Get selected message
document.body.addEventListener("click", Chatty.messageSelected);


// User select
var selectedUser = document.getElementById("userSelect");
selectedUser.addEventListener("change", Chatty.getUserValue);

// New user
var newNameInput = document.getElementById("addNameInput");
var newNameValue = newNameInput.value;
var newNameButton = document.getElementById("nameSubmit");
newNameButton.addEventListener("click", Chatty.pushNewName);

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
	//Reset counter
	Chatty.idCounter = 0;

	//Empty the array
	Chatty.messages = [];

});

//Listener for checkboxes
var darkBox = document.getElementById("dark-box").addEventListener("click", function(e) {
	container.classList.toggle("darkTheme");
});

var largeBox = document.getElementById("large-box").addEventListener("click", function(e) {
	container.classList.toggle("largeText");
});


