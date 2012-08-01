$(document).ready(function() {
	var body = document.getElementsByTagName('html')[0];
	var logTouches = function(e) {
		console.log(e);
		e.preventDefault();
	};
	body.addEventListener("touchstart", logTouches, false);
	body.addEventListener("touchend", logTouches, false);
	body.addEventListener("touchmove", logTouches, false);
	body.addEventListener("touchenter", logTouches, false);
	body.addEventListener("touchleave", logTouches, false);
	body.addEventListener("touchcancel", logTouches, false);
});
