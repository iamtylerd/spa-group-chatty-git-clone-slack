var Chatty = (function () {
  
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
          // var currentMessage = {
          //   "message": listOfMessages[i].Message,
          //   "user": listOfMessages[i].User
          // };

          // Add message to private array
          Chatty.messages.push(currentMessage);
          // Get unique ID
          var currentMessageId = Chatty.getId();
          // Write message to DOM
          Chatty.writeMessageToDOM(currentMessageId, currentMessage);
        }

      });

      messageLoader.open("GET", "json/messages.json");
      //messageLoader.open("GET", "json/messages2.json");
      messageLoader.send();
    },

    getId: function() {
      Chatty.idCounter += 1;
      return Chatty.idCounter;
    },

    idCounter: 0,

    //Array holding loaded and/or user messages
    messages: [],

  
  }

})();
