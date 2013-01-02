var Queue = {

	/**
	 * Last action used in `add` method
	 * @var string
	 */
	lastAction: '',

	/**
	 * Array of allowed actions
	 * @var array
	 */
	allowedActions: ['copy', 'move', 'remove'],

	/**
	 * Array of queued values
	 * @var array
	 */
	queued: [],

	/**
	 * Add path to queue
	 * @param string action One of allowed actions (copy|move|remove)
	 * @param string value Path to queue
	 * @param boolean reset Reset object before adding value to queue
	 */
	add: function(action, value, reset) {
		var exists = false;
		if (!action || !value) {
			return false;
		}
		if (!!reset) {
			this.reset();
		}

		for (var i = this.allowedActions.length - 1; i >= 0; i--) {
			if (this.allowedActions[i] === action) {
				this.lastAction = action;
				for (var n = this.queued.length - 1; n >= 0; n--) {
					if (this.queued[n] === value) {
						exists = true;
					}
				}
			}
		}

		if (!exists) {
			return this.queued.push(value);
		}
		return false;
	},

	/**
	 * Remove value from queue if exists
	 * @param string value Value to search for in queue
	 * @return boolean
	 */
	remove: function(value) {
		if (this.lastAction !== '') {
			var vIndex = $.inArray(value, this.queued);
			if (vIndex >= 0) {
				this.queued.splice(vIndex, 1);
				return true;
			}
		}
		return false;
	},

	/**
	 * Reset object
	 * @return void
	 */
	reset: function() {
		this.lastAction = '';
		this.queued = [];
	}

};