FileManager.View.Breadcrumb = new View(
	'.breadcrumb',
	null,
	function() {
		if (this.url) {
			return '<a href="' + this.url + '" data-action="fetch">' + this[0] + '</a><span class="divider">/</span>';
		} else {
			return this[0];
		}
	},
	'<li><i class="icon-folder-close"></i><span class="divider">:</span></li>{{#data}}<li>{{{element}}}</li>{{/data}}'
);