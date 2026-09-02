// Moves the ram head along the SVG path based on scroll progress through the section.
// Returns a cleanup function for SvelteKit page teardown.
export function initRamPathAnimation() {
	const section = /** @type {HTMLElement | null} */ (document.querySelector('.path-proof-section'));
	const motionPath = /** @type {SVGPathElement | null} */ (document.querySelector('#js-motion-path'));
	const ramHead = /** @type {SVGImageElement | null} */ (document.querySelector('#js-path-ram'));
	const pathBullets = Array.from(document.querySelectorAll('.path-proof-bullet'));
	let scrollFrame = 0;
	let disposed = false;

	if (!section || !motionPath || !ramHead) {
		return () => {};
	}

	/**
	 * @param {number} value
	 */
	const clampProgress = (value) => Math.min(Math.max(value, 0), 1);

	const getScrollProgress = () => {
		const sectionRect = section.getBoundingClientRect();
		const scrollY = window.scrollY;
		const sectionTop = scrollY + sectionRect.top;
		const startPoint = window.innerHeight * 0.9;
		const endPoint = window.innerHeight * 0.28;
		const startScroll = sectionTop - startPoint;
		const naturalEndScroll = sectionTop + sectionRect.height - endPoint;
		const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
		const endScroll = Math.min(naturalEndScroll, maxScroll);
		const scrollRange = endScroll - startScroll;

		if (scrollRange <= 0) {
			return scrollY >= endScroll ? 1 : 0;
		}

		return clampProgress((scrollY - startScroll) / scrollRange);
	};

	/**
	 * @param {number} progress
	 */
	const updateBulletLights = (progress) => {
		pathBullets.forEach((bullet) => {
			const lightProgress = Number(bullet.getAttribute('data-progress'));

			bullet.classList.toggle('is-lit', progress >= lightProgress);
		});
	};

	/**
	 * @param {number} progress
	 */
	const placeRamOnPath = (progress) => {
		const pathLength = motionPath.getTotalLength();
		const point = motionPath.getPointAtLength(pathLength * progress);

		ramHead.setAttribute('transform', `translate(${point.x} ${point.y})`);
		updateBulletLights(progress);
	};

	const updateFromScroll = () => {
		scrollFrame = 0;

		if (disposed) {
			return;
		}

		placeRamOnPath(getScrollProgress());
	};

	const scheduleScrollUpdate = () => {
		if (scrollFrame) {
			return;
		}

		scrollFrame = window.requestAnimationFrame(updateFromScroll);
	};

	scheduleScrollUpdate();
	window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
	window.addEventListener('resize', scheduleScrollUpdate);
	window.addEventListener('load', scheduleScrollUpdate);
	window.addEventListener('pageshow', scheduleScrollUpdate);

	return () => {
		disposed = true;
		window.removeEventListener('scroll', scheduleScrollUpdate);
		window.removeEventListener('resize', scheduleScrollUpdate);
		window.removeEventListener('load', scheduleScrollUpdate);
		window.removeEventListener('pageshow', scheduleScrollUpdate);

		if (scrollFrame) {
			window.cancelAnimationFrame(scrollFrame);
			scrollFrame = 0;
		}
	};
}
