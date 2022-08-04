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

	// Button loading
	const button = document.querySelector('.button')
	const submit = document.querySelector('.submit')

	function toggleClass() {
		this.classList.toggle('active')
	}

	function addClass() {
		this.classList.add('finished')
	}

	button.addEventListener('click', toggleClass)
	button.addEventListener('transitionend', toggleClass)
	button.addEventListener('transitionend', addClass)

	// Used jquery to make navlink active
	$('[data-active]').on('click', function (event) {
		let navId = $(this).data('active')
		let $this = $(this)

		$('#my-nav a').removeClass('nav-active')
		$this.addClass('nav-active')
	})
})
