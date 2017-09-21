import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

//$(function(){
//    cardNext();
//    
//});
//
//function cardNext() {
//    $('.btn').on('click', function(){
//        $(this).addClass('clicked');
//        $(this).siblings().removeClass('clicked');
//        
//        $('.back-next').css('display', 'block');  
//       
//         
//    }); // end click
//    
//} // end cardNext()


$(document).ready(function(){

    $(".card-head").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.card-head').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.card-head:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

   $(".card-head").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.card-head').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.card-head:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('OUPS');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

});