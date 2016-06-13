var Chatty = (function(Chatty){

  Chatty.writeMessageToDOM = function(id, message) {
    // Get messagesContainer
    var messagesContainer = document.getElementById("messagesContainer");

    // Create a newMessage div
    var newMessage = document.createElement("div");

    // Add to new message
    newMessage.innerHTML = `<p class="messageText">${message}<p>
                            <h6 class="messageID">${id}</h6>
                            <button id="deleteBtn--${id}">Delete Message</button>`;

    // Append newMessage to messagesContainer
    messagesContainer.appendChild(newMessage);

    // Add event listener to newly created delete button
    var buttonId = "delete--" + id; 
    var deleteButton = document.getElementById(buttonId);

    //
    console.log(deleteButton);

  };

  Chatty.readAllMessages = function() {
    // Read all messages
  };

  Chatty.deleteMessageWithId = function(id) {
    


  };

  Chatty.aName = "Chatty";

  return Chatty;

})(Chatty || {});
