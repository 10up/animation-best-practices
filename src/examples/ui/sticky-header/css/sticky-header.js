import throttle from '@scripts/throttle.js';

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
function calculateScrollPositionThreshold(headerHeight) {
	return 2 * headerHeight;
}

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
	let scrollPositionThreshold = calculateScrollPositionThreshold(headerHeight);
	let scrollDistance;
	let scrollDistanceAbs;
	let scrollDistanceThreshold = 24;
	let scrollDirection;
	let scrollDirectionCurrent;

	/** Set header height. */
	function updateHeaderHeight() {
		headerHeight = getOffsetHeight(header);
		scrollPositionThreshold = calculateScrollPositionThreshold(headerHeight);

		/** Update style property. */
		document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
	}

	updateHeaderHeight();

	/** Resize, recalculate header height and scroll position threshold. */
	window.addEventListener('resize', throttle(() => {
		updateHeaderHeight();
	}, 100));

	/** Have we scrolled below the scroll position threshold? Hide the sticky header. */
	if (initialHide && window.pageYOffset > scrollPositionThreshold) {
		hideStickyHeader();
	}

	/** Trigger sticky header hide behavior when clicking .site-content hash links. */
	const hashLinks = document.querySelectorAll('a[href^="#"]');
	hashLinks.forEach(element => {
		element.addEventListener('click', (event) => {
			const target = document.querySelector(event.target.hash);

			if (!target) {
				return;
			}

			/** Is target position above the current scroll position? Show the sticky header. */
			if (target.offsetTop < window.pageYOffset) {
				showStickyHeader();
			}

			/** Have we scrolled below the scroll position threshold? Hide the sticky header. */
			if (window.pageYOffset > scrollPositionThreshold) {

				/** Is the target offset below the scroll position threshold? Hide the sticky header. */
				if (target.offsetTop > scrollPositionThreshold) {

					/** Is target position below the current scroll position? Hide the sticky header. */
					if (target.offsetTop > window.pageYOffset) {
						const html = document.documentElement;
						const body = document.body;
						const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

						/** Is the document long enough to scroll? Hide the sticky header. */
						if (window.innerHeight < documentHeight - scrollPositionThreshold) {
							hideStickyHeader();
						}
					}
				}
			}
		})
	});

	/** Scroll, calculate sticky header hide and show behavior. */
	document.addEventListener('scroll', throttle(() => {

		/** Wait to initialize hiding behavior. (For intial scroll and deep links with fragment.) */
		if (!hasScrolled) {
			setTimeout(() => {
				hasScrolled = true;
			}, behaviorTimeout);
			return;
		}

		/** Set scroll distance */
		scrollDistance = window.pageYOffset - scrollPosition;

		/** Have we scrolled below the scroll position threshold? */
		if (window.pageYOffset > scrollPositionThreshold) {

			/** Set scroll distance (absolute value) */
			scrollDistanceAbs = Math.abs(scrollDistance);

			/** Have we scrolled below the scroll distance threshold? Hide or show the header. */
			if (scrollDistanceAbs > scrollDistanceThreshold) {

				/** Update scroll direction. */
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
		} else {
			/** Are we within the threshold at the top of the page? Show the sticky header. */
			showStickyHeader();
		}

		/** Update scroll position. */
		scrollPosition = window.pageYOffset;
	}, 100));
}

export default init;
