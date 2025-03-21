// ページ内スクロール
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const speed = 300;
    let href = $(this).attr('href');
    let target = $(href === '#' ? 'html' : href);
    if (target.length) {
        let position = target.offset().top;
        $('html, body').animate({
            scrollTop: position
        }, speed, 'swing');
    }
});

// ページトップへ戻る
const toTop = $('.to-top');
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        toTop.addClass('show');
    } else {
        toTop.removeClass('show');
    }
});
toTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 300);
});
