function getSlides(selector) {
	return document.querySelectorAll(selector)
}

function startSlide_1() {
	console.log('start')
	const interval = 3000;
	let index = 1;

	setInterval(() => {
		console.log(index)
		let slides = document.querySelectorAll('.container-4 .slide');
		const slide = document.querySelector('.container-4 .widget-con-3');		

		const slideWidth = slides[index].clientWidth;

		let groupSlides = 3;

		if (!(index >= slides.length - (groupSlides-1))) {
			slide.style.transition = '.7s ease-out';
			slide.style.transform = `translateX(${-slideWidth * index}px)`;
			index++}
		else {
			slide.style.transition = '.7s ease-out';
			slide.style.transform = `translateX(${0}px)`;
			index = 1;
		}
	}, interval);
}

startSlide_1();