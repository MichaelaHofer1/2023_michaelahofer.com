'use strict';

const htmlTag = document.querySelector('html');
function jsLoaded() {
    htmlTag.classList.remove('no-js')
    htmlTag.classList.add('js')
};

const toTopBtn = document.getElementById('to-top');
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

import "./animate-elements"
import "./nav"
import "./splide-slider"
import "./slideshow-details"
import "./lightbox-selfcoded"

document.addEventListener('DOMContentLoaded', function () {
    jsLoaded()
    showToTopBtn()
}, false)

document.addEventListener('scroll', function () {
    showToTopBtn()
})