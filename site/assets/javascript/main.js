MainApp = {
	init: function () {
		this.handleScrollEvent();
		this.renderMap();
		this.lockScreen();
		// Todo - work in progress
		// this.handleSoftKeyboard();
	},

	handleScrollEvent: function (event) {
		$('.icon--slide-down, .icon--slide-down--dark').click(function (event) {
			event.preventDefault();
			$(event.target.getAttribute('href')).scrollIntoView(1000);
		});
	},

	renderMap: function () {
		window.initMap = function () {
		  // Create a map object and specify the DOM element for display.
			var map = new google.maps.Map(document.getElementById('map-container'), {
				center: { lat: 51.5243345, lng: -0.0758029 },
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: false,
				scaleControl: false,
				draggable: false,
				zoom: 16
			});
			var contentString = '<div class="map-information-box"><p>Geek Label</p>' +
				'<p>4th Floor</p>' + '<p>27 - 33 Bethnal Green Road</p>' +
				'<p>Shoreditch</p>' + '<p>London</p>' + '<p>E1 GLA</p></div>';

			var infowindow = new google.maps.InfoWindow({
				content: contentString,
				pixelOffset: new google.maps.Size(150, 100)
			});

			var marker = new google.maps.Marker({
				position: { lat: 51.5243345, lng: -0.0758029 },
				map: map,
				title: 'Geek Label'
			});
			infowindow.open(map, marker);
		};
	},

	lockScreen: function () {
		try {
			if (screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation) {
				screen.orientation.lock('portrait');
			}
		} catch (e) {
			console.log('Screen can not be locked!!');
		}
	},

	/*
		WIP - Handle viewport height when soft keyboard is opened on mobile
	*/
	handleSoftKeyboard: function () {
		var height = $('.section-view').height();
		$('input, textarea').focus(function () {
			var heightChange = height - $('.section-view').height();
			if (heightChange) {
				$('.section-view').height(height + heightChange);
				$(this).parent().scrollIntoView();
			}
		}).blur(function () {
			if (!$('input:active, textarea:active').length) {
				$('.section-view').height('');
				$(this).parent().scrollIntoView();
			}
		});
	}
}

$(function () {
	MainApp.init();
});