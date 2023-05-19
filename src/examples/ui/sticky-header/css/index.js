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
// function debounce(func, wait, maxWait) {
// 	let timeout;
// 	let max;
//
// 	return function () {
// 		const functionToCall = () => {
// 			func.apply(this, arguments);
// 			max = null;
// 		};
//
// 		if (!max) {
// 			max = setTimeout(functionToCall, maxWait);
// 		}
//
// 		if (timeout) {
// 			clearTimeout(timeout);
// 		}
// 		timeout = setTimeout(functionToCall, wait);
// 	};
// }

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
 * Get scroll position threshold
 */
function getScrollPositionThreshold(headerHeight) {
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

		const initialHide = false;
		let behaviorTimeout = 2000;
		let headerHeight = getOffsetHeight(header);
		let scrollPosition = 0;
		let scrollPositionThreshold = getScrollPositionThreshold(headerHeight);
		let scrollDistance;
		let scrollDistanceAbs;
		let scrollDistanceThreshold = 24;
		let scrollDirection;
		let scrollDirectionCurrent;

		/** Update style property. */
		function setHeaderHeight() {
			headerHeight = getOffsetHeight(header);
			scrollPositionThreshold = getScrollPositionThreshold(headerHeight);
			setRootStyleProperty('--header-height', headerHeight);
		}

		setHeaderHeight();

		/** Resize, recalculate header height and scroll position threshold. */
		window.addEventListener('resize', setHeaderHeight);

		/** Hide sticky header by adding a modifier class. */
		function hideStickyHeader() {
			header.classList.add('site-header--hide');
		}

		/** Show sticky header by removing a modifier class. */
		function showStickyHeader() {
			header.classList.remove('site-header--hide');
		}

		/** Wait to initialize hiding behavior. (For local links on initial load.) */
		setTimeout(() => {

			/** Have we scrolled below the scroll position threshold? Hide the sticky header. */
			if (initialHide && window.pageYOffset > scrollPositionThreshold) {
				hideStickyHeader();
			}

			/** Trigger sticky header hide behavior when clicking .site-content hash links. */
			const hashLinks = document.querySelectorAll('a[href^="#"]');
			hashLinks.forEach(element => {
				element.addEventListener('click', (event) => {
					const target = document.querySelector(event.target.hash);

					/** Is target position below the scroll position threshold? Hide the sticky header. */
					if (target.offsetTop > scrollPositionThreshold) {
						hideStickyHeader();
					}

					/** Is target position above the current scroll position? Show the sticky header. */
					if (target.offsetTop < window.pageYOffset) {
						showStickyHeader();
					}
				})
			});

			/** Scroll, calculate sticky header hide and show behavior. */
			document.addEventListener('scroll', throttle(() => {
				scrollDistance = window.pageYOffset - scrollPosition;

				/** Have we scrolled below the scroll position threshold? Hide the sticky header. */
				if (window.pageYOffset > scrollPositionThreshold) {
					scrollDistanceAbs = Math.abs(scrollDistance);

					/** Have we scrolled below the scroll distance threshold? Hide or show the header. */
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

		}, behaviorTimeout);
	})();
});
