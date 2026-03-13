var AnimationController = {
	currentCleanup: null,

	getConfig: function() {
		var isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) || window.innerWidth < 768;
		var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		var lowCores = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
		return {
			isMobile: isMobile,
			reducedMotion: reducedMotion,
			isLowPower: isMobile || lowCores,
		};
	},

	init: function() {
		var canvas = document.querySelector('canvas');
		if (!canvas) {
			console.error('Canvas element not found');
			return;
		}

		this.cleanup();

		var config = this.getConfig();
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.currentCleanup = initMatrixAnimation(canvas, config);
	},

	cleanup: function() {
		if (this.currentCleanup) {
			this.currentCleanup();
			this.currentCleanup = null;
		}
	}
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', function() { AnimationController.init(); });
} else {
	AnimationController.init();
}

window.addEventListener('beforeunload', function() { AnimationController.cleanup(); });
