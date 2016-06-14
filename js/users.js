var Chatty = (function (Chatty) {


var users = {
  names: ["Create New", "Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};

Chatty.selectedUser = null;

Chatty.populateUsers = function () {
    var selectElement = document.getElementById('userSelect');
    selectElement.innerHTML = "";

    var selectUserDefault = document.createElement("option");
    selectUserDefault.value = "none";
    selectUserDefault.innerHTML = "Select a name";
    selectUserDefault.disabled = true;
    selectUserDefault.selected = true;

    selectElement.appendChild(selectUserDefault);

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

  if (newNameInput.value === "") {
    alert("Please enter a user name");
  } else {
  	users.names.push(newNameInput.value);
  	Chatty.populateUsers();
    document.getElementById("userSelect").value = newNameInput.value;
  	$('#addUserModal').modal('hide');
  }
};


return Chatty;
})(Chatty || {});