var Url = function(lib, current) {
	this.lib = this.filter(lib) || '';
	this.current = this.filter(current) || '';
};

Url.prototype = {
	constructor: Url,

	/**
	 * Trim `/` from the start and the end of the string
	 * @param string string
	 * @return string
	 */
	trim: function(string) {
		while (string.charAt(0) === '/') {
			string = string.substr(1);
		}
		while (string.charAt(string.length - 1) === '/') {
			string = string.substr(0, string.length - 1);
		}
		return string;
	},

	/**
	 * Filter input string or array with trim method and format proper url string
	 * Example:
	 *  filter(['http://localhost///', 'test', ['///node', '1']])
	 *  return `'http://localhost/test/node/1'`
	 * @param mixed (string|array) input
	 * @return string
	 */
	filter: function(input) {
		switch (typeof input) {
			case 'string':
				return this.trim(input);
			case 'object':
				var filtered = [];
				var that = this;
				$.each(input, function(k, v) {
					filtered[k] = that.filter(v);
				});
				return filtered.join('/');
		}
	},

	/**
	 * Set `this.current` url to new value
	 * @param mixed (string|array) value
	 * @see `this.filter`
	 * @return string value of `this.current`
	 */
	set: function(value) {
		return this.current = this.filter(value);
	},

	/**
	 * Set or get params from current string
	 * Example:
	 *  `this.lib = 'http://localhost/dev'`
	 *  `this.current = 'http://localhost/dev/test'`
	 *  params()
	 *  return `'test'`
	 *  params('test-2')
	 *  return `this.lib + '/test-2'`
	 */
	params: function() {
		var argsLength = arguments.length,
			args = [];
		if (argsLength < 1) {
			return this.trim(this.current.substring(this.current.length, this.lib.length));
		}
		for (var i = argsLength; i >= 0; i--) {
			args[i] = this.filter(arguments[i]);
		}
		return this.lib + '/' + escape(this.trim(args.join('/')));
	}
};