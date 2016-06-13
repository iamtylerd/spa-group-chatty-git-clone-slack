var Messages = (function () {
	var preMessages = [];

	return {
	
		loadMessages: function (callback) {
			var messageLoader = new XMLHttpRequest();

			messageLoader.addEventListener("load", function () {
				var data = JSON.parse(this.responseText);
				console.log(data);
			});
			messageLoader.open("GET", "json/messages.json");
			messageLoader.send();
		}
	};
})();