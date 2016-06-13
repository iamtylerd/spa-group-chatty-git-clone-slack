Chatty.loadMessages();

// function deleteMessagePressed() {

//   // Get current message
//   var currentMessage = event.target.parentNode;
  
//   // Remove message
//   document.getElementById("messagesContainer").removeChild(currentMessage);

// }

document.body.addEventListener("click", deleteButtonPressed);

function deleteButtonPressed () {
  
  if (event.target.id.slice(0, 9) === "deleteBtn") {
    var uniqueID = event.target.id.split("").splice(11).join("");
    Chatty.deleteMessageWithId(uniqueID);
  }

}

