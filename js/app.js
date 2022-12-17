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

// Getting requests
const form = document.getElementById('form')
const input = document.getElementById('input')
const getVideo = document.getElementById('video')
const videoDetail = document.getElementById('video-detail')
const convertNext = document.getElementById('convert-next')
const notFound = document.getElementById('not-found')
const loader = document.getElementById('loader')

loader.style.display = 'none'

form.addEventListener('submit', e => formHandler(e))

const formHandler = e => {
	e.preventDefault()

	const formData = new FormData(form)
	let obj = {}

	formData.forEach((value, key) => {
		obj[key] = value
	})

	if (!obj) {
		notFound.classList.add('notFound-active')
	} else {
		loader.style.display = 'block'
		fetchingLink(obj)
			.then(() => {
				loader.style.display = 'none'
			})
			.then(() => {
				videoDetail.classList.add('videoDetail-active')
			})
			.catch(e => {
				throw new Error(e)
			})

		getVideo.style.display = 'none'

		convertNext.addEventListener('click', () => {
			getVideo.style.display = 'block'
			videoDetail.classList.remove('videoDetail-active')
			input.value = ''
		})
	}
}

const fetchingLink = async obj => {
	const options = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(obj),
	}

	const response = await fetch('http://localhost:4444/links', options)
	const data = await response.json()
}

const loaderBlock = () => {
	document.body.classList.add()
}
