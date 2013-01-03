$(function() {

	module('View');

	test('Test initial state', function() {
		var view = new View();

		equal(view.selector, '');

		equal(view.data, null);

		equal(typeof view.element, 'function');

		equal(view.element(), '');

		equal(view.template, '{{#data}}{{{element}}}{{/data}}');
	});

	test('Test constructor', function() {
		var view = new View('#test', [{}], function() { return 'test'; }, '{{#data}}{{/data}}');

		equal(view.selector, '#test');

		deepEqual(view.data, [{}]);

		equal(typeof view.element, 'function');

		equal(view.element(), 'test');

		equal(view.template, '{{#data}}{{/data}}');
	});

	test('Test render', function() {
		var element = function() {
			var output  = '<p>';
				output += '<strong>id:</strong> ' + this.id + ' | ';
				output += '<strong>name:</strong> ' + this.name;
				output += '</p>';
			return output;
		};
		var data = [{id: 1, name: 'test-1'}, {id: 2, name: 'test-2'}];
		var view = new View('#test-view', data, element);
		view.render();

		var expected = "<p><strong>id:</strong> 1 | <strong>name:</strong> test-1</p><p><strong>id:</strong> 2 | <strong>name:</strong> test-2</p>";

		equal($('#test-view').html(), expected);

		view.update([{id: 1, name: 'test-one'}, {id: 2, name: 'test-two'}]);

		expected = "<p><strong>id:</strong> 1 | <strong>name:</strong> test-one</p><p><strong>id:</strong> 2 | <strong>name:</strong> test-two</p>";

		equal($('#test-view').html(), expected);
	});

});