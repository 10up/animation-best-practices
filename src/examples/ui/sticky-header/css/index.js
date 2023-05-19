/**
 * Debounce
 *
 * @link https://www.javascript.christmas/2020/19
 *
 * @param {*} func
 * @param {*} wait
 * @param {*} maxWait
 * @returns
 */
function debounce(func, wait, maxWait) {
	let timeout;
	let max;

	return function () {
		const functionToCall = () => {
			func.apply(this, arguments);
			max = null;
		};

		if (!max) {
			max = setTimeout(functionToCall, maxWait);
		}

		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(functionToCall, wait);
	};
}

/**
 * Throttle
 *
 * @link https://www.javascript.christmas/2020/19
 *
 * @param {*} func
 * @param {*} wait
 * @returns
 */
function throttle(func, wait) {
	let waiting = false;
	return function () {

		if (waiting) {
			return;
		}

		waiting = true;
		setTimeout(() => {
			func.apply(this, arguments);
			waiting = false;
		}, wait);
	};
}

/**
 * Get header height
 */
function getOffsetHeight(element) {
	return element ? element.offsetHeight : 0;
}

/**
 * Set root style property
 *
 * @param {*} property
 * @param {*} value
 */
const setRootStyleProperty = (property, value) => {
	document.documentElement.style.setProperty(property, `${value}px`);
};

/**
 * Set scroll position threshold
 */
function setScrollPositionThreshold(headerHeight) {
	return headerHeight * 3;
}

document.addEventListener('DOMContentLoaded', function () {

	/**
	 * Sticky header behavior
	 */
	(function () {
		const header = document.querySelector('.site-header');

		/** Abort if header does not have the sticky modifier class. */
		if (!header.classList.contains('site-header--sticky')) {
			return;
		}

		let headerHeight = getOffsetHeight(header);
		let scrollPosition = 0;
		let scrollPositionThreshold = setScrollPositionThreshold(headerHeight);
		let scrollDistance;
		let scrollDistanceAbs;
		let scrollDistanceThreshold = 24;
		let scrollHideTimeout = 2000;
		let scrollDirection;
		let scrollDirectionCurrent;

		/** Update style property. */
		setRootStyleProperty('--header-height', headerHeight);

		/** Hide sticky header by adding a modifier class. */
		function hideStickyHeader() {
			header.classList.add('site-header--hide');
		}

		/** Show sticky header by removing a modifier class. */
		function showStickyHeader() {
			header.classList.remove('site-header--hide');
		}

		/** Resize, recalculate header height and scroll position threshold. */
		window.addEventListener('resize', throttle(() => {
			headerHeight = getOffsetHeight(header);
			scrollPositionThreshold = setScrollPositionThreshold(headerHeight);
		}, 100));

		/** Wait to initialize hiding behavior. (For local links on initial load.) */
		setTimeout(() => {

			/** Have we scrolled past the scroll position threshold? Hide the sticky header. */
			if (window.pageYOffset > scrollPositionThreshold) {
				hideStickyHeader();
			}

			/** Trigger sticky header hide behavior when clicking .site-content hash links. */
			const contentHashLinks = document.querySelectorAll('.site-content a[href^="#"]');
			contentHashLinks.forEach(element => {
				element.addEventListener('click', (event) => {
					if (event.target.offsetTop > scrollPositionThreshold) {
						hideStickyHeader();
					}
				})
			});

			/** Scroll, calculate sticky header hide and show behavior. */
			document.addEventListener('scroll', throttle(() => {
				scrollDistance = window.pageYOffset - scrollPosition;

				/** Have we scrolled past the scroll position threshold? Hide the sticky header. */
				if (window.pageYOffset > scrollPositionThreshold) {
					scrollDistanceAbs = Math.abs(scrollDistance);

					/** Have we scrolled past the scroll distance threshold? Hide or show the header. */
					if (scrollDistanceAbs > scrollDistanceThreshold) {
						scrollDirection = Math.sign(scrollDistance);

						/** Have we changed scroll direction? */
						if (scrollDirectionCurrent !== scrollDirection) {

							/** Update scroll direction. */
							scrollDirectionCurrent = Math.sign(scrollDirection);

							/** Are we scrolling up? Show the sticky header. */
							if (scrollDirection === -1) {
								showStickyHeader();
							}

							/** Are we scrolling down? Hide the sticky header. */
							if (scrollDirection === 1) {
								hideStickyHeader();
							}
						}
					}
				} else{
					/** Are we at the top of the page? Show the sticky header. */
					showStickyHeader();
				}

				/** Update scroll position. */
				scrollPosition = window.pageYOffset;

			}, 200));

		}, scrollHideTimeout);
	})();
});
