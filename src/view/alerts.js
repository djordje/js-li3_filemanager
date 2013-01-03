FileManager.View.Alert = new View(
	'#alerts',
	null,
	function() {
		var output = '<div class="alert">';
			output += '<button type="button" class="close" data-dismiss="alert">×</button>';
			output += this.error;
		output += '</div>';
		return output; 
	}
);