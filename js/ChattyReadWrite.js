var Chatty = (function(Chatty) {

  Chatty.writeMessageToDOM = function(id, message) {
    
      // Get messagesContainer
      var messagesContainer = document.getElementById("messagesContainer");

      // Create a newMessage div
      var newMessage = document.createElement("div");

      // Timestamp
      var time = new Date();
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var curYear = time.getFullYear();
      var curMonth = months[time.getMonth()];
      var curDay = time.getDay();
      var curHour = time.getHours();
      var curMinute = time.getMinutes();
      var curSeconds = time.getSeconds();
      var curMillseconds = time.getMilliseconds();
      var suffix = null;
      // Determine AM or PM suffix based on the hour
      suffix = ( curHour < 12 ) ? "AM" : "PM";
      // Convert hour from military time
      curHour = ( curHour < 12 ) ? curHour : curHour - 12;
      // If hour is 0, set it to 12
      curHour = curHour || 12;
      // If seconds and minutes are less than 10, add a zero
      if ( curMinute < 10 ) {
        curMinute = "0" + curMinute;
      }
      if ( curSeconds < 10) {
        curSeconds = "0" + curSeconds;
      }
      
      var timestamp = `${curMonth} ${curDay}, ${curYear} at ${curHour}:${curMinute}:${curSeconds}:${curMillseconds} ${suffix}`;

      // // Add to new message
      // newMessage.innerHTML = `<div id="message--${id}" class="message">
      //                           <p class="messageText">${message}</p>
      //                           <h6 class="messageID">${id}.</h6>
      //                           <h6 class="userID">Sent by User on</h6>
      //                           <h6 class="timestamp">${timestamp}</h6>
      //                           <button id="deleteBtn--${id}" class="deleteButton">Delete Message</button>
      //                         </div>`;


      newMessage.innerHTML = `<div id="message--${id}" class="message">
                                <p class="messageText">${message.message}</p>
                                <h6 class="messageID">${id}.</h6>
                                <h6 class="userID">Sent by ${message.user} on</h6>
                                <h6 class="timestamp">${timestamp}</h6>
                                <button id="deleteBtn--${id}" class="deleteButton">Delete Message</button>
                              </div>`;


      // Append newMessage to messagesContainer
      messagesContainer.appendChild(newMessage);


  };

  Chatty.readAllMessages = function() {

  };

  Chatty.deleteMessageWithId = function(id) {

    var messageId = "message--" + id;
    var messageToDelete = document.getElementById(messageId);
    var container = document.getElementById("messagesContainer");
    messageToDelete.parentNode.removeChild(messageToDelete);   
  };

  Chatty.deleteAllMessages = function() {

    document.getElementById("messagesContainer").innerHTML = "";

  };


  return Chatty;

})(Chatty || {});
