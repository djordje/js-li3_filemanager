/**
 * @param string selector jQuery selector (eg. '#some-id'). This will setup rendered template destination.
 * @param object data Data array used by mustache to render template
 * @param function element This is Mustache function that will be used for each object in data array
 * @param string template Mustache template
 * @return void
 */
var View = function(selector, data, element, template) {
	this.selector = selector || '';
	this.data     = data || null;
	this.element  = element || function() { return ''; };
	this.template = template || '{{#data}}{{{element}}}{{/data}}';
};

View.prototype = {

	/**
	 * Update data and rerender view
	 * @param object data Data array used by mustache to render template
	 * @return void
	 */
	update: function(data) {
		this.data = data || null;
		this.render();
	},

	/**
	 * Render template with passed data
	 * @return void
	 */
	render: function() {
		if (typeof this.selector === 'string') {
			this.selector = $(this.selector);
		}
		this.selector.empty().append(Mustache.render(this.template, this));
	}

};