//    Кнопка вверх (.btn_up) Begin

$('body').append('<button class="btn_up" />');

$('.btn_up').click(function () {
    $('body').animate({
        'scrollTop': 0
    }, 1000);
    $('html').animate({
        'scrollTop': 0
    }, 1000);
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.btn_up').addClass('active');
    } else {
        $('.btn_up').removeClass('active');
    }
});

//    Кнопка вверх (.btn_up) End

// Плавный скрол якорей
$(document).ready(function(){
    $("#footer-menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

//забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

//узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

//анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);
    });
});

// Плавный скрол якорей