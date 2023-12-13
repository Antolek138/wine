const bars = document.querySelector('.nav__bars')
const menu = document.querySelector('.nav__menu')
const navItem = document.querySelectorAll('.nav__item')
const btnNext = document.querySelector('.header__btn--next')
const btnPrev = document.querySelector('.header__btn--prev')
const btnRevOne = document.querySelector('.opinion--one')
const btnRevTwo = document.querySelector('.opinion--two')
const btnRevThree = document.querySelector('.opinion--three')

//?Zmienne slider header
let currentSlide = 0
const slides = document.querySelectorAll('.header__slide')
const totalSlides = slides.length
const sliderWrapper = document.querySelector('.header__slider')
const slideWidth = slides[0].clientWidth

// //?Zmienne slider opinion
let currentSlideOpinion = 0
const slidesOpinion = document.querySelectorAll('.opinion__user')
const totalSlidesOpinion = slidesOpinion.length
const sliderWrapperOpinion = document.querySelector('.opinion__wrapper')
const slideWidthOpinion = slidesOpinion[0].clientWidth

//!Slider w sekcji header
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

// //!Slider w sekcji opinion
const sliderOpinion = index => {
	if (index < 0) {
		currentSlideOpinion = totalSlidesOpinion - 1
	} else if (index >= totalSlidesOpinion) {
		currentSlideOpinion = 0
	} else {
		currentSlideOpinion = index
	}

	const displacementOpinion = -currentSlideOpinion * slideWidthOpinion
	sliderWrapperOpinion.style.transform = `translateX(${displacementOpinion}px)`
}

const menuActive = () => {
	bars.classList.toggle('nav__bars--active')
	menu.classList.toggle('nav__menu--active')

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			bars.classList.remove('nav__bars--active')
			menu.classList.remove('nav__menu--active')
		})
	})
}

bars.addEventListener('click', menuActive)
btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)

btnRevOne.addEventListener('click', () => sliderOpinion(0))
btnRevTwo.addEventListener('click', () => sliderOpinion(1))
btnRevThree.addEventListener('click', () => sliderOpinion(2))
