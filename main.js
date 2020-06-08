//Nav Toggle setting
const navToggle = document.querySelector('.hamburger'),

	  navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {

	document.body.classList.toggle('open');

});

navLinks.forEach(link => {

	link.addEventListener('click', () => {

		document.body.classList.remove('open');

	});

});

























