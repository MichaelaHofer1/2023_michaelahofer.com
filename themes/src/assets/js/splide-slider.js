'use strict';

// Slider with Splide-Slider
import Splide from "@splidejs/splide";

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
