$(function () {

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: false,
        speed:1000,
        fade: true,
    });

    $('.slide').slick({
        arrows: false,
        autoplay: false,
        pauseOnHover: false,
        dots: false,
        speed:1000,
        fade: true,
    });
    

    $('.sub_slide .arrows .left').on('click', function () {
        $('.slide').slick('slickPrev')
    });

    $('.sub_slide .arrows .right').on('click', function () {
        $('.slide').slick('slickNext')
    });



    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if($('.header .gnb').hasClass('on')) {
            e.preventDefault(); /* 윈도우 사이즈 주지 말고 , a링크 이동 안되게 */
            $(this).next().slideToggle();
            $(this).parent().siblings().find('.sub').slideUp();
        }
        
    });
    
    $(window).on('resize', () => {
        $('.header .gnb').removeClass('on')
        $('.header .gnb .sub').removeAttr('style');
    });
    


});