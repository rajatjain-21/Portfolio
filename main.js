$(document).ready(function () {
    $('.header').height($(window).height());
    $(".navbar a").click(function () {
        $("body,html").animate({scrollTop:$("#"+$(this).data('value')).offset().top},1000)
    })
    $(document).on('click','.navbar-collapse',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
})
