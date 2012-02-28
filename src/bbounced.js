var bbounced = (function () {
    var canvas;
    var ctx;
    var sceneWidth = 1000;
    var sceneHeight = 810;
    return {
	init: function(cv) {
	    canvas = cv;
	    ctx = canvas.getContext("2d");
	    ctx.lindeWidth = 1;
	    ctx.fillStyle = "black";
	    ctx.fillRect(0, 0, sceneWidth, sceneHeight);
	}
    };
})();