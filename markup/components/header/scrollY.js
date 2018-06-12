  const body = $('.page');
  const popupActive = $('.lity-opened');

  $('a[data-lity]').on('click', function() {
    body.addClass('vertical-scroll-disable');
  })

  $('.lity-wrap').on('click', function(){
      body.removeClass('vertical-scroll-disable');
  })
