$(document).ready(function () {

    document.getElementById('footer-name').onclick = function () {
        document.getElementsByClassName('header')[0].scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('contact-btn').onclick = function () {
        document.getElementsByClassName('contact')[0].scrollIntoView({behavior: "smooth"});
    }

})