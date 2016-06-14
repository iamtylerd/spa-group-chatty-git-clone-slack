var Chatty = (function (Chatty) {


var users = {
  names: ["","Create New", "Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};
var selectedUserValue = "";

Chatty.populateUsers = function () {
    var selectElement = document.getElementById('userSelect');
    selectElement.innerHTML = "";

for (var i = 0; i < users.names.length; i++) {
    var newOption = document.createElement("option");
    newOption.text = users.names[i];
    selectElement.appendChild(newOption);
  }
};

var selectedUser = document.getElementById("userSelect")
selectedUser.addEventListener("change", getUserValue);
	function getUserValue () {
	if (selectedUser.value === "Create New") {
		$('#addUserModal').modal('show');
	}
	else {
	selectedUserValue = selectedUser.value;
	console.log(selectedUserValue);
	}
};

var newNameInput = document.getElementById("addNameInput");
var newNameValue = newNameInput.value;
var newNameButton = document.getElementById("nameSubmit");

newNameButton.addEventListener("click", pushNewName)

function pushNewName () {
	users.names.push(newNameInput.value);
	Chatty.populateUsers();
	$('#addUserModal').modal('hide');
};





return Chatty;
})(Chatty || {});