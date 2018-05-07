'use strict';
// import magnificPopup from 'magnific-popup';
import {stickyNav, activePageLink} from '../../components/header/header';
import  * as tabs from '../../components/solutions/solutions';
// import  * as youtube from '../../components/features/features';
import  * as faq from '../../components/faq/faq';
import iziModal from 'iziModal-1.6.0/js/iziModal';
// import * as magnificPopup from '../../components/features/magnific';
/*
    This file can be used as entry point for webpack!
 */
$(() => {
  $.fn.iziModal = iziModal;
  stickyNav();
  activePageLink();
  // var modal = new iziModal();
  $(".solutions__inner").tabs();
  var signUp = $('#signUp');
  if (signUp.length){
    signUp.iziModal({
      width: '600px',
      closeOnEscape: true,
      closeButton: true
    });
  }
})
