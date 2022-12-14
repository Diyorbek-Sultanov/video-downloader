window.addEventListener('DOMContentLoaded', () => {
	// Nav close
	const navBtn = document.getElementById('nav__btn')
	const navClose = document.getElementById('nav__close')
	const nav = document.getElementById('my-nav')
	if (navBtn) {
		navBtn.addEventListener('click', () => {
			nav.classList.add('show-menu')
			console.log('dasd')
		})
	}

	if (navClose) {
		navClose.addEventListener('click', () => {
			nav.classList.remove('show-menu')
			console.log('dasd')
		})
	}

	// Navlink click close
	const navLinks = document.querySelectorAll('#nav__link')
	function navLink() {
		nav.classList.remove('show-menu')
	}

	navLinks.forEach(link => link.addEventListener('click', navLink))

	// Navlink active
	const links = document.querySelectorAll('.nav-link')

	links.forEach(link => {
		link.addEventListener('click', () => {
			clearActive()
			link.classList.add('nav-active')
		})
	})

	function clearActive() {
		links.forEach(link => link.classList.remove('nav-active'))
	}
})
