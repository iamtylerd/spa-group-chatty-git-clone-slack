var Chatty = (function () {
  
  var messages = [];
  var idCounter = 0;

  return {
  
    loadMessages: function (callback) {

      var messageLoader = new XMLHttpRequest();

      messageLoader.addEventListener("load", function () {
        
        var data = JSON.parse(this.responseText);

        var listOfMessages = data.Messages;

        // Add each message to array
        for (let i = 0; i < listOfMessages.length; i++) {
          // Get current message being looked at
          var currentMessage = listOfMessages[i].Message;
          // Add message to private array
          messages.push(currentMessage);
          // Get unique ID
          var currentMessageId = Chatty.getId();
          // Write message to DOM
          Chatty.writeMessageToDOM(currentMessageId, currentMessage);
        }

      });

      messageLoader.open("GET", "json/messages.json");
      messageLoader.send();
    },

    getId: function() {
      idCounter += 1;
      return idCounter;
    }

  };

})();
