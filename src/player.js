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
	    //die
	}
	if (y - radius <= 0) {
	    y = radius + 1;
	    direction *= -1;
	}
	if (speed <= 0) {
	    direction *= -1;
	}
	var segment = bbounced.map.segments[
	    Math.floor(x / bbounced.map.segmentSize)];
	var slope = (segment.y2 - segment.y1) / (segment.x2 - segment.x1);
	//y = mx + b, we already got m (slope), giving a single point on the
	//line we can now calculate the value of b to find if the ball
	//has collided with the ground. n = y - mx
	var b = segment.y1 - slope * segment.x1;
	var yOnRadius = slope * x + b;
	if (y + radius >= yOnRadius) {
	    y = yOnRadius - radius;
	    direction *= -1;
	    speed *= .8
	    if (bbounced.keyboard.isUp())
		speed += 14;
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