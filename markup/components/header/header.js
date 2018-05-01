export const stickyNav = () => {
    const $header = $('.page-header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 75) {
            $($header).addClass('stick');
        } else {
            $($header).removeClass('stick');
        }
    });
};
