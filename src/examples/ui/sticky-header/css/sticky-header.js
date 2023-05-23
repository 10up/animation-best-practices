import throttle from '../../../../assets/js/throttle.js';

const debug = false;
const header = document.querySelector('.site-header');

/**
 * Get header height
 */
function getOffsetHeight(element) {
	return element ? element.offsetHeight : 0;
}

/**
 * Get scroll position threshold
 */
function getScrollPositionThreshold(headerHeight) {
	return 2 * headerHeight;
}

/**
 * Hide sticky header by adding a modifier class.
 */
function hideStickyHeader(log = '') {
	if (debug && log) { console.log('hide:', log); }

	if (!header.matches(':hover')) {
		header.classList.add('site-header--hide');
	}
}

/**
 * Show sticky header by removing a modifier class.
 */
function showStickyHeader(log = '') {
	if (debug && log) { console.log('show:', log); }

	header.classList.remove('site-header--hide');
}

function init() {

	/** Abort if header does not have the sticky modifier class. */
	if (!header.classList.contains('site-header--sticky')) {
		return;
	}

	const initialHide = false;
	let hasScrolled = false;
	let behaviorTimeout = 1000;
	let headerHeight = getOffsetHeight(header);
	let scrollPosition = 0;
	let scrollPositionThreshold = getScrollPositionThreshold(headerHeight);
	let scrollDistance;
	let scrollDistanceAbs;
	let scrollDistanceThreshold = 24;
	let scrollDirection;
	let scrollDirectionCurrent;

	/** Set header height. */
	function setHeaderHeight() {
		headerHeight = getOffsetHeight(header);
		scrollPositionThreshold = getScrollPositionThreshold(headerHeight);

		/** Update style property. */
		document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
	}

	setHeaderHeight();

	/** Resize, recalculate header height and scroll position threshold. */
	window.addEventListener('resize', setHeaderHeight);

	/** Have we scrolled below the scroll position threshold? Hide the sticky header. */
	if (initialHide && window.pageYOffset > scrollPositionThreshold) {
		hideStickyHeader('initial');
	}

	/** Trigger sticky header hide behavior when clicking .site-content hash links. */
	const hashLinks = document.querySelectorAll('a[href^="#"]');
	hashLinks.forEach(element => {
		element.addEventListener('click', (event) => {
			const target = document.querySelector(event.target.hash);

			/** Is target position above the current scroll position? Show the sticky header. */
			if (target.offsetTop < window.pageYOffset) {
				showStickyHeader('above');
			}

			/** Is target position below the scroll position threshold? Hide the sticky header. */
			if (target.offsetTop > window.pageYOffset) {
				if (event.target.offsetTop > scrollPositionThreshold && target.offsetTop > scrollPositionThreshold) {
					hideStickyHeader('below');
				}
			}
		})
	});

	/** Scroll, calculate sticky header hide and show behavior. */
	document.addEventListener('scroll', throttle(() => {

		/** Wait to initialize hiding behavior. (For local links on initial load.) */
		if (!hasScrolled) {
			setTimeout(() => {
				hasScrolled = true;
			}, behaviorTimeout);
			return;
		}

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
						showStickyHeader('up ' + scrollDirection);
					}

					/** Are we scrolling down? Hide the sticky header. */
					if (scrollDirection === 1) {
						hideStickyHeader('down ' + scrollDirection);
					}
				}
			}
		} else {
			/** Are we at the top of the page? Show the sticky header. */
			showStickyHeader('top');
		}

		/** Update scroll position. */
		scrollPosition = window.pageYOffset;
	}, 100));
}

export default init;
