$(document).ready(function () {

    document.getElementById('footer-name').onclick = function () {
        document.getElementsByClassName('header')[0].scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('contact-btn').onclick = function () {
        document.getElementsByClassName('contact')[0].scrollIntoView({behavior: "smooth"});
    }

    $('#contact-form-btn').click(function () {
        let name = $('.contact-form-name');
        let mail = $('.contact-form-mail');
        let message = $('.contact-form-message');
        let hasError = false;

        if (!name.val()) {
            hasError = true;
            name.css("border-color", "#c20000");
        } else {
            name.css("border-color", "#F7F7F7");
        }

        if (!mail.val()) {
            hasError = true;
            mail.css("border-color", "#c20000");
        } else {
            mail.css("border-color", "#FFFFFF");
        }

        if (!message.val()) {
            hasError = true;
            message.css("border-color", "#c20000");
        } else {
            message.css("border-color", "#F7F7F7");
        }

        if (!hasError) {
            if (mailing.val()) {
                $('.mailing-btn').css('display', 'none');
                mailing.css('display', 'none');
                $('.mailing-thanks').css('display', 'block');
            } else {
                alert('Возникла ошибка, попробуйте еще раз')
            }
            console.log(mailing.val())
        };
    })

})