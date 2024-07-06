const nav = document.getElementsByTagName('nav')[0];
const topNav = nav.offsetTop;

window.onscroll = function () {
    fixedNavTop();
}

function fixedNavTop() {
	if (window.scrollY >= (topNav - 25)) {
		nav.classList.add('nav_fixed-top');
		nav.classList.remove('nav');
	} else {
		nav.classList.add('nav');
		nav.classList.remove('nav_fixed-top');
	}
}
