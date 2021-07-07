$(document).ready(function() {
	var app = new Mapp({
		element: '#app',
		presets: {
			latlng: {
				lat: 32,
				lng: 52,
			},
			zoom: 6,
		},
	});

	app.addLayers();

	app.addMarker({
		name: 'basic-marker',
		latlng: {
			lat: 37.375,
			lng: 49.759,
		},
		popup: {
			title: {
				html: 'Basic Marker Title',
			},
			description: {
				html: 'Basic marker description',
			},
			open: true,
		},
	});
});
