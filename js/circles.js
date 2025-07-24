function initCirclesAnimation(canvas) {
	const ctx = canvas.getContext('2d');
	let animationId;

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.overflow = 'hidden';

	const circles = [];
	const config = {
		maxCircles: 5,
		spawnChance: 0.02,
		padding: 20,
	};

	function createCircle() {
		return {
			x: Math.random() * (canvas.width - config.padding * 2) + config.padding,
			y: Math.random() * (canvas.height - config.padding * 2) + config.padding,
			radius: 1,
			speed: 2 + Math.random(),
			opacity: 1,
		};
	}

	for (let i = 0; i < config.maxCircles; i++) {
		circles.push(createCircle());
	}

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (circles.length < config.maxCircles && Math.random() < config.spawnChance) {
			circles.push(createCircle());
		}

		circles.forEach(circle => {
			ctx.beginPath();
			ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
			ctx.strokeStyle = `rgba(0, 170, 0, ${circle.opacity})`;
			ctx.stroke();

			circle.radius += circle.speed;

			if (circle.radius > Math.max(canvas.width, canvas.height)) {
				circle.radius = 1;
			}
		});
	}

	function animate() {
		draw();
		animationId = requestAnimationFrame(animate);
	}

	animate();
	
	return function cleanup() {
		if (animationId) cancelAnimationFrame(animationId);
	};
}
