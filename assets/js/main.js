"use strict";
// メニュー
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $(this).toggleClass('active');
    $('.global-nav').toggleClass('panel');
  });
  $('.global-nav ul li a').click(function() {
    $('.menu-toggle').removeClass('active');
    $('global-nav').removeClass('panel');
  });
});