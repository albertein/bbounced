var bbounced = (function () {
    var canvas;
    var ctx;
    var sceneWidth = 1000;
    var sceneHeight = 600;
    var fps = 60;
    var lastTick = 0;
    var msTick = 1000 / fps;
    var fillBackground = function () {
	var grad = ctx.createLinearGradient(0, 0, 0, sceneHeight);
	grad.addColorStop(0, "rgb(155,188,247)");
	grad.addColorStop(1, "white");
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, sceneWidth, sceneHeight);
    };
    var tick = function() {
	fillBackground();
	bbounced.map.paint(ctx);
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