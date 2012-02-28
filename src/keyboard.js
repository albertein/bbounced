bbounced.keyboard = (function() {
    var keys = {};
    var KEY_RIGHT = 39;
    var KEY_LEFT = 37;
    var leftPressed = false;
    var rigthPressed = false;
    document.addEventListener("keydown", function(e) {
	keys[e.keyCode] = true;
    });
    document.addEventListener("keyup", function(e) {
	keys[e.keyCode] = false;
    });
    return {
	leftPressed: function() { return keys[KEY_LEFT]; },
	rightPressed: function() { return keys[KEY_RIGHT]; }
    };
})();