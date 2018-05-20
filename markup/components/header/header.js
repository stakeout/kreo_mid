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
export const activePageLink = () => {
  const body = document.querySelector('.page');
  const navItems = document.querySelectorAll('.navigation__item');
  const products = document.querySelector('.navigation__item.dropdown');
  for (var i =0; i < navItems.length; ++i) {
    navItems[i].classList.remove('navigation__item--active')
  }
  if (body.classList.contains('page--view') || body.classList.contains('page--plan')) {

    products.classList.add('navigation__item--active');
  }else if (body.classList.contains('page--index')) {
    navItems[0].classList.add('navigation__item--active');
  }

  if (body.classList.contains('page--contacts')) {
    navItems[3].classList.add('navigation__item--active');
  }

}
export const mobileNav = () => {
    const navBtn = document.querySelector('#nav-toggle');
    const navigation = document.querySelector('.navigation');
    navBtn.addEventListener('click', function () {
        this.classList.toggle('open');
        if (this.classList.contains('open')) {
            navigation.classList.add('open');
        } else {
            navigation.classList.remove('open');
        }
    });
};

export const navDropdown = () => {
    // If a link has a dropdown, add sub menu toggle.
    $('.navigation__item a:not(:only-child)').click(function(e) {
      $(this).siblings('.sub-nav').toggle();
      // Close one dropdown when selecting another
       e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.sub-nav').hide();
    });
}
