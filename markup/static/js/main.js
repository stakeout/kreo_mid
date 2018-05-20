'use strict';
import $ from 'jquery';
import lity from 'lity';
// import loadcss from 'loadcss';
import {stickyNav, activePageLink, mobileNav, navDropdown} from '../../components/header/header';
import  * as tabs from '../../components/solutions/solutions';
// import  * as youtube from '../../components/features/features';
import  * as faq from '../../components/faq/faq';
// import {subscribe} from '../../components/footer/subscribe';
/*
    This file can be used as entry point for webpack!
 */
$(() => {
  // subscribe();
  stickyNav();
  mobileNav();
  navDropdown();
  activePageLink();
  $(".solutions__inner").tabs();
})
