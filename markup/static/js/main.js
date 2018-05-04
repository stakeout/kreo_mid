'use strict';
import {stickyNav} from '../../components/header/header';
import  * as tabs from '../../components/solutions/solutions';
// import  * as youtube from '../../components/features/features';
import  * as faq from '../../components/faq/faq';
import iziModal from 'iziModal-1.6.0/js/iziModal';
/*
    This file can be used as entry point for webpack!
 */
$(() => {
  $.fn.iziModal = iziModal;
  stickyNav();
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
  var kreoView = $('#kreoView');
  if(kreoView.length) {
    kreoView.iziModal({
      width: '600px',
      closeOnEscape: true,
      closeButton: true
    });
  }
});
