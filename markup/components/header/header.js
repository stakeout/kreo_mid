export const stickyNav = () => {
    const $header = $('.page-header');
    const $logoImg = $('.logo a img');
    const $links = $('.navigation__link');
    const $signUp = $('.sign-up');
    const $signUpHeader = $('.sign-up--header');
    const $body = $('body');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 75) {
            $($header).addClass('stick');
            $($signUp).addClass('stick');
            $($signUpHeader).addClass('stick');
        } else {
            $($header).removeClass('stick');
            $($signUp).removeClass('stick');
            $($signUpHeader).removeClass('stick');
        }
    });
    if($body.hasClass('page--plan')) {
      $signUp.text('Get Free Trial');
      $signUp.attr('href','#signUpBeta');
      $signUp.attr('data-lity', 'data-lity');
    }
};
export const activePageLink = () => {
  const body = document.querySelector('.page');
  const navItems = document.querySelectorAll('.navigation__item');
  const products = document.querySelector('.navigation__item.dropdown');
  for (var i = 0; i < navItems.length; ++i) {
    navItems[i].classList.remove('navigation__item--active')
  }
  if (body.classList.contains('page--view') || body.classList.contains('page--plan')) {

    products.classList.add('navigation__item--active');
  }else if (body.classList.contains('page--index')) {
    navItems[0].classList.add('navigation__item--active');
  }

  if (body.classList.contains('page--contacts')) {
    navItems[4].classList.add('navigation__item--active');
  }
  if (body.classList.contains('page--blog')) {
    navItems[3].classList.add('navigation__item--active');
  }
  if (body.classList.contains('page--pricing')) {
    navItems[2].classList.add('navigation__item--active');
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

// export const navDropdown = () => {
//     // If a link has a dropdown, add sub menu toggle.
//     $('.navigation__item a:not(:only-child)').click(function(e) {
//       $(this).siblings('.sub-nav').toggle();
//       // Close one dropdown when selecting another
//        e.stopPropagation();
//     });
// }
