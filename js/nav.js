const nav = document.getElementsByTagName('nav')[0];
const topNav = nav.offsetTop;

window.onscroll = function () {
    fixedNavTop();
}

// function getOffsetValue() {
//     if (window.matchMedia("(max-width: 1400px)").matches) {
//         return (topNav - 18);
//     } else if (window.matchMedia("(min-width: 2880px)").matches) {
//         return (topNav - 31);
//     } else if (window.matchMedia("(max-width: 3860px)").matches) {
//         return (topNav - 39);
//     } else {
//         return (topNav - 25); // Default case
//     }
// }

function fixedNavTop() {
	// const offsetValue = getOffsetValue();
	const offsetValue = (topNav - 25);

	if (window.scrollY >= offsetValue) {
		nav.classList.add('nav__fixed--top');
		nav.classList.remove('nav');
	} else {
		nav.classList.add('nav');
		nav.classList.remove('nav__fixed--top');
	}
}
