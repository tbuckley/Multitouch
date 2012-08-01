$(document).ready(function() {
	var body = document.getElementsByTagName('body')[0];
	body.addEventListener("touchStart", function(e) {
		body.text(JSON.stringify(e));
	});
});