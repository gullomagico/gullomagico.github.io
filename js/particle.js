function initParticleAnimation(canvas) {
	const ctx = canvas.getContext('2d', { alpha: false });
	let req, ballCount, range;
	let balls = [];
	let lines = [];
	let cH, cW = 0;
	const ballDensity = 0.5;
	const rangeFactor = 1;
	const maxRange = 300;
	const maxBalls = 80;
	let resizeHandler;

	function init() {
		ctx.canvas.width = Math.min(window.innerWidth, screen.width);
		ctx.canvas.height = Math.min(window.innerHeight, screen.height);

		cH = ctx.canvas.height;
		cW = ctx.canvas.width;

		ballCount = Math.min(Math.floor((cW * cH) / 10000) * ballDensity, maxBalls);
		range = Math.max((Math.sqrt(cW * cW + cH * cH) / 100) * rangeFactor, maxRange);

		for (let i = 0; i < ballCount; i++) {
			balls.push(new Ball(
				getRandomInt(10, cW - 10),
				getRandomInt(10, cH - 10),
				Math.random() * 2 - 1,
				Math.random() * 2 - 1
			));
		}

		for (let i = 0; i < balls.length; i++) {
			for (let j = i + 1; j < balls.length; j++) {
				lines.push(new Line(balls[i], balls[j]));
			}
		}
		animate();
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
	}
	
	function reset() {
		if (req) cancelAnimationFrame(req);
		balls = [];
		lines = [];
		init();
	}
	
	resizeHandler = reset;
	window.addEventListener('resize', resizeHandler);

	class Ball {
		constructor(x, y, vx, vy) {
			this.x = x;
			this.y = y;
			this.vx = vx;
			this.vy = vy;
		}
		
		update() {
			if (this.x + this.vx >= cW || this.x < 0) this.vx = -this.vx;
			if (this.y >= cH || this.y < 0) this.vy = -this.vy;
			this.x += this.vx;
			this.y += this.vy;
		}
	}
	class Line {
		constructor(a, b) {
			this.a = a;
			this.b = b;
		}
		
		draw() {
			const ax = Math.floor(this.a.x);
			const ay = Math.floor(this.a.y);
			const bx = Math.floor(this.b.x);
			const by = Math.floor(this.b.y);
			const len = Math.abs(bx - ax) + Math.abs(by - ay);
			
			if (len < range) {
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.strokeStyle = `rgba(0,255,0,${1.0 - len / range})`;
				ctx.moveTo(ax, ay);
				ctx.lineTo(bx, by);
				ctx.stroke();
			}
		}
	}

	function animate() {
		ctx.fillStyle = 'black';
		ctx.fillRect(0, 0, cW, cH);

		lines.forEach(line => line.draw());
		balls.forEach(ball => ball.update());

		req = requestAnimationFrame(animate);
	}

	init();
	
	return function cleanup() {
		if (req) cancelAnimationFrame(req);
		if (resizeHandler) window.removeEventListener('resize', resizeHandler);
	};
}
