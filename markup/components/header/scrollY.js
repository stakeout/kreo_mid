const body = $('.page');


$(document).on('lity:open', function(event, instance) {
    body.addClass('vertical-scroll-disable');
});
$(document).on('lity:close', function(event, instance) {
    body.removeClass('vertical-scroll-disable');
});

