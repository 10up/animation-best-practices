import throttle from '@scripts/throttle.js';

const header = document.querySelector('.site-header');
let headerHeight = header.offsetHeight;
let scrollPosition;
let scrollPositionLast;
let scrollPositionThreshold = (2 * headerHeight); /** Minimum 1 * headerHeight */
let scrollDistance;
let scrollDistanceThreshold = 24;
let scrollDirection;
let scrollDirectionLast;

/**
 * Hide sticky header by adding a modifier class.
 */
function hideStickyHeader() {
	if (!header.matches(':hover')) {
		header.classList.add('site-header--hide');
	}
}

/**
 * Show sticky header by removing a modifier class.
 */
function showStickyHeader() {
	header.classList.remove('site-header--hide');
}

/**
 * Update header height variables.
 */
function updateHeaderHeight() {

	/** Recalculate header height and scroll position threshold. */
	headerHeight = header.offsetHeight;
	scrollPositionThreshold = (2 * headerHeight); /** Minimum 1 * headerHeight */

	/** Update style property. */
	document.documentElement.style.setProperty('--sticky-header-height', `${headerHeight}px`);
}

function init() {

	/** Abort if header does not have the sticky modifier class. */
	if (!header.classList.contains('site-header--sticky')) {
		return;
	}

	updateHeaderHeight();

	window.addEventListener('resize', throttle(() => {
		updateHeaderHeight();
	}, 100));

	/** Scroll, calculate sticky header hide and show behavior. */
	document.addEventListener('scroll', throttle(() => {

		/** Update scroll position */
		scrollPosition = window.pageYOffset;

		/** Update scroll distance */
		scrollDistance = scrollPosition - scrollPositionLast;

		/** Are we within the threshold at the top of the page? Show the sticky header. */
		if (scrollPosition < scrollPositionThreshold) {
			showStickyHeader();
		} else {

			/** Have we scrolled more than the scroll distance threshold? Hide or show the header. */
			if (Math.abs(scrollDistance) > scrollDistanceThreshold) {

				/** Update scroll direction. */
				scrollDirection = Math.sign(scrollDistance);

				/** Have we changed scroll direction? */
				if (scrollDirectionLast !== scrollDirection) {

					/** Update last scroll direction. */
					scrollDirectionLast = Math.sign(scrollDirection);

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
		}

		/** Update last scroll position. */
		scrollPositionLast = scrollPosition;
	}, 100));
}

init();
