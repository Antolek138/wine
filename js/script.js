const bars = document.querySelector('.nav__bars')
const menu = document.querySelector('.nav__menu')
const btnNext = document.querySelector('.header__btn--next')
const btnPrev = document.querySelector('.header__btn--prev')

let currentSlide = 0
const slides = document.querySelectorAll('.header__slide')
const totalSlides = slides.length
const sliderWrapper = document.querySelector('.header__slider')
const slideWidth = slides[0].clientWidth

const menuActive = () => {
	bars.classList.toggle('nav__bars--active')
	menu.classList.toggle('nav__menu--active')
}

const slider = index => {
	if (index < 0) {
		currentSlide = totalSlides - 1
	} else if (index >= totalSlides) {
		currentSlide = 0
	} else {
		currentSlide = index
	}

	const displacement = -currentSlide * slideWidth
	sliderWrapper.style.transform = `translateX(${displacement}px)`
}

function nextSlide() {
	slider(currentSlide + 1)
}

function prevSlide() {
	slider(currentSlide - 1)
}

bars.addEventListener('click', menuActive)
btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)
