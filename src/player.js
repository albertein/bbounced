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
    
    var falling = true;
    var ticksFalling = 0;
    var direction = 1;
    var speed = 0;

    var move = function() {
	speed += 9.8 / 8 * (falling ? 1 : -1);
	console.log(speed);
	if (speed <= 0) {
	    falling = true;
	    direction *= -1;
	}
	y += speed * direction;
    };
    var check = function() {
	if (y + radius >= bbounced.sceneHeight) {
	    y = bbounced.sceneHeight - radius - 1;
	    direction *= -1;
	    speed *= .8
	    falling = false;
	}
	if (y - radius <= 0) {
	    y = radius + 1;
	    direction *= -1;
	}
    };
    var tick = function(ctx) {
	move();
	check();
	paint(ctx);
    };
    return {
	tick: tick
    }
})();