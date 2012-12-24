test('test initial state', function() {
	equal(Queue.lastAction, '', 'There is not lastAction on initialization');
	deepEqual(Queue.allowedActions, ['copy', 'move', 'remove'], 'Enable `copy`, `move` and `remove`');
	deepEqual(Queue.queued, [], 'Queue should be empty on initialization');
});