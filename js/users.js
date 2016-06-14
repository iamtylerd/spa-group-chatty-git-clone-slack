var Chatty = (function (Chatty) {


var users = {
  names: ["","Create New", "Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};

Chatty.selectedUser = null;

Chatty.populateUsers = function () {
    var selectElement = document.getElementById('userSelect');
    selectElement.innerHTML = "";

  for (var i = 0; i < users.names.length; i++) {
    var newOption = document.createElement("option");
    newOption.text = users.names[i];
    selectElement.appendChild(newOption);
  }

};

Chatty.getUserValue = function() {

  var selectedUser = document.getElementById("userSelect");

	if (selectedUser.value === "Create New") {
		$('#addUserModal').modal('show');
	} else {
  	Chatty.selectedUser = selectedUser.value;
	}

};


Chatty.pushNewName = function () {
	users.names.push(newNameInput.value);
	Chatty.populateUsers();
	$('#addUserModal').modal('hide');
};


return Chatty;
})(Chatty || {});