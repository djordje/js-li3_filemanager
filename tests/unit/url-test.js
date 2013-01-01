$(function() {

	module('Url');

	var urls = {
		lib: 'http://localhost/dev',
		current: 'http://localhost/dev/request'
	};

	test('Test empty initialization', function() {
		var url = new Url();

		deepEqual([url.lib, url.current], ['', '']);
	});

	test('Test real initialization', function() {
		var url = new Url(urls.lib, urls.current);

		deepEqual([url.lib, url.current], [urls.lib, urls.current]);
	});

	test('Test object methods', function() {
		var url = new Url(urls.lib, urls.current);

		equal(url.trim('//test/slash/trim///'), 'test/slash/trim');

		equal(url.filter('//test/slash/trim///'), 'test/slash/trim');

		equal(url.filter(['//test/slash/trim///']), 'test/slash/trim');

		equal(url.filter(['//test/', 'slash', '/trim///']), 'test/slash/trim');

		equal(url.params(), 'request');

		equal(url.params('test', 'request'), url.lib + '/test/request');

		equal(url.params('test/request'), url.lib + '/test/request');

		equal(url.set('http://localhost/dev/request/something'), 'http://localhost/dev/request/something');

		equal(url.set('http://localhost/dev/request/something///'), 'http://localhost/dev/request/something');

		equal(url.current, 'http://localhost/dev/request/something');
	});

});