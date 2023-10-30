'use strict';
import Splide from '@splidejs/splide';
import {next} from "lodash/seq";

const toTopBtn = document.getElementById('to-top');
const htmlTag = document.querySelector('html');


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


import "./nav"
import "./splide-slider"
import "./slideshow-details"
import "./lightbox-selfcoded"


// Event Listener "DOMContentLoaded" wird nur ausgeführt, wenn der DOM fertig aufgebaut ist
document.addEventListener('DOMContentLoaded', function () {
    jsLoaded()
    showToTopBtn()
}, false)

document.addEventListener('scroll', function () {
    showToTopBtn()
})

