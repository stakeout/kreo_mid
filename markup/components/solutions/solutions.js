  $.fn.tabs = function () {
  var element = $(this);
  var nav = element.children('.solutions__controls');
  var contents = element.children('.solutions__tabs');

  nav.children().click(function () {
    var tab = $(this);
    var id = tab.data('tab');

    tab.addClass('active');
    tab.siblings().removeClass('active');

    var content = $('#' + id);
    content.show();
    content.siblings().hide();
  });

  nav.children('.active').click();
};
