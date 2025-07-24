const AnimationController = {
	animations: ['matrix', 'particle', 'circles'],
	currentCleanup: null,

	init() {
		const canvas = document.querySelector('canvas');
		if (!canvas) {
			console.error('Canvas element not found');
			return;
		}

		this.cleanup();

		const selectedAnimation = this.animations[Math.floor(Math.random() * this.animations.length)];
		canvas.id = selectedAnimation;

		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		let cleanupFunction;
		switch (selectedAnimation) {
			case 'matrix':
				cleanupFunction = initMatrixAnimation(canvas);
				break;
			case 'particle':
				cleanupFunction = initParticleAnimation(canvas);
				break;
			case 'circles':
				cleanupFunction = initCirclesAnimation(canvas);
				break;
			default:
				console.error('Unknown animation:', selectedAnimation);
				return;
		}

		this.currentCleanup = cleanupFunction;
	},

	cleanup() {
		if (this.currentCleanup) {
			this.currentCleanup();
			this.currentCleanup = null;
		}
	}
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => AnimationController.init());
} else {
	AnimationController.init();
}

window.addEventListener('beforeunload', () => AnimationController.cleanup());
