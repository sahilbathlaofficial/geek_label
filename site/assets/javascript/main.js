MainApp = {
	handleScrollEvent: function (event) {
		$('.icon--slide-down, .icon--slide-down--dark').click(function (event) {
			event.preventDefault();
			$(event.target.getAttribute('href')).scrollIntoView(1000);
		});
	}
}

$(function () {
	MainApp.handleScrollEvent();
});