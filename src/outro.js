	FileManager.queue = Queue;

	/**
	 * Bootstrap
	 */
	FileManager.init = function(url, data, token) {
		this.url = new Url(url.lib, url.current);
		this.token = token;
		this.View.Files.data = data.data;
		this.View.Breadcrumb.data = data.breadcrumb;
		this.attachEvents();
		this.View.Files.render();
		this.View.Breadcrumb.render();
	};

})(FileManager);