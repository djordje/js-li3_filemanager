$(function() {

	module('Queue');

	test('Test initial state', function() {
		equal(Queue.lastAction, '');

		deepEqual(Queue.allowedActions, ['copy', 'move', 'remove']);

		deepEqual(Queue.queued, []);
	});

	test('Test object methods', function() {
		equal(!!Queue.add('copy', 'path'), true);

		equal(!!Queue.add('copy', 'path2'), true);

		equal(Queue.add('copy', 'path'), false);

		equal(Queue.remove('path3'), false);

		equal(Queue.remove('path2'), true);

		equal(!!Queue.add('copy', 'path', true), true);
	});

	test('Test reset method and returning object to initial state', function() {
		Queue.reset();

		equal(Queue.lastAction, '');

		deepEqual(Queue.queued, []);
	});

});