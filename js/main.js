Chatty.loadMessages();

document.body.addEventListener("click", deleteButtonPressed);
document.getElementById("submitButton").addEventListener("click", submitButtonPressed);
document.getElementById("deleteAllButton").addEventListener("click", deleteAllButtonPressed);
document.getElementById("messageInput").addEventListener("keypress", enterButtonPressed);
var disabledAttribute = document.getElementById("deleteAllButton");

function submitButtonPressed() {

  var newMessage = document.getElementById("messageInput").value;

  Chatty.writeMessageToDOM(Chatty.getId(), newMessage);

  document.getElementById("messageInput").value = "";

  disabledAttribute.removeAttribute("disabled");

}

function enterButtonPressed(event) {

   if(event.keyCode == 13){
     
    event.preventDefault();

    var newMessage = document.getElementById("messageInput").value;

    Chatty.writeMessageToDOM(Chatty.getId(), newMessage);

    document.getElementById("messageInput").value = "";

    disabledAttribute.removeAttribute("disabled");

   }

}

function deleteAllButtonPressed() {

  Chatty.deleteAllMessages();

}

function deleteButtonPressed () {
  
  if (event.target.id.slice(0, 9) === "deleteBtn") {
    var uniqueID = event.target.id.split("").splice(11).join("");
    Chatty.deleteMessageWithId(uniqueID);
  }

}

$('#editModal').on('shown.bs.modal', function () {
    $('#editMessageInput').focus();
});



