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

export default throttle;
