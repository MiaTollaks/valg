import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$(function(){
    cardNext();
});

function cardNext() {
    $('.btn').on('click', function(){
        $(this).addClass('clicked');
        $(this).siblings().removeClass('clicked');
        
        $('.back-next').css('display', 'block')   
         
    }); // end click
    
} // end cardNext()


 //SLIDESHOW


//$('.card-head').first().addClass('active');
//$('.card-head').hide();    
//$('.active').show();
//
//$('.btn-back-next').click(function(){
//   $('.active').removeClass('active').addClass('oldActive'); 
//    
//    if ( $('.oldActive').is(':last-child')) {
//        $('.card-head').first().addClass('active');
//    } else {
//        $('.oldActive').next().addClass('active');
//    }
//    
//    $('.oldActive').removeClass('oldActive');
//    $('.card-head').fadeOut();
//    $('.active').fadeIn();
//    
//    $('.btn').removeClass('clicked');    
//    $('.back-next').css('display', 'none');
//});
//    
//    
//$('.etst').click(function(){
//    $('.active').removeClass('active').addClass('oldActive');  
//
//    if ( $('.oldActive').is(':first-child')) {
//       $('.card-head').last().addClass('active');
//    } else{
//        $('.oldActive').prev().addClass('active');
//    }
//
//    $('.oldActive').removeClass('oldActive');
//    $('.card-head').fadeOut();
//    $('.active').fadeIn();
//    $('.btn').removeClass('clicked');
//
//});
//    
    

//$(document).ready(function(){
//
////    $(".card-head").on("swiperight", function(){
////
////        
////        $(this).addClass('rotate-left').delay(700).fadeOut(1);
////
////        if ($(this).is(':first-child')){
////            $('.finished').css('display','block');
////        }
////    });  
////
////    $(".card-head").on("swipeleft",function(){
////        $(this).addClass('rotate-right').delay(700).fadeOut(1);
////        
////        if ($(this).is(':first-child')){
////            $('.finished').css('display','block');
////        }        
////                
////    });
//    
//    
//    
//
//});
//



