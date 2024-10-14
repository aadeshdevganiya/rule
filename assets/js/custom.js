// #smoot scroll

$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        lerp: 0.1000
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

});

// sticky header

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

window.onscroll = function () {
    stickyHeader();
};

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// bottom-to-top-scroll
const scrollToTopBtn = document.getElementById('scroll-to-top');
const rootElement = document.documentElement;

window.addEventListener('scroll', () => {
    if (rootElement.scrollTop > 100) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// card-slider

$('.responsive').slick({
    dots: true,
    infinite: true, // Loop slides
    speed: 300,
    slidesToShow: 3, // Show one card at a time
    slidesToScroll: 1, // Scroll one card at a time
    responsive: [
        {
            breakpoint: 1400, // Adjust the settings for tablets
            settings: {
                slidesToShow: 2, // Show one card
                slidesToScroll: 1, // Scroll one card
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992, // Adjust for smaller screens
            settings: {
                slidesToShow: 1, // Show one card
                slidesToScroll: 1 // Scroll one card
            }
        }
    ]
});



