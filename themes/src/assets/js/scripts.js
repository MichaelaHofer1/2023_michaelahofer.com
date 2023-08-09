function jsLoaded() {
    const htmlTag = document.querySelector('html')
    htmlTag.classList.remove('no-js')
    htmlTag.classList.add('js')
}


document.addEventListener('DOMContentLoaded', function () {
    const sliderInitalizeSlideshow = function () {
        let splide = new Splide('#header-slider', {
            type: 'loop',
            easing: 'ease',
            autoplay: true,
            perPage: 1,
            interval: 3000,
            speed: 750,
            pagination: false,
            arrows: false
        });
        splide.mount();
    };

    if (window.acf) {
        window.acf.addAction('render_block_preview/type=header', sliderInitalizeSlideshow)
    }

});


// Event Listener "DOMContentLoaded" wird nur ausgeführt, wenn der DOM fertig aufgebaut ist
document.addEventListener('DOMContentLoaded', function () {
    jsLoaded()
}, false)
