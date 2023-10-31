'use strict';

const pictures = document.querySelectorAll('.img');
const slides = document.querySelectorAll('.slide');
const slideShowContainer = document.querySelectorAll('.slider__gallery')
const lightboxContainer = document.querySelector('.lightbox-container');
/*const lightboxInnerBox = document.querySelector('.lightbox');*/


const openLightbox = function () {
    pictures.forEach((img) => {
        img.addEventListener('click', function () {
            lightboxContainer.classList.add('lightbox-container--active');
            img.classList.add('delay')

            setTimeout(function () {
                img.classList.add('big')
            }, 0)
        })
    })

    slides.forEach((slide) => {
        slide.addEventListener('click', function () {
            lightboxContainer.classList.add('lightbox-container--active');
            slide.parentElement.classList.add('slider-big')
            /*slide.classList.add('delay')*/

            setTimeout(function () {
                slide.classList.add('big')
            }, 0)
        })
    })
}

const removeLightbox = function () {
    lightboxContainer.addEventListener('click', function () {
        lightboxContainer.classList.remove('lightbox-container--active');

        pictures.forEach((img, i) => {
            img.classList.remove('delay')
            img.classList.remove('big')
        })

        slides.forEach((slide) => {
            slide.parentElement.classList.remove('slider-big')
            slide.classList.remove('delay')
            slide.classList.remove('big')
        })
    })
}

if (lightboxContainer) {
    openLightbox()
    removeLightbox()
}


