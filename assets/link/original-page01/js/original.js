$(function () {
    $(".faq-heading").on("click", function () {
        $(this).next().slideToggle('slow');
    });
});