$(".form-item.label_wrapper.date_label_wrapper").click(function() {
    $(".form-item.label_wrapper.date_label_wrapper").addClass("clicked");
});


$('#submit_review').on('click', function() {
    window.setTimeout(function() {
        $(".thank-you-popup").addClass('show');
    }, 100); //<-- Delay in milliseconds
});

$(".close-pop").click(function() {
    $(".thank-you-popup").removeClass('show');
});
// $('.confirm-unscribe').on('click', function() {
//     window.setTimeout(function() {
//         $(".fullscreen_loader").addClass('show');
//     }, 100); //<-- Delay in milliseconds
// });