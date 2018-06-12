'use strict';
import $ from 'jquery';
import lity from 'lity';
// import loadcss from 'loadcss';
import {stickyNav, activePageLink, mobileNav} from '../../components/header/header';
import {blogSubscription} from '../../components/blog-data-list/blog-data-list';
import  * as tabs from '../../components/solutions/solutions';
// import  * as youtube from '../../components/features/features';
import  * as faq from '../../components/faq/faq';
import  * as scrollY from '../../components/header/scrollY';
// import {subscribe} from '../../components/footer/subscribe';
/*
    This file can be used as entry point for webpack!
 */

$(() => {
  // subscribe();
  stickyNav();
  mobileNav();
  activePageLink();
  $(".solutions__tabs-wrapper").tabs();
  blogSubscription();
  scrollY;

})
