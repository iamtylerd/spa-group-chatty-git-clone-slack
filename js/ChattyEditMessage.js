var Chatty = (function(Chatty){

  Chatty.selectedMessage = null;

  Chatty.addMessageStyling = function() {

    if (Chatty.selectedMessage !== null) {
      Chatty.selectedMessage.classList.add("selected");
    }

  };

  Chatty.removeMessageStyling = function() {

    if (Chatty.selectedMessage !== null) {
      Chatty.selectedMessage.classList.remove("selected");
      Chatty.selectedMessage = null;
    }

  };

  Chatty.messageSelected = function() {

    var clickedItem = event.target;

    // Check if message is selected
    if (clickedItem.parentNode.classList[0] === "message") {
      // Make sure delete button was not pressed
      if (clickedItem.classList[0] !== "deleteButton") {
        
        Chatty.removeMessageStyling();
        Chatty.selectedMessage = clickedItem.parentNode;
        Chatty.addMessageStyling();
      } 

    } else if (clickedItem.classList[0] === "message") {
      Chatty.removeMessageStyling();
      Chatty.selectedMessage = clickedItem;
      Chatty.addMessageStyling();
    }

  };

  Chatty.populateEditMessage = function() {
    var editMessageInput = document.getElementById("editMessageInput");

   editMessageInput.value = Chatty.selectedMessage.querySelector("p").innerHTML;

  };

  Chatty.editMessageButtonPressed = function() {
    event.preventDefault();
    
    if (Chatty.selectedMessage === null) {
      alert("Please select a message to edit");
    } else {
      Chatty.populateEditMessage();
      $('#editModal').modal('show');
    }

  };

  Chatty.editMessage = function(newMessage) {
    Chatty.selectedMessage.querySelector("p").innerHTML = newMessage;
  };

  Chatty.editSubmitButtonPressed = function() {

    // Get editMessageInput element
    var editMessageInput = document.getElementById("editMessageInput");

    // Get current message if not blank
    if (editMessageInput.value === "") {
      alert("Please enter a message");
    } else {
      var newMessage = editMessageInput.value;
      Chatty.editMessage(newMessage);
      Chatty.removeMessageStyling();
      $('#editModal').modal('hide');
    }

  };


  return Chatty;

})(Chatty || {});