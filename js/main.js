Chatty.loadMessages();
Chatty.populateUsers();

document.body.addEventListener("click", deleteButtonPressed);
document.getElementById("submitButton").addEventListener("click", submitButtonPressed);
document.getElementById("deleteAllButton").addEventListener("click", deleteAllButtonPressed);
document.getElementById("messageInput").addEventListener("keypress", enterButtonPressed);

var disabledAttribute = document.getElementById("deleteAllButton");

function submitButtonPressed() {

  var newMessage = document.getElementById("messageInput").value;

  Chatty.messages.push(newMessage);

  Chatty.writeMessageToDOM(Chatty.getId(), newMessage);

  document.getElementById("messageInput").value = "";

  //Removing disabled attribute from delete button
  disabledAttribute.removeAttribute("disabled");



  //Message limit functionality
  var parentNode = document.getElementById("messagesContainer");
      if (Chatty.messages.length > 20) {
        parentNode.removeChild(parentNode.firstChild);
        Chatty.messages.pop();
      }

}

function enterButtonPressed(event) {

   if(event.keyCode == 13){
     
    event.preventDefault();

    var newMessage = document.getElementById("messageInput").value;

    Chatty.messages.push(newMessage);

    Chatty.writeMessageToDOM(Chatty.getId(), newMessage);

    document.getElementById("messageInput").value = "";

    //Removing disabled attribute from delete button
    disabledAttribute.removeAttribute("disabled");

    //Message limit functionality
    var parentNode = document.getElementById("messagesContainer");
      if (Chatty.messages.length > 20) {
        parentNode.removeChild(parentNode.firstChild);
        Chatty.messages.pop();
      }
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



