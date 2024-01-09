window.addEventListener('scroll', function() {
	let page = '';
	if (window.scrollY === 0 || window.scrollY < 1080) page = '#page-1';
	else if (window.scrollY >= 1080 && window.scrollY < 2180) page = '#page-2';
	else if (window.scrollY >= 2180 && window.scrollY < 3180) page = '#page-3';
	else if (window.scrollY >= 3180 && window.scrollY < 4180) page = '#page-4';
	else page = '#page-5';

	document.querySelectorAll(`a[href="${page}"]`)[1].children[0].style.backgroundColor = '#c6891b';

	// Remove style from inactive page
	const ids = ['#page-1', '#page-2', '#page-3', '#page-4', '#page-5'];
	ids.forEach((id) => {
		if (id !== page) {
			document.querySelectorAll(`a[href="${id}"]`)[1].children[0].style.backgroundColor = '#fff';
		}
	})
});
