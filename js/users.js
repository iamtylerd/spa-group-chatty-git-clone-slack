var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};

for (var i = 0; i < users.length; i++) {
    document.getElementbyId('#userSelect').innerHTML +=('<option value="' + users.names.value + '">' + users.names[i] + '</option>');
    console.log(users);
  }