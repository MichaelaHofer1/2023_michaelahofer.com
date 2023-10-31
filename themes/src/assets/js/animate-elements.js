'use strict';

const isInViewport = function () {
    let elements = document.querySelectorAll('.animate')
    let animatedElement = 'animated'

    let windowTopPosition = window.scrollY
    let windowHeight = window.innerHeight || document.documentElement.clientHeight
    let windowBottom = windowTopPosition + windowHeight

    for (let i = 0; i < elements.length; i++) {
        let elementTopPosition = elements[i].getBoundingClientRect().top + windowTopPosition
        let elementBottomPosition = elements[i].getBoundingClientRect().bottom + windowTopPosition

        if (elementBottomPosition > windowTopPosition && elementTopPosition < windowBottom) {
            elements[i].classList.add(animatedElement)
        }
    }
}
const addAnimationClass = function () {
    const homeTeaserImgs = document.querySelectorAll("[class^='img']")
    const headlines = document.querySelectorAll('#page-headline, .teaser-headline')

    if (headlines) {
        headlines.forEach((h) => {
            h.classList.add('animate')
        })
    }

    homeTeaserImgs.forEach((img) => {
        img.classList.add('animate')
    })
}
document.addEventListener('DOMContentLoaded', function () {
    addAnimationClass()
    isInViewport()
}, false)
document.addEventListener('scroll', function () {
   isInViewport()
})