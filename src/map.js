bbounced.map = (function() {
    var lvl = "____//__\\_";
    var segmentSize = 100;
    var heightGap = 50;
    var segments = [];
    return {
	segmentSize: segmentSize,
	segments: segments,
	paint: function(ctx) {
	    var y = 500;
	    var x = 0;
	    ctx.strokeStyle = "black";
	    ctx.fillStyle = "black";
	    var lastX = 0;
	    var lasY = 0;
	    for (var i = 0; i < lvl.length; i++) {
		lastX = x;
		lastY = y;
		var feature = lvl[i];
		var deltaX = 0;
		var deltaY = 0;
		deltaX = segmentSize;
		if (feature === "/")
		    deltaY = -heightGap;
                else if (feature === "\\") 
                    deltaY = heightGap;
		segments.push({x1: x, y1: y, x2: x + deltaX, y2: y + deltaY});
		ctx.beginPath();
		ctx.moveTo(x, y);
		x += deltaX;
		y += deltaY;
		ctx.lineTo(x, y);
		ctx.lineTo(x, bbounced.sceneHeight);
		ctx.lineTo(lastX, bbounced.sceneHeight);
		ctx.lineTo(lastX, lastY);
		 ctx.fill();
	    }
	}
    };
})();