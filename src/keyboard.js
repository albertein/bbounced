bbounced.keyboard = (function() {
    var keys = {};
    var KEY_RIGHT = 39;
    var KEY_LEFT = 37;
    var KEY_UP = 38;
    var KEY_RUN = 65;
    var leftPressed = false;
    var rigthPressed = false;
    document.addEventListener("keydown", function(e) {
	console.log(e.keyCode);
	keys[e.keyCode] = true;
    });
    document.addEventListener("keyup", function(e) {
	keys[e.keyCode] = false;
    });
    return {
	isLeft: function() { return keys[KEY_LEFT]; },
	isRight: function() { return keys[KEY_RIGHT]; },
	isUp: function() { return keys[KEY_UP]; },
	isRunning: function() { return keys[KEY_RUN]}
    };
})();