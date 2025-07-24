function initMatrixAnimation(canvas) {
	const ctx = canvas.getContext('2d');
	const fontSize = 10;
	
	let canvasWidth = window.innerWidth;
	let canvasHeight = window.innerHeight;
	let columns = Math.floor(canvasWidth / fontSize);
	let drops = [];

	function initCanvas() {
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		canvas.style.overflow = 'hidden';
		ctx.font = `${fontSize}px monospace`;
		ctx.textBaseline = 'top';
		
		drops = [];
		for (let i = 0; i < columns; i++) {
			drops[i] = Math.floor(canvasHeight / fontSize);
		}
	}
	
	initCanvas();

	const matrixChars = [];
	for (let i = 33; i <= 126; i++) {
		matrixChars.push(String.fromCharCode(i));
	}
	const katakanaChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
	for (let i = 0; i < katakanaChars.length; i++) {
		matrixChars.push(katakanaChars[i]);
	}

	function draw() {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);

		ctx.fillStyle = '#00aa00';

		for (let i = 0; i < drops.length; i++) {
			const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);
			drops[i]++;
			if (drops[i] * fontSize > canvasHeight && Math.random() > 0.975) {
				drops[i] = 0;
			}
		}
	}

	let animationId;
	let lastTime = 0;
	const targetInterval = 70;

	function animate(currentTime) {
		if (currentTime - lastTime >= targetInterval) {
			draw();
			lastTime = currentTime;
		}
		animationId = requestAnimationFrame(animate);
	}

	animationId = requestAnimationFrame(animate);

	let resizeTimeout;
	let resizeHandler;
	
	function handleResize() {
		const newWidth = window.innerWidth;
		const newHeight = window.innerHeight;
		const newColumns = Math.floor(newWidth / fontSize);
		const oldColumns = columns;
		
		canvasWidth = newWidth;
		canvasHeight = newHeight;
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		ctx.font = `${fontSize}px monospace`;
		ctx.textBaseline = 'top';
		
		columns = newColumns;
		
		if (newColumns > oldColumns) {
			for (let i = oldColumns; i < newColumns; i++) {
				drops[i] = Math.floor(Math.random() * (canvasHeight / fontSize));
			}
		} else if (newColumns < oldColumns) {
			drops = drops.slice(0, newColumns);
		}
		
		ctx.fillStyle = 'rgba(0, 0, 0, 1)';
		ctx.fillRect(0, 0, canvasWidth, canvasHeight);
	}
	
	function debouncedResize() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(handleResize, 100);
	}
	
	resizeHandler = debouncedResize;
	window.addEventListener('resize', resizeHandler);

	return function cleanup() {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
		if (resizeHandler) {
			window.removeEventListener('resize', resizeHandler);
		}
		if (resizeTimeout) {
			clearTimeout(resizeTimeout);
		}
	};
}
