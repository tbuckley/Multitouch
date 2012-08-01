var touchstart = "mousedown",
    touchend = "mouseup";
if(document.createTouch) {
	console.log("Touch detected!");
	touchstart = "touchstart";
	touchend = "touchend";
} else {
	console.log("No touch...");
}

function getTouchIds(touches) {
	var ids = [];
	for(var i = 0; i < touches.length; i++) {
		ids.push(touches[i].identifier);
	}
	return ids;
}
function getChangedIds(e) {return getTouchIds(e.changedTouches);}
function getTargetIds(e) {return getTouchIds(e.targetTouches);}
function getTouchIds(e) {return getTouchIds(e.touches);}

function makeLookupTable(arr) {
	var table = {};
	for(var val in arr) {
		table[val] = true;
	}
	return table;
}

function getNewTouches(e) {
	var changed = makeLookupTable(getChangedIds(e));
	var target = getTargetIds(e);
	var newTouches = [];
	for(var id in target) {
		if(id in changed) {
			newTouches.push(id);
		}
	}
	return newTouches;
}

(function($) {
	$.fn.tap = function(handler) {
		return this.each(function() {
			this.addEventListener(touchstart, function(e) {
				console.log(JSON.stringify(getNewTouches(e)));
			}, false);
		});
	};
})(jQuery);

$(document).ready(function() {
	// var body = document.getElementsByTagName('html')[0];
	// var logTouches = function(e) {
	// 	console.log(e);
	// 	e.preventDefault();
	// };
	// body.addEventListener("touchstart", logTouches, false);
	// body.addEventListener("touchend", logTouches, false);
	// body.addEventListener("touchmove", logTouches, false);
	// body.addEventListener("touchenter", logTouches, false);
	// body.addEventListener("touchleave", logTouches, false);
	// body.addEventListener("touchcancel", logTouches, false);
	$("#blue").tap();
});
