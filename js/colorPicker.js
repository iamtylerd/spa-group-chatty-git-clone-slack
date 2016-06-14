var Chatty = (function (Chatty) {

var bgPicker = document.getElementById("bgColorPicker");
var textPicker = document.getElementById("textColorPicker");
var saveColor = document.getElementById("saveColorChanges");
var borderColor = document.getElementsByClassName(".selected");


Chatty.changeColors = function () {
 document.getElementById("messagesContainer").style.background = bgPicker.value;
 document.getElementById("messagesContainer").style.color = textPicker.value;
};

saveColor.addEventListener("click", Chatty.changeColors);
return Chatty;
})(Chatty || {});