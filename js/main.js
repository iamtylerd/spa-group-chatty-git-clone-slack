Chatty.loadMessages();

document.body.addEventListener("click", deleteButtonPressed);
document.getElementById("submitButton").addEventListener("click", submitButtonPressed);
document.getElementById("deleteAllButton").addEventListener("click", deleteAllButtonPressed);

function submitButtonPressed() {

  var newMessage = document.getElementById("messageInput").value;

  Chatty.writeMessageToDOM(Chatty.getId(), newMessage);

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

