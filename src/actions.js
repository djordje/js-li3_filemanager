FileManager.ls = function(url, save_alerts) {
	$.ajax({
		url: url,
		beforeSend: function() {
			$('body').trigger('loading');
		},
		success: function(data) {
			$('body').trigger('loading');
			if (!save_alerts) {
				save_alerts = false;
			}
			if (!save_alerts) {
				$('.alert').alert('close');
			}
			if (data.data && data.breadcrumb) {
				FileManager.url.set(url);
				FileManager.View.Files.update(data.data);
				FileManager.View.Breadcrumb.update(data.breadcrumb);
			}
		}
	});
};

FileManager.mkdir = function(name) {
	$.ajax({
		type: 'POST',
		url: FileManager.url.params('mkdir', FileManager.url.params()),
		data: {
			new_dir_name: name,
			token: FileManager.token
		}
	}).done(function(response) {
		if (response.regenerate) {
			window.location = FileManager.url.current;
		}
		if (response.success) {
			FileManager.ls(FileManager.url.current);
		} else {
			FileManager.View.Alert.update([response]);
		}
	});
};

FileManager.upload = function(files) {
	var xhr = new XMLHttpRequest(),
	fdata = new FormData();
	fdata.append('token', FileManager.token);

	$.each(files, function(k, v) {
		fdata.append('files[]', v);
	});

	xhr.upload.onprogress = function(e) {
		if (e.lengthComputable) {
			var percentComplete = (e.loaded / e.total) * 100;
			$('#upload-proggres').removeClass('hide').find('.bar').css('width', percentComplete);
		}
	};

	xhr.open('POST', FileManager.url.current, true);
	xhr.onload = function(response) {
		$('#upload-proggres').addClass('hide').find('.bar').css('width', 0);
		
		if (response.regenerate) {
			window.location = FileManager.url.current;
		}
		if (!response.success) {
			FileManager.View.Alert.update(response.errors);
		}
		FileManager.ls(FileManager.url.current, !response.success);
	};
	xhr.send(fdata);
};

FileManager.move = function(paths) {
	$.ajax({
		type: 'POST',
		url: FileManager.url.params('move', FileManager.url.params()),
		data: {
			from: paths,
			token: FileManager.token
		}
	}).done(function(response) {
		if (response.regenerate) {
			window.location = FileManager.url.current;
		}
		if (!response.success) {
			FileManager.View.Alert.update(response.errors);
		}
		FileManager.ls(FileManager.url.current, !response.success);
	});
};

FileManager.copy = function(paths) {
	$.ajax({
		type: 'POST',
		url: FileManager.url.params('copy', FileManager.url.params()),
		data: {
			from: paths,
			token: FileManager.token
		}
	}).done(function(response) {
		if (response.regenerate) {
			window.location = FileManager.url.current;
		}
		if (!response.success) {
			FileManager.View.Alert.update(response.errors);
		}
		FileManager.ls(FileManager.url.current, !response.success);
	});
};

FileManager.remove = function(paths) {
	$.ajax({
		type: 'POST',
		url: FileManager.url.params('remove'),
		data: {
			selected: paths,
			token: FileManager.token
		}
	}).done(function(response) {
		if (response.regenerate) {
			window.location = FileManager.url.current;
		}
		if (!response.success) {
			FileManager.View.Alert.update(response.errors);
		}
		FileManager.ls(FileManager.url.current, !response.success);
	});
};