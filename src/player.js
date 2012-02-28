bbounced.player = (function() {
    var x = 100;
    var y = 100;
    var radius = 40;
    var paint = function(ctx) {
	ctx.fillStyle = "blue";
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
    };
    var tick = function(ctx) {
	paint(ctx);
    };
    return {
	tick: tick
    }
})();