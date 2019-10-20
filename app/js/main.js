/*
 клик до якоря
 @param block {DOM elem} элемент, до которого едем
 @return скролл до нужного блока
*/
function clickButton(block) {
        var blockOffset = $(block).offset().top;

        return $('html, body').animate({
            scrollTop: blockOffset
        }, 1000);
}

$(document).ready(function () {

    /*-------------------------------------------------кнопка в хедере----------------------------------------------*/
    $('.header__btn').on('click', function (e) {
        e.preventDefault();

        clickButton($(this).attr('href'));
    });

    /*-------------------------------------------------кнопки меню----------------------------------------------*/
    $('.navigation-block-menu__link').on('click', function (e) {
        e.preventDefault();

        $('.navigation-block-menu__link').removeClass('active');
        $(this).addClass('active');
        clickButton($(this).attr('href'));
    });

    /*-------------------------------------------------фиксация меню----------------------------------------------*/

    $(document).on("scroll", function () {

        var documentScroll = $(this).scrollTop(),
            headerHeight = $('.header').height(),
            navHeight = $('.navigation').innerHeight();

        if (documentScroll > headerHeight) {
            $('.navigation').addClass('fixed');
            $('.header').css('paddingTop', navHeight); //добавляем паддинг у хедера, чтобы блок под меню не прыгал
        } else {
            $('.navigation').removeClass('fixed');
            $('.header').removeAttr('style');
        }

    });

    /*-------------------------------------------------slider----------------------------------------------*/
    if($('.clients-slider').length) {
        $('.clients-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000,
        });
    }

    /*-------------------------------------------------кнопка наверх----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    /*-------------------------------------------------валидация формы----------------------------------------------*/
    $('.contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 2
            }
        },
        messages: {
            name: {
                required: "Поле обязательно для заполнения",
                minlength: "Недостаточное количество символов"
            },
            email: {
                required: "Поле обязательно для заполнения",
                email: "Неправильный формат почты"
            },
            message: {
                required: "Поле обязательно для заполнения",
                minlength: "Недостаточное количество символов"
            }
        },
        focusCleanup: true, //убирает сообщение об ошибке в активном поле
        focusInvalid: false, //ставит фокус на первое поле ввода
        errorElement: "span",
        errorPlacement: function(error, element) {
            var $errorWrapper = $(element).closest('.form-block').find('.form-block__error');//input- родитель общий - деть-спан
            error.appendTo($errorWrapper);
        },
    });

});