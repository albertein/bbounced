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
    
    var direction = 1;
    var speed = 0;
    var walkSpeed = 5;
    var runSpeed = 10;

    var move = function() {
	speed += 9.8 / 8 * direction;
	y += speed * direction;
	if (bbounced.keyboard.isLeft() || bbounced.keyboard.isRight()) {
	    var deltaX = 0;
	    if (bbounced.keyboard.isRunning() )
		deltaX = runSpeed;
	    else
		deltaX = walkSpeed;
	    if (bbounced.keyboard.isLeft())
		deltaX *= -1;
	    x += deltaX;
	}
    };
    var check = function() {
	if (y + radius >= bbounced.sceneHeight) {
	    y = bbounced.sceneHeight - radius - 1;
	    direction *= -1;
	    speed *= .8
	    if (bbounced.keyboard.isUp())
		speed += 14;
	}
	if (y - radius <= 0) {
	    y = radius + 1;
	    direction *= -1;
	}
	if (speed <= 0) {
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