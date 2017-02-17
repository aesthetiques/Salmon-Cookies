'use strict';

$('.slide').mouseover(function(){
  $(this).next('*').slideToggle();
});
