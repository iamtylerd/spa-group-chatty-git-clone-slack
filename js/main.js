Chatty.loadMessages();
Chatty.populateUsers();

document.body.addEventListener("click", deleteButtonPressed);
document.getElementById("submitButton").addEventListener("click", submitButtonPressed);
document.getElementById("deleteAllButton").addEventListener("click", deleteAllButtonPressed);
document.getElementById("messageInput").addEventListener("keypress", enterButtonPressed);

var disabledAttribute = document.getElementById("deleteAllButton");

function submitButtonPressed() {

  if (document.getElementById("messageInput").value === "" && document.getElementById("userSelect").value === "none") {
    alert("Please enter a message and select a user name");
  } else if (document.getElementById("messageInput").value === "") {
    alert("Please enter a message to add");
  } else if (document.getElementById("userSelect").value === "none") {
    alert("Please select a user name");
  } else {

    var newMessage = {
      "message": document.getElementById("messageInput").value,
      "user": document.getElementById("userSelect").value
    };

    Chatty.messages.push(newMessage);

    Chatty.writeMessageToDOM(Chatty.getId(), newMessage);

    document.getElementById("messageInput").value = "";

    //Removing disabled attribute from delete button
    disabledAttribute.removeAttribute("disabled");

    document.getElementById("userSelect").value = "none";

    //Message limit functionality
    var parentNode = document.getElementById("messagesContainer");
        if (Chatty.messages.length > 20) {
          parentNode.removeChild(parentNode.firstChild);
          Chatty.messages.pop();
        }
  }
}

function enterButtonPressed(event) {

   if(event.keyCode == 13){
     
    event.preventDefault();

    if (document.getElementById("messageInput").value === "" && document.getElementById("userSelect").value === "none") {
      alert("Please enter a message and select a user name");
    } else if (document.getElementById("messageInput").value === "") {
      alert("Please enter a message to add");
    } else if (document.getElementById("userSelect").value === "none") {
      alert("Please select a user name");
    } else {

    var newMessage = {
      "message": document.getElementById("messageInput").value,
      "user": document.getElementById("userSelect").value
    };

    Chatty.messages.push(newMessage);

    Chatty.writeMessageToDOM(Chatty.getId(), newMessage);

    document.getElementById("messageInput").value = "";

    //Removing disabled attribute from delete button
    disabledAttribute.removeAttribute("disabled");

    document.getElementById("userSelect").value = "none";

    //Message limit functionality
    var parentNode = document.getElementById("messagesContainer");
      if (Chatty.messages.length > 20) {
        parentNode.removeChild(parentNode.firstChild);
        Chatty.messages.pop();
    }
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



