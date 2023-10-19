import Splide from '@splidejs/splide';
import {next} from "lodash/seq";



const toTopBtn = document.getElementById('to-top');
const htmlTag = document.querySelector('html');
const navBar = document.getElementById('nav-bar');



function jsLoaded() {
    htmlTag.classList.remove('no-js')
    htmlTag.classList.add('js')
};

function showToTopBtn() {
    if (window.scrollY > 250) {
        toTopBtn.classList.add('show')
    } else {
        toTopBtn.classList.remove('show')
    }
}

toTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


// Slider with Splide-Slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderInitalize = function () {
        let splide = new Splide('#slideshow-section', {
            type: 'loop',
            perPage: 1,
            autoplay: false,
            interval: 3000,
            speed: 750,
            easing: 'ease',
            drag: true,
            pauseOnHover: true,
            pagination: true,
            arrows: false,
            width: '200px',
            height: '200px'
        });
        splide.mount();
    };

    const gallerySlider = document.getElementById('slideshow-section');
    if (gallerySlider) {
        sliderInitalize();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const headerSliderInitalize = function () {
        let splide = new Splide('#header-slider', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: false,
            speed: 750,
            easing: 'ease',
            drag: true,
            pagination: true,
            arrows: false,
            height: '100vh - 65px',
            breakpoints: {
                height: '100vh - 100px'
            },
            width: '100vw'
        });
        splide.mount();
    };

    var headerSlider = document.getElementById('header-slider');
    if (headerSlider) {
        headerSliderInitalize();
    }
});

/////////////////
// Gallery Sliders
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const dotContainer = document.querySelector('.dots')

    let curSlide = 0
    const maxSlide = slides.length


    // creating Dots and active Dot
    const createDots = function () {
        slides.forEach( function (_, i) {
            dotContainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`)
        })
    }
    const activateDot = function (slide) {
        const dots = document.querySelectorAll('.dots__dot')
        const dotActive = document.querySelector(`.dots__dot[data-slide="${slide}"]`)

        dots.forEach(dot => dot.classList.remove('.dots__dot--active'));
        dots.forEach(dot => dot.style.backgroundColor = '#5b5b5b')

        dotActive.classList.add('.dots__dot--active')
        dotActive.style.backgroundColor = 'white'

    };

    // go to slide
    const goToSlide = function (slide) {
        slides.forEach( (s, i) =>
        s.style.transform = `translateX(${100 * (i-slide)}%)`)
    }


    // next slide
    const nextSlide = function () {
        if(curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    }

    // previous slide
    const prevSlide = function () {
        if ( curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--
        }
        goToSlide(curSlide)
        activateDot(curSlide)
    }

    const init = function () {
        goToSlide(0);
        createDots();
        activateDot(curSlide);
    }
    init();

    document.addEventListener('keydown', function (e) {
        if(e.key === 'ArrowLeft') prevSlide();
        if(e.key === 'ArrowRight') nextSlide();
    })

    dotContainer.addEventListener('click', function (e) {
        if(e.target.classList.contains('dots__dot')) {
            const {slide} = e.target.dataset;
            goToSlide(slide)
            activateDot(slide)
        }
    })

    const startRotation = setInterval(nextSlide, 3000)
    slides.addEventListener('mouseover', function (e) {
        clearInterval()
    })
}
slider();














/////////
// nav Hover
const navHover = function (e, opacity, transition) {
    if(e.target.classList.contains('nav__link')) {
        const link = e.target;
        const sibling = link.closest('#nav-bar').querySelectorAll('.nav__link');
        const logo = link.closest('#nav-bar').querySelector('.custom-logo');

        sibling.forEach(el => {
            if ( el !== link) {
                el.style.opacity = opacity;
                el.style.transition = transition;
            }
        })
        logo.style.opacity = opacity;
        logo.style.transition = transition;
    }

}
navBar.addEventListener('mouseover', function (e) {
    navHover(e, .6, 'opacity ease-in 150ms')
})
navBar.addEventListener('mouseout', function (e) {
    navHover(e, 1, 'opacity ease-out 150ms')
})







// Event Listener "DOMContentLoaded" wird nur ausgeführt, wenn der DOM fertig aufgebaut ist
document.addEventListener('DOMContentLoaded', function () {
    jsLoaded()
    showToTopBtn()
}, false)

document.addEventListener('scroll', function () {
    showToTopBtn()
})
