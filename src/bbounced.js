var bbounced = (function () {
    var canvas;
    var ctx;
    var sceneWidth = 1000;
    var sceneHeight = 600;
    var fps = 60;
    var lastTick = 0;
    var msTick = 1000 / fps;
    var fillBackground = function () {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, sceneWidth, sceneHeight);
    };
    var tick = function() {
	fillBackground();
	bbounced.player.tick(ctx);
	now = new Date().getTime();
	if (lastTick !== 0) {
	    var currentFps = Math.floor(1000 / (now - lastTick));
	    ctx.font = "20pt Arial"
	    ctx.fillText(currentFps + "fps", 900, 40);
	}
	lastTick = now;
	setTimeout(tick, msTick);
    };
    return {
	init: function(cv) {
	    canvas = cv;
	    ctx = canvas.getContext("2d");
	    ctx.lindeWidth = 1;
	    tick();
	},
	sceneWidth: sceneWidth,
	sceneHeight: sceneHeight
    };
})();