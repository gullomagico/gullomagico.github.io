function initMatrixAnimation(canvas, config) {
	config = config || {};
	var ctx = canvas.getContext('2d');
	var fontSize = 14;

	var isLowPower = config.isLowPower || false;
	var reducedMotion = config.reducedMotion || false;

	var useGlow = !isLowPower;
	var targetInterval = isLowPower ? 100 : 50;

	var canvasWidth, canvasHeight, columns, drops, speeds;

	function initCanvas() {
		canvasWidth = window.innerWidth;
		canvasHeight = window.innerHeight;
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		columns = Math.floor(canvasWidth / fontSize);

		drops = [];
		speeds = [];
		for (var i = 0; i < columns; i++) {
			drops[i] = Math.random() * -50;
			speeds[i] = 0.3 + Math.random() * 0.8;
		}

		ctx.font = fontSize + 'px monospace';
		ctx.textBaseline = 'top';
	}

	initCanvas();

	var chars = [];
	for (var i = 0x30A0; i <= 0x30FF; i++) chars.push(String.fromCharCode(i));
	for (var i = 33; i <= 126; i++) chars.push(String.fromCharCode(i));

	function draw() {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);

		// Set glow once outside the loop instead of per-character
		if (useGlow) {
			ctx.shadowColor = '#00ff41';
			ctx.shadowBlur = 12;
		}
		ctx.fillStyle = '#22c55e';

		for (var i = 0; i < drops.length; i++) {
			var char = chars[Math.floor(Math.random() * chars.length)];
			var x = i * fontSize;
			var y = Math.floor(drops[i]) * fontSize;

			ctx.fillText(char, x, y);

			drops[i] += speeds[i];
			if (drops[i] * fontSize > canvasHeight && Math.random() > 0.975) {
				drops[i] = Math.random() * -30;
				speeds[i] = 0.3 + Math.random() * 0.8;
			}
		}

		if (useGlow) {
			ctx.shadowBlur = 0;
		}
	}

	var animationId;
	var lastTime = 0;

	function animate(currentTime) {
		if (currentTime - lastTime >= targetInterval) {
			draw();
			lastTime = currentTime;
		}
		animationId = requestAnimationFrame(animate);
	}

	if (reducedMotion) {
		// Draw a few static frames to fill the screen, then stop
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);
		for (var f = 0; f < 60; f++) draw();
	} else {
		animationId = requestAnimationFrame(animate);
	}

	var resizeTimeout;
	function resizeHandler() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			initCanvas();
			ctx.fillStyle = '#000';
			ctx.fillRect(0, 0, canvasWidth, canvasHeight);
			if (reducedMotion) {
				for (var f = 0; f < 60; f++) draw();
			}
		}, 100);
	}
	window.addEventListener('resize', resizeHandler);

	return function cleanup() {
		if (animationId) cancelAnimationFrame(animationId);
		window.removeEventListener('resize', resizeHandler);
		clearTimeout(resizeTimeout);
	};
}
