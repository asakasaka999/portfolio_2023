$(function(){
    $(window).scroll(function(){
        for(var i = 1; i <= 5; i++){
            // + 100で判定を甘くさせる（領域を広くする）
            if($("section:nth-child(" + i + ")").offset().top < $(window).scrollTop() + 100){
                $("nav li").removeClass("current");
                $("nav li:nth-child(" + i + ")").addClass("current");
            }
        }
    })
});


$('.openBtn').click(function(){
    $(this).toggleClass('active');
    $('#g-nav').toggleClass('panelActive');
});

$('#g-nav a').click(function(){
    $('.openBtn').removeClass('active');
    $('#g-nav').removeClass('panelActive');
})
