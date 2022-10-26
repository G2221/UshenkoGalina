$(document).ready(function () {

    new WOW ({
        animateClass: 'animate__animated',
    }).init();

    document.getElementById('footer-name').onclick = function () {
        document.getElementsByClassName('header')[0].scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('contact-btn').onclick = function () {
        document.getElementsByClassName('contact')[0].scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('portfolio-btn').onclick = function () {
        document.getElementsByClassName('portfolio')[0].scrollIntoView({behavior: "smooth"});
    }

})