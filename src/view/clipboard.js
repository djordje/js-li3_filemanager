FileManager.View.Clipboard = new View(
	'#clipboard',
	function() {
		return FileManager.queue.queued;
	},
	function() {
		var tmpl = '<div class="clearfix">';
			tmpl += '<p class="pull-left">' + this + '</p>';
			tmpl += '<button type="button" class="btn btn-mini btn-warning pull-right" title="Remove from clipboard" data-action="clipboard-remove" data-path="' + this + '"><i class="icon-trash icon-white"></i></button>';
		tmpl += '</div>';
		return tmpl;
	}
);